# SDK

## Overview

Amazon SimpleDB is a web service providing the core database functions of data indexing and querying in the cloud. By offloading the time and effort associated with building and operating a web-scale database, SimpleDB provides developers the freedom to focus on application development. <p> A traditional, clustered relational database requires a sizable upfront capital outlay, is complex to design, and often requires extensive and repetitive database administration. Amazon SimpleDB is dramatically simpler, requiring no schema, automatically indexing your data and providing a simple API for storage and access. This approach eliminates the administrative burden of data modeling, index maintenance, and performance tuning. Developers gain access to this functionality within Amazon's proven computing environment, are able to scale instantly, and pay only for what they use. </p> <p> Visit <a href="http://aws.amazon.com/simpledb/">http://aws.amazon.com/simpledb/</a> for more information. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sdb/>
### Available Operations

* [getCreateDomain](#getcreatedomain) - <p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>
* [getDeleteDomain](#getdeletedomain) - <p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>
* [getDomainMetadata](#getdomainmetadata) -  Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 
* [getGETAttributes](#getgetattributes) - <p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>
* [getListDomains](#getlistdomains) -  The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 
* [getSelect](#getselect) - <p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>
* [postBatchDeleteAttributes](#postbatchdeleteattributes) - <p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>
* [postBatchPutAttributes](#postbatchputattributes) - <p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>
* [postCreateDomain](#postcreatedomain) - <p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>
* [postDeleteAttributes](#postdeleteattributes) - <p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>
* [postDeleteDomain](#postdeletedomain) - <p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>
* [postDomainMetadata](#postdomainmetadata) -  Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 
* [postGetAttributes](#postgetattributes) - <p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>
* [postListDomains](#postlistdomains) -  The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 
* [postPutAttributes](#postputattributes) - <p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", second_value" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>
* [postSelect](#postselect) - <p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

## getCreateDomain

<p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDomainActionEnum;
import org.openapis.openapi.models.operations.GETCreateDomainRequest;
import org.openapis.openapi.models.operations.GETCreateDomainResponse;
import org.openapis.openapi.models.operations.GETCreateDomainVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDomainRequest req = new GETCreateDomainRequest("vel", GETCreateDomainActionEnum.CREATE_DOMAIN, "error", "deserunt", "suscipit", "iure", "magnam", GETCreateDomainVersionEnum.TWO_THOUSAND_AND_NINE0415);            

            GETCreateDomainResponse res = sdk.sdk.getCreateDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDomain

<p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDomainActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDomainRequest;
import org.openapis.openapi.models.operations.GETDeleteDomainResponse;
import org.openapis.openapi.models.operations.GETDeleteDomainVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDomainRequest req = new GETDeleteDomainRequest("ipsa", GETDeleteDomainActionEnum.DELETE_DOMAIN, "delectus", "tempora", "suscipit", "molestiae", "minus", GETDeleteDomainVersionEnum.TWO_THOUSAND_AND_NINE0415);            

            GETDeleteDomainResponse res = sdk.sdk.getDeleteDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainMetadata

 Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDomainMetadataActionEnum;
import org.openapis.openapi.models.operations.GETDomainMetadataRequest;
import org.openapis.openapi.models.operations.GETDomainMetadataResponse;
import org.openapis.openapi.models.operations.GETDomainMetadataVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDomainMetadataRequest req = new GETDomainMetadataRequest("voluptatum", GETDomainMetadataActionEnum.DOMAIN_METADATA, "iusto", "excepturi", "nisi", "recusandae", "temporibus", GETDomainMetadataVersionEnum.TWO_THOUSAND_AND_NINE0415);            

            GETDomainMetadataResponse res = sdk.sdk.getDomainMetadata(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETAttributes

<p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETAttributesActionEnum;
import org.openapis.openapi.models.operations.GETGETAttributesRequest;
import org.openapis.openapi.models.operations.GETGETAttributesResponse;
import org.openapis.openapi.models.operations.GETGETAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETAttributesRequest req = new GETGETAttributesRequest("quis", GETGETAttributesActionEnum.GET_ATTRIBUTES, "veritatis", "deserunt", "perferendis", "ipsam", "repellendus", "sapiente", GETGETAttributesVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                attributeNames = new String[]{{
                    add("odit"),
                    add("at"),
                    add("at"),
                    add("maiores"),
                }};
                consistentRead = false;
            }};            

            GETGETAttributesResponse res = sdk.sdk.getGETAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListDomains

 The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListDomainsActionEnum;
import org.openapis.openapi.models.operations.GETListDomainsRequest;
import org.openapis.openapi.models.operations.GETListDomainsResponse;
import org.openapis.openapi.models.operations.GETListDomainsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListDomainsRequest req = new GETListDomainsRequest("quod", GETListDomainsActionEnum.LIST_DOMAINS, "quod", "esse", "totam", "porro", GETListDomainsVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                maxNumberOfDomains = 678880L;
                nextToken = "dicta";
            }};            

            GETListDomainsResponse res = sdk.sdk.getListDomains(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSelect

<p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSelectActionEnum;
import org.openapis.openapi.models.operations.GETSelectRequest;
import org.openapis.openapi.models.operations.GETSelectResponse;
import org.openapis.openapi.models.operations.GETSelectVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSelectRequest req = new GETSelectRequest("officia", GETSelectActionEnum.SELECT, "occaecati", "fugit", "deleniti", "hic", "optio", GETSelectVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                consistentRead = false;
                nextToken = "totam";
            }};            

            GETSelectResponse res = sdk.sdk.getSelect(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchDeleteAttributes

<p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchDeleteAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTBatchDeleteAttributesRequest;
import org.openapis.openapi.models.operations.POSTBatchDeleteAttributesResponse;
import org.openapis.openapi.models.operations.POSTBatchDeleteAttributesVersionEnum;
import org.openapis.openapi.models.shared.BatchDeleteAttributesRequest;
import org.openapis.openapi.models.shared.DeletableAttributeList;
import org.openapis.openapi.models.shared.DeletableItemList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchDeleteAttributesRequest req = new POSTBatchDeleteAttributesRequest("commodi", POSTBatchDeleteAttributesActionEnum.BATCH_DELETE_ATTRIBUTES, "molestiae", "modi", "qui", "impedit", POSTBatchDeleteAttributesVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                requestBody = "cum".getBytes();
            }};            

            POSTBatchDeleteAttributesResponse res = sdk.sdk.postBatchDeleteAttributes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBatchPutAttributes

<p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBatchPutAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTBatchPutAttributesRequest;
import org.openapis.openapi.models.operations.POSTBatchPutAttributesResponse;
import org.openapis.openapi.models.operations.POSTBatchPutAttributesVersionEnum;
import org.openapis.openapi.models.shared.BatchPutAttributesRequest;
import org.openapis.openapi.models.shared.ReplaceableAttributeList;
import org.openapis.openapi.models.shared.ReplaceableItemList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBatchPutAttributesRequest req = new POSTBatchPutAttributesRequest("ipsum", POSTBatchPutAttributesActionEnum.BATCH_PUT_ATTRIBUTES, "excepturi", "aspernatur", "perferendis", "ad", POSTBatchPutAttributesVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                requestBody = "natus".getBytes();
            }};            

            POSTBatchPutAttributesResponse res = sdk.sdk.postBatchPutAttributes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDomain

<p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDomainActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDomainRequest;
import org.openapis.openapi.models.operations.POSTCreateDomainResponse;
import org.openapis.openapi.models.operations.POSTCreateDomainVersionEnum;
import org.openapis.openapi.models.shared.CreateDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDomainRequest req = new POSTCreateDomainRequest("iste", POSTCreateDomainActionEnum.CREATE_DOMAIN, "dolor", "natus", "laboriosam", "hic", POSTCreateDomainVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                requestBody = "saepe".getBytes();
            }};            

            POSTCreateDomainResponse res = sdk.sdk.postCreateDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAttributes

<p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAttributesRequest;
import org.openapis.openapi.models.operations.POSTDeleteAttributesResponse;
import org.openapis.openapi.models.operations.POSTDeleteAttributesVersionEnum;
import org.openapis.openapi.models.shared.DeletableAttributeList;
import org.openapis.openapi.models.shared.DeleteAttributesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCondition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAttributesRequest req = new POSTDeleteAttributesRequest("in", POSTDeleteAttributesActionEnum.DELETE_ATTRIBUTES, "corporis", "iste", "iure", "saepe", POSTDeleteAttributesVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                requestBody = "quidem".getBytes();
            }};            

            POSTDeleteAttributesResponse res = sdk.sdk.postDeleteAttributes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDomain

<p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDomainActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDomainRequest;
import org.openapis.openapi.models.operations.POSTDeleteDomainResponse;
import org.openapis.openapi.models.operations.POSTDeleteDomainVersionEnum;
import org.openapis.openapi.models.shared.DeleteDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDomainRequest req = new POSTDeleteDomainRequest("ipsa", POSTDeleteDomainActionEnum.DELETE_DOMAIN, "reiciendis", "est", "mollitia", "laborum", POSTDeleteDomainVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                requestBody = "dolores".getBytes();
            }};            

            POSTDeleteDomainResponse res = sdk.sdk.postDeleteDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDomainMetadata

 Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDomainMetadataActionEnum;
import org.openapis.openapi.models.operations.POSTDomainMetadataRequest;
import org.openapis.openapi.models.operations.POSTDomainMetadataResponse;
import org.openapis.openapi.models.operations.POSTDomainMetadataVersionEnum;
import org.openapis.openapi.models.shared.DomainMetadataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDomainMetadataRequest req = new POSTDomainMetadataRequest("corporis", POSTDomainMetadataActionEnum.DOMAIN_METADATA, "explicabo", "nobis", "enim", "omnis", POSTDomainMetadataVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                requestBody = "nemo".getBytes();
            }};            

            POSTDomainMetadataResponse res = sdk.sdk.postDomainMetadata(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetAttributes

<p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTGetAttributesRequest;
import org.openapis.openapi.models.operations.POSTGetAttributesResponse;
import org.openapis.openapi.models.operations.POSTGetAttributesVersionEnum;
import org.openapis.openapi.models.shared.GetAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetAttributesRequest req = new POSTGetAttributesRequest("excepturi", POSTGetAttributesActionEnum.GET_ATTRIBUTES, "accusantium", "iure", "culpa", "doloribus", POSTGetAttributesVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                requestBody = "sapiente".getBytes();
            }};            

            POSTGetAttributesResponse res = sdk.sdk.postGetAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListDomains

 The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListDomainsActionEnum;
import org.openapis.openapi.models.operations.POSTListDomainsRequest;
import org.openapis.openapi.models.operations.POSTListDomainsResponse;
import org.openapis.openapi.models.operations.POSTListDomainsVersionEnum;
import org.openapis.openapi.models.shared.ListDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListDomainsRequest req = new POSTListDomainsRequest("mollitia", POSTListDomainsActionEnum.LIST_DOMAINS, "dolorem", "culpa", "consequuntur", "repellat", POSTListDomainsVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                maxNumberOfDomains = "mollitia";
                nextToken = "occaecati";
                requestBody = "numquam".getBytes();
            }};            

            POSTListDomainsResponse res = sdk.sdk.postListDomains(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutAttributes

<p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", second_value" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTPutAttributesRequest;
import org.openapis.openapi.models.operations.POSTPutAttributesResponse;
import org.openapis.openapi.models.operations.POSTPutAttributesVersionEnum;
import org.openapis.openapi.models.shared.PutAttributesRequest;
import org.openapis.openapi.models.shared.ReplaceableAttributeList;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCondition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutAttributesRequest req = new POSTPutAttributesRequest("quam", POSTPutAttributesActionEnum.PUT_ATTRIBUTES, "molestiae", "velit", "error", "quia", POSTPutAttributesVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                requestBody = "quis".getBytes();
            }};            

            POSTPutAttributesResponse res = sdk.sdk.postPutAttributes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSelect

<p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSelectActionEnum;
import org.openapis.openapi.models.operations.POSTSelectRequest;
import org.openapis.openapi.models.operations.POSTSelectResponse;
import org.openapis.openapi.models.operations.POSTSelectVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelectRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSelectRequest req = new POSTSelectRequest("laborum", POSTSelectActionEnum.SELECT, "animi", "enim", "odit", "quo", POSTSelectVersionEnum.TWO_THOUSAND_AND_NINE0415) {{
                nextToken = "sequi";
                requestBody = "tenetur".getBytes();
            }};            

            POSTSelectResponse res = sdk.sdk.postSelect(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
