# SDK

## Overview

<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region">Regions and Endpoints</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudsearch/>
### Available Operations

* [getCreateDomain](#getcreatedomain) - Creates a new search domain.
* [getDefineRankExpression](#getdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [getDeleteDomain](#getdeletedomain) - Permanently deletes a search domain and all of its data.
* [getDeleteIndexField](#getdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [getDeleteRankExpression](#getdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [getDescribeAvailabilityOptions](#getdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeDefaultSearchField](#getdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [getDescribeDomains](#getdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [getDescribeIndexFields](#getdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [getDescribeRankExpressions](#getdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [getDescribeServiceAccessPolicies](#getdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [getDescribeStemmingOptions](#getdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [getDescribeStopwordOptions](#getdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [getDescribeSynonymOptions](#getdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [getIndexDocuments](#getindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [getUpdateAvailabilityOptions](#getupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getUpdateDefaultSearchField](#getupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [getUpdateServiceAccessPolicies](#getupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [getUpdateStemmingOptions](#getupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [getUpdateStopwordOptions](#getupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [getUpdateSynonymOptions](#getupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* [postCreateDomain](#postcreatedomain) - Creates a new search domain.
* [postDefineIndexField](#postdefineindexfield) - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* [postDefineRankExpression](#postdefinerankexpression) - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* [postDeleteDomain](#postdeletedomain) - Permanently deletes a search domain and all of its data.
* [postDeleteIndexField](#postdeleteindexfield) - Removes an <code>IndexField</code> from the search domain.
* [postDeleteRankExpression](#postdeleterankexpression) - Removes a <code>RankExpression</code> from the search domain.
* [postDescribeAvailabilityOptions](#postdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeDefaultSearchField](#postdescribedefaultsearchfield) - Gets the default search field configured for the search domain.
* [postDescribeDomains](#postdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* [postDescribeIndexFields](#postdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* [postDescribeRankExpressions](#postdescriberankexpressions) - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* [postDescribeServiceAccessPolicies](#postdescribeserviceaccesspolicies) - Gets information about the resource-based policies that control access to the domain's document and search services.
* [postDescribeStemmingOptions](#postdescribestemmingoptions) - Gets the stemming dictionary configured for the search domain.
* [postDescribeStopwordOptions](#postdescribestopwordoptions) - Gets the stopwords configured for the search domain.
* [postDescribeSynonymOptions](#postdescribesynonymoptions) - Gets the synonym dictionary configured for the search domain.
* [postIndexDocuments](#postindexdocuments) - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* [postUpdateAvailabilityOptions](#postupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postUpdateDefaultSearchField](#postupdatedefaultsearchfield) - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* [postUpdateServiceAccessPolicies](#postupdateserviceaccesspolicies) - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* [postUpdateStemmingOptions](#postupdatestemmingoptions) - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* [postUpdateStopwordOptions](#postupdatestopwordoptions) - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* [postUpdateSynonymOptions](#postupdatesynonymoptions) - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

## getCreateDomain

Creates a new search domain.

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
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDomainRequest req = new GETCreateDomainRequest(GETCreateDomainActionEnum.CREATE_DOMAIN, "deserunt", GETCreateDomainVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            GETCreateDomainResponse res = sdk.sdk.getCreateDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDefineRankExpression

Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDefineRankExpressionActionEnum;
import org.openapis.openapi.models.operations.GETDefineRankExpressionRankExpression;
import org.openapis.openapi.models.operations.GETDefineRankExpressionRequest;
import org.openapis.openapi.models.operations.GETDefineRankExpressionResponse;
import org.openapis.openapi.models.operations.GETDefineRankExpressionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDefineRankExpressionRequest req = new GETDefineRankExpressionRequest(GETDefineRankExpressionActionEnum.DEFINE_RANK_EXPRESSION, "molestiae",                 new GETDefineRankExpressionRankExpression("minus", "placeat");, GETDefineRankExpressionVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            GETDefineRankExpressionResponse res = sdk.sdk.getDefineRankExpression(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDomain

Permanently deletes a search domain and all of its data.

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
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDomainRequest req = new GETDeleteDomainRequest(GETDeleteDomainActionEnum.DELETE_DOMAIN, "veritatis", GETDeleteDomainVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            GETDeleteDomainResponse res = sdk.sdk.getDeleteDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteIndexField

Removes an <code>IndexField</code> from the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteIndexFieldActionEnum;
import org.openapis.openapi.models.operations.GETDeleteIndexFieldRequest;
import org.openapis.openapi.models.operations.GETDeleteIndexFieldResponse;
import org.openapis.openapi.models.operations.GETDeleteIndexFieldVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteIndexFieldRequest req = new GETDeleteIndexFieldRequest(GETDeleteIndexFieldActionEnum.DELETE_INDEX_FIELD, "at", "maiores", GETDeleteIndexFieldVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDeleteIndexFieldResponse res = sdk.sdk.getDeleteIndexField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteRankExpression

Removes a <code>RankExpression</code> from the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteRankExpressionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteRankExpressionRequest;
import org.openapis.openapi.models.operations.GETDeleteRankExpressionResponse;
import org.openapis.openapi.models.operations.GETDeleteRankExpressionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteRankExpressionRequest req = new GETDeleteRankExpressionRequest(GETDeleteRankExpressionActionEnum.DELETE_RANK_EXPRESSION, "nam", "officia", GETDeleteRankExpressionVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            GETDeleteRankExpressionResponse res = sdk.sdk.getDeleteRankExpression(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAvailabilityOptions

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAvailabilityOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAvailabilityOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeAvailabilityOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeAvailabilityOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAvailabilityOptionsRequest req = new GETDescribeAvailabilityOptionsRequest(GETDescribeAvailabilityOptionsActionEnum.DESCRIBE_AVAILABILITY_OPTIONS, "molestiae", GETDescribeAvailabilityOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETDescribeAvailabilityOptionsResponse res = sdk.sdk.getDescribeAvailabilityOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDefaultSearchField

Gets the default search field configured for the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDefaultSearchFieldActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDefaultSearchFieldRequest;
import org.openapis.openapi.models.operations.GETDescribeDefaultSearchFieldResponse;
import org.openapis.openapi.models.operations.GETDescribeDefaultSearchFieldVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDefaultSearchFieldRequest req = new GETDescribeDefaultSearchFieldRequest(GETDescribeDefaultSearchFieldActionEnum.DESCRIBE_DEFAULT_SEARCH_FIELD, "perferendis", GETDescribeDefaultSearchFieldVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "natus";
                xAmzCredential = "sed";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "laboriosam";
            }};            

            GETDescribeDefaultSearchFieldResponse res = sdk.sdk.getDescribeDefaultSearchField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDomainsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDomainsRequest;
import org.openapis.openapi.models.operations.GETDescribeDomainsResponse;
import org.openapis.openapi.models.operations.GETDescribeDomainsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDomainsRequest req = new GETDescribeDomainsRequest(GETDescribeDomainsActionEnum.DESCRIBE_DOMAINS, GETDescribeDomainsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                domainNames = new String[]{{
                    add("fuga"),
                    add("in"),
                    add("corporis"),
                    add("iste"),
                }};
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            GETDescribeDomainsResponse res = sdk.sdk.getDescribeDomains(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeIndexFieldsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeIndexFieldsRequest;
import org.openapis.openapi.models.operations.GETDescribeIndexFieldsResponse;
import org.openapis.openapi.models.operations.GETDescribeIndexFieldsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeIndexFieldsRequest req = new GETDescribeIndexFieldsRequest(GETDescribeIndexFieldsActionEnum.DESCRIBE_INDEX_FIELDS, "laborum", GETDescribeIndexFieldsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                fieldNames = new String[]{{
                    add("dolorem"),
                }};
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            GETDescribeIndexFieldsResponse res = sdk.sdk.getDescribeIndexFields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeRankExpressions

Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeRankExpressionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeRankExpressionsRequest;
import org.openapis.openapi.models.operations.GETDescribeRankExpressionsResponse;
import org.openapis.openapi.models.operations.GETDescribeRankExpressionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeRankExpressionsRequest req = new GETDescribeRankExpressionsRequest(GETDescribeRankExpressionsActionEnum.DESCRIBE_RANK_EXPRESSIONS, "accusantium", GETDescribeRankExpressionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                rankNames = new String[]{{
                    add("culpa"),
                    add("doloribus"),
                }};
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            GETDescribeRankExpressionsResponse res = sdk.sdk.getDescribeRankExpressions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeServiceAccessPolicies

Gets information about the resource-based policies that control access to the domain's document and search services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeServiceAccessPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeServiceAccessPoliciesRequest;
import org.openapis.openapi.models.operations.GETDescribeServiceAccessPoliciesResponse;
import org.openapis.openapi.models.operations.GETDescribeServiceAccessPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeServiceAccessPoliciesRequest req = new GETDescribeServiceAccessPoliciesRequest(GETDescribeServiceAccessPoliciesActionEnum.DESCRIBE_SERVICE_ACCESS_POLICIES, "occaecati", GETDescribeServiceAccessPoliciesVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
            }};            

            GETDescribeServiceAccessPoliciesResponse res = sdk.sdk.getDescribeServiceAccessPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStemmingOptions

Gets the stemming dictionary configured for the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStemmingOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStemmingOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeStemmingOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeStemmingOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStemmingOptionsRequest req = new GETDescribeStemmingOptionsRequest(GETDescribeStemmingOptionsActionEnum.DESCRIBE_STEMMING_OPTIONS, "vitae", GETDescribeStemmingOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            GETDescribeStemmingOptionsResponse res = sdk.sdk.getDescribeStemmingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeStopwordOptions

Gets the stopwords configured for the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeStopwordOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeStopwordOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeStopwordOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeStopwordOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeStopwordOptionsRequest req = new GETDescribeStopwordOptionsRequest(GETDescribeStopwordOptionsActionEnum.DESCRIBE_STOPWORD_OPTIONS, "id", GETDescribeStopwordOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            GETDescribeStopwordOptionsResponse res = sdk.sdk.getDescribeStopwordOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeSynonymOptions

Gets the synonym dictionary configured for the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeSynonymOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeSynonymOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeSynonymOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeSynonymOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeSynonymOptionsRequest req = new GETDescribeSynonymOptionsRequest(GETDescribeSynonymOptionsActionEnum.DESCRIBE_SYNONYM_OPTIONS, "voluptatibus", GETDescribeSynonymOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETDescribeSynonymOptionsResponse res = sdk.sdk.getDescribeSynonymOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndexDocuments

Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETIndexDocumentsActionEnum;
import org.openapis.openapi.models.operations.GETIndexDocumentsRequest;
import org.openapis.openapi.models.operations.GETIndexDocumentsResponse;
import org.openapis.openapi.models.operations.GETIndexDocumentsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETIndexDocumentsRequest req = new GETIndexDocumentsRequest(GETIndexDocumentsActionEnum.INDEX_DOCUMENTS, "perferendis", GETIndexDocumentsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            GETIndexDocumentsResponse res = sdk.sdk.getIndexDocuments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateAvailabilityOptions

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateAvailabilityOptionsActionEnum;
import org.openapis.openapi.models.operations.GETUpdateAvailabilityOptionsRequest;
import org.openapis.openapi.models.operations.GETUpdateAvailabilityOptionsResponse;
import org.openapis.openapi.models.operations.GETUpdateAvailabilityOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateAvailabilityOptionsRequest req = new GETUpdateAvailabilityOptionsRequest(GETUpdateAvailabilityOptionsActionEnum.UPDATE_AVAILABILITY_OPTIONS, "dicta", false, GETUpdateAvailabilityOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETUpdateAvailabilityOptionsResponse res = sdk.sdk.getUpdateAvailabilityOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateDefaultSearchField

Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateDefaultSearchFieldActionEnum;
import org.openapis.openapi.models.operations.GETUpdateDefaultSearchFieldRequest;
import org.openapis.openapi.models.operations.GETUpdateDefaultSearchFieldResponse;
import org.openapis.openapi.models.operations.GETUpdateDefaultSearchFieldVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateDefaultSearchFieldRequest req = new GETUpdateDefaultSearchFieldRequest(GETUpdateDefaultSearchFieldActionEnum.UPDATE_DEFAULT_SEARCH_FIELD, "molestias", "excepturi", GETUpdateDefaultSearchFieldVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GETUpdateDefaultSearchFieldResponse res = sdk.sdk.getUpdateDefaultSearchField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateServiceAccessPolicies

Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateServiceAccessPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETUpdateServiceAccessPoliciesRequest;
import org.openapis.openapi.models.operations.GETUpdateServiceAccessPoliciesResponse;
import org.openapis.openapi.models.operations.GETUpdateServiceAccessPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateServiceAccessPoliciesRequest req = new GETUpdateServiceAccessPoliciesRequest("veritatis", GETUpdateServiceAccessPoliciesActionEnum.UPDATE_SERVICE_ACCESS_POLICIES, "itaque", GETUpdateServiceAccessPoliciesVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETUpdateServiceAccessPoliciesResponse res = sdk.sdk.getUpdateServiceAccessPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateStemmingOptions

Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateStemmingOptionsActionEnum;
import org.openapis.openapi.models.operations.GETUpdateStemmingOptionsRequest;
import org.openapis.openapi.models.operations.GETUpdateStemmingOptionsResponse;
import org.openapis.openapi.models.operations.GETUpdateStemmingOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateStemmingOptionsRequest req = new GETUpdateStemmingOptionsRequest(GETUpdateStemmingOptionsActionEnum.UPDATE_STEMMING_OPTIONS, "quibusdam", "labore", GETUpdateStemmingOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
            }};            

            GETUpdateStemmingOptionsResponse res = sdk.sdk.getUpdateStemmingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateStopwordOptions

Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateStopwordOptionsActionEnum;
import org.openapis.openapi.models.operations.GETUpdateStopwordOptionsRequest;
import org.openapis.openapi.models.operations.GETUpdateStopwordOptionsResponse;
import org.openapis.openapi.models.operations.GETUpdateStopwordOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateStopwordOptionsRequest req = new GETUpdateStopwordOptionsRequest(GETUpdateStopwordOptionsActionEnum.UPDATE_STOPWORD_OPTIONS, "ipsam", "alias", GETUpdateStopwordOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
            }};            

            GETUpdateStopwordOptionsResponse res = sdk.sdk.getUpdateStopwordOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateSynonymOptions

Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateSynonymOptionsActionEnum;
import org.openapis.openapi.models.operations.GETUpdateSynonymOptionsRequest;
import org.openapis.openapi.models.operations.GETUpdateSynonymOptionsResponse;
import org.openapis.openapi.models.operations.GETUpdateSynonymOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateSynonymOptionsRequest req = new GETUpdateSynonymOptionsRequest(GETUpdateSynonymOptionsActionEnum.UPDATE_SYNONYM_OPTIONS, "eum", "non", GETUpdateSynonymOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sint";
                xAmzCredential = "aliquid";
                xAmzDate = "provident";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "officia";
            }};            

            GETUpdateSynonymOptionsResponse res = sdk.sdk.getUpdateSynonymOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDomain

Creates a new search domain.

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
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDomainRequest req = new POSTCreateDomainRequest(POSTCreateDomainActionEnum.CREATE_DOMAIN, POSTCreateDomainVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            POSTCreateDomainResponse res = sdk.sdk.postCreateDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDefineIndexField

Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDefineIndexFieldActionEnum;
import org.openapis.openapi.models.operations.POSTDefineIndexFieldRequest;
import org.openapis.openapi.models.operations.POSTDefineIndexFieldResponse;
import org.openapis.openapi.models.operations.POSTDefineIndexFieldVersionEnum;
import org.openapis.openapi.models.shared.DefineIndexFieldRequest;
import org.openapis.openapi.models.shared.IndexField;
import org.openapis.openapi.models.shared.IndexFieldTypeEnum;
import org.openapis.openapi.models.shared.LiteralOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceAttribute;
import org.openapis.openapi.models.shared.SourceData;
import org.openapis.openapi.models.shared.SourceDataFunctionEnum;
import org.openapis.openapi.models.shared.SourceDataMap;
import org.openapis.openapi.models.shared.SourceDataTrimTitle;
import org.openapis.openapi.models.shared.TextOptions;
import org.openapis.openapi.models.shared.UIntOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDefineIndexFieldRequest req = new POSTDefineIndexFieldRequest(POSTDefineIndexFieldActionEnum.DEFINE_INDEX_FIELD, POSTDefineIndexFieldVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            POSTDefineIndexFieldResponse res = sdk.sdk.postDefineIndexField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDefineRankExpression

Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDefineRankExpressionActionEnum;
import org.openapis.openapi.models.operations.POSTDefineRankExpressionRequest;
import org.openapis.openapi.models.operations.POSTDefineRankExpressionResponse;
import org.openapis.openapi.models.operations.POSTDefineRankExpressionVersionEnum;
import org.openapis.openapi.models.shared.DefineRankExpressionRequest;
import org.openapis.openapi.models.shared.NamedRankExpression;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDefineRankExpressionRequest req = new POSTDefineRankExpressionRequest(POSTDefineRankExpressionActionEnum.DEFINE_RANK_EXPRESSION, POSTDefineRankExpressionVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "enim".getBytes();
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quidem";
                xAmzDate = "provident";
                xAmzSecurityToken = "nam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "blanditiis";
            }};            

            POSTDefineRankExpressionResponse res = sdk.sdk.postDefineRankExpression(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDomain

Permanently deletes a search domain and all of its data.

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
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDomainRequest req = new POSTDeleteDomainRequest(POSTDeleteDomainActionEnum.DELETE_DOMAIN, POSTDeleteDomainVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "sapiente".getBytes();
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            POSTDeleteDomainResponse res = sdk.sdk.postDeleteDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteIndexField

Removes an <code>IndexField</code> from the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteIndexFieldActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteIndexFieldRequest;
import org.openapis.openapi.models.operations.POSTDeleteIndexFieldResponse;
import org.openapis.openapi.models.operations.POSTDeleteIndexFieldVersionEnum;
import org.openapis.openapi.models.shared.DeleteIndexFieldRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteIndexFieldRequest req = new POSTDeleteIndexFieldRequest(POSTDeleteIndexFieldActionEnum.DELETE_INDEX_FIELD, POSTDeleteIndexFieldVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "nihil".getBytes();
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            POSTDeleteIndexFieldResponse res = sdk.sdk.postDeleteIndexField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteRankExpression

Removes a <code>RankExpression</code> from the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteRankExpressionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteRankExpressionRequest;
import org.openapis.openapi.models.operations.POSTDeleteRankExpressionResponse;
import org.openapis.openapi.models.operations.POSTDeleteRankExpressionVersionEnum;
import org.openapis.openapi.models.shared.DeleteRankExpressionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteRankExpressionRequest req = new POSTDeleteRankExpressionRequest(POSTDeleteRankExpressionActionEnum.DELETE_RANK_EXPRESSION, POSTDeleteRankExpressionVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
            }};            

            POSTDeleteRankExpressionResponse res = sdk.sdk.postDeleteRankExpression(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAvailabilityOptions

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAvailabilityOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAvailabilityOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeAvailabilityOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeAvailabilityOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeAvailabilityOptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAvailabilityOptionsRequest req = new POSTDescribeAvailabilityOptionsRequest(POSTDescribeAvailabilityOptionsActionEnum.DESCRIBE_AVAILABILITY_OPTIONS, POSTDescribeAvailabilityOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "quos".getBytes();
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "mollitia";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "eum";
            }};            

            POSTDescribeAvailabilityOptionsResponse res = sdk.sdk.postDescribeAvailabilityOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDefaultSearchField

Gets the default search field configured for the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDefaultSearchFieldActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDefaultSearchFieldRequest;
import org.openapis.openapi.models.operations.POSTDescribeDefaultSearchFieldResponse;
import org.openapis.openapi.models.operations.POSTDescribeDefaultSearchFieldVersionEnum;
import org.openapis.openapi.models.shared.DescribeDefaultSearchFieldRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDefaultSearchFieldRequest req = new POSTDescribeDefaultSearchFieldRequest(POSTDescribeDefaultSearchFieldActionEnum.DESCRIBE_DEFAULT_SEARCH_FIELD, POSTDescribeDefaultSearchFieldVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "necessitatibus".getBytes();
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quasi";
                xAmzDate = "iure";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "eius";
            }};            

            POSTDescribeDefaultSearchFieldResponse res = sdk.sdk.postDescribeDefaultSearchField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDomainsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDomainsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDomainsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDomainsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDomainsRequest req = new POSTDescribeDomainsRequest(POSTDescribeDomainsActionEnum.DESCRIBE_DOMAINS, POSTDescribeDomainsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "deleniti".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "in";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "expedita";
            }};            

            POSTDescribeDomainsResponse res = sdk.sdk.postDescribeDomains(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeIndexFieldsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeIndexFieldsRequest;
import org.openapis.openapi.models.operations.POSTDescribeIndexFieldsResponse;
import org.openapis.openapi.models.operations.POSTDescribeIndexFieldsVersionEnum;
import org.openapis.openapi.models.shared.DescribeIndexFieldsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeIndexFieldsRequest req = new POSTDescribeIndexFieldsRequest(POSTDescribeIndexFieldsActionEnum.DESCRIBE_INDEX_FIELDS, POSTDescribeIndexFieldsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "repellat".getBytes();
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "sed";
                xAmzCredential = "saepe";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "praesentium";
            }};            

            POSTDescribeIndexFieldsResponse res = sdk.sdk.postDescribeIndexFields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeRankExpressions

Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeRankExpressionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeRankExpressionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeRankExpressionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeRankExpressionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeRankExpressionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeRankExpressionsRequest req = new POSTDescribeRankExpressionsRequest(POSTDescribeRankExpressionsActionEnum.DESCRIBE_RANK_EXPRESSIONS, POSTDescribeRankExpressionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "magni".getBytes();
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            POSTDescribeRankExpressionsResponse res = sdk.sdk.postDescribeRankExpressions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeServiceAccessPolicies

Gets information about the resource-based policies that control access to the domain's document and search services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeServiceAccessPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeServiceAccessPoliciesRequest;
import org.openapis.openapi.models.operations.POSTDescribeServiceAccessPoliciesResponse;
import org.openapis.openapi.models.operations.POSTDescribeServiceAccessPoliciesVersionEnum;
import org.openapis.openapi.models.shared.DescribeServiceAccessPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeServiceAccessPoliciesRequest req = new POSTDescribeServiceAccessPoliciesRequest(POSTDescribeServiceAccessPoliciesActionEnum.DESCRIBE_SERVICE_ACCESS_POLICIES, POSTDescribeServiceAccessPoliciesVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            POSTDescribeServiceAccessPoliciesResponse res = sdk.sdk.postDescribeServiceAccessPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStemmingOptions

Gets the stemming dictionary configured for the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStemmingOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStemmingOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeStemmingOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeStemmingOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeStemmingOptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStemmingOptionsRequest req = new POSTDescribeStemmingOptionsRequest(POSTDescribeStemmingOptionsActionEnum.DESCRIBE_STEMMING_OPTIONS, POSTDescribeStemmingOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "eaque".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            POSTDescribeStemmingOptionsResponse res = sdk.sdk.postDescribeStemmingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeStopwordOptions

Gets the stopwords configured for the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeStopwordOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeStopwordOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeStopwordOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeStopwordOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeStopwordOptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeStopwordOptionsRequest req = new POSTDescribeStopwordOptionsRequest(POSTDescribeStopwordOptionsActionEnum.DESCRIBE_STOPWORD_OPTIONS, POSTDescribeStopwordOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "corporis".getBytes();
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTDescribeStopwordOptionsResponse res = sdk.sdk.postDescribeStopwordOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeSynonymOptions

Gets the synonym dictionary configured for the search domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeSynonymOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeSynonymOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeSynonymOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeSynonymOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeSynonymOptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeSynonymOptionsRequest req = new POSTDescribeSynonymOptionsRequest(POSTDescribeSynonymOptionsActionEnum.DESCRIBE_SYNONYM_OPTIONS, POSTDescribeSynonymOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "quis".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
            }};            

            POSTDescribeSynonymOptionsResponse res = sdk.sdk.postDescribeSynonymOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIndexDocuments

Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTIndexDocumentsActionEnum;
import org.openapis.openapi.models.operations.POSTIndexDocumentsRequest;
import org.openapis.openapi.models.operations.POSTIndexDocumentsResponse;
import org.openapis.openapi.models.operations.POSTIndexDocumentsVersionEnum;
import org.openapis.openapi.models.shared.IndexDocumentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTIndexDocumentsRequest req = new POSTIndexDocumentsRequest(POSTIndexDocumentsActionEnum.INDEX_DOCUMENTS, POSTIndexDocumentsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "nostrum".getBytes();
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
            }};            

            POSTIndexDocumentsResponse res = sdk.sdk.postIndexDocuments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAvailabilityOptions

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateAvailabilityOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateAvailabilityOptionsRequest;
import org.openapis.openapi.models.operations.POSTUpdateAvailabilityOptionsResponse;
import org.openapis.openapi.models.operations.POSTUpdateAvailabilityOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAvailabilityOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateAvailabilityOptionsRequest req = new POSTUpdateAvailabilityOptionsRequest(POSTUpdateAvailabilityOptionsActionEnum.UPDATE_AVAILABILITY_OPTIONS, POSTUpdateAvailabilityOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            POSTUpdateAvailabilityOptionsResponse res = sdk.sdk.postUpdateAvailabilityOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateDefaultSearchField

Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateDefaultSearchFieldActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateDefaultSearchFieldRequest;
import org.openapis.openapi.models.operations.POSTUpdateDefaultSearchFieldResponse;
import org.openapis.openapi.models.operations.POSTUpdateDefaultSearchFieldVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDefaultSearchFieldRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateDefaultSearchFieldRequest req = new POSTUpdateDefaultSearchFieldRequest(POSTUpdateDefaultSearchFieldActionEnum.UPDATE_DEFAULT_SEARCH_FIELD, POSTUpdateDefaultSearchFieldVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "iste".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
            }};            

            POSTUpdateDefaultSearchFieldResponse res = sdk.sdk.postUpdateDefaultSearchField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateServiceAccessPolicies

Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateServiceAccessPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateServiceAccessPoliciesRequest;
import org.openapis.openapi.models.operations.POSTUpdateServiceAccessPoliciesResponse;
import org.openapis.openapi.models.operations.POSTUpdateServiceAccessPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceAccessPoliciesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateServiceAccessPoliciesRequest req = new POSTUpdateServiceAccessPoliciesRequest(POSTUpdateServiceAccessPoliciesActionEnum.UPDATE_SERVICE_ACCESS_POLICIES, POSTUpdateServiceAccessPoliciesVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "quos".getBytes();
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
            }};            

            POSTUpdateServiceAccessPoliciesResponse res = sdk.sdk.postUpdateServiceAccessPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateStemmingOptions

Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateStemmingOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateStemmingOptionsRequest;
import org.openapis.openapi.models.operations.POSTUpdateStemmingOptionsResponse;
import org.openapis.openapi.models.operations.POSTUpdateStemmingOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateStemmingOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateStemmingOptionsRequest req = new POSTUpdateStemmingOptionsRequest(POSTUpdateStemmingOptionsActionEnum.UPDATE_STEMMING_OPTIONS, POSTUpdateStemmingOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "cum".getBytes();
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTUpdateStemmingOptionsResponse res = sdk.sdk.postUpdateStemmingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateStopwordOptions

Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateStopwordOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateStopwordOptionsRequest;
import org.openapis.openapi.models.operations.POSTUpdateStopwordOptionsResponse;
import org.openapis.openapi.models.operations.POSTUpdateStopwordOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateStopwordOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateStopwordOptionsRequest req = new POSTUpdateStopwordOptionsRequest(POSTUpdateStopwordOptionsActionEnum.UPDATE_STOPWORD_OPTIONS, POSTUpdateStopwordOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odio";
                xAmzCredential = "quaerat";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            POSTUpdateStopwordOptionsResponse res = sdk.sdk.postUpdateStopwordOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateSynonymOptions

Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateSynonymOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateSynonymOptionsRequest;
import org.openapis.openapi.models.operations.POSTUpdateSynonymOptionsResponse;
import org.openapis.openapi.models.operations.POSTUpdateSynonymOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSynonymOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateSynonymOptionsRequest req = new POSTUpdateSynonymOptionsRequest(POSTUpdateSynonymOptionsActionEnum.UPDATE_SYNONYM_OPTIONS, POSTUpdateSynonymOptionsVersionEnum.TWO_THOUSAND_AND_ELEVEN0201) {{
                requestBody = "eos".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            POSTUpdateSynonymOptionsResponse res = sdk.sdk.postUpdateSynonymOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
