# SDK

## Overview

<fullname>Resource Groups Tagging API</fullname>

Amazon Web Services documentation
<https://docs.aws.amazon.com/tagging/>
### Available Operations

* [describeReportCreation](#describereportcreation) - <p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>
* [getComplianceSummary](#getcompliancesummary) - <p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* [getResources](#getresources) - <p>Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account's effective tag policy. For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* [getTagKeys](#gettagkeys) - <p>Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* [getTagValues](#gettagvalues) - <p>Returns all tag values for the specified key that are used in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
* [startReportCreation](#startreportcreation) - <p>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.</p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>
* [tagResources](#tagresources) - <p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:TagResource</code> </p> </li> <li> <p> <code>ec2:CreateTags</code> </p> </li> </ul>
* [untagResources](#untagresources) - <p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.</p> </li> </ul> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:UntagResource</code> </p> </li> <li> <p> <code>ec2:DeleteTags</code> </p> </li> </ul>

## describeReportCreation

<p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReportCreationRequest;
import org.openapis.openapi.models.operations.DescribeReportCreationResponse;
import org.openapis.openapi.models.operations.DescribeReportCreationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReportCreationRequest req = new DescribeReportCreationRequest(                new java.util.HashMap<String, Object>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }}, DescribeReportCreationXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_DESCRIBE_REPORT_CREATION) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            DescribeReportCreationResponse res = sdk.sdk.describeReportCreation(req);

            if (res.describeReportCreationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComplianceSummary

<p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComplianceSummaryRequest;
import org.openapis.openapi.models.operations.GetComplianceSummaryResponse;
import org.openapis.openapi.models.operations.GetComplianceSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetComplianceSummaryInput;
import org.openapis.openapi.models.shared.GroupByAttributeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComplianceSummaryRequest req = new GetComplianceSummaryRequest(                new GetComplianceSummaryInput() {{
                                groupBy = new org.openapis.openapi.models.shared.GroupByAttributeEnum[]{{
                                    add(GroupByAttributeEnum.RESOURCE_TYPE),
                                    add(GroupByAttributeEnum.RESOURCE_TYPE),
                                }};
                                maxResults = 778157L;
                                paginationToken = "odit";
                                regionFilters = new String[]{{
                                    add("at"),
                                    add("maiores"),
                                    add("molestiae"),
                                    add("quod"),
                                }};
                                resourceTypeFilters = new String[]{{
                                    add("esse"),
                                    add("totam"),
                                    add("porro"),
                                    add("dolorum"),
                                }};
                                tagKeyFilters = new String[]{{
                                    add("nam"),
                                }};
                                targetIdFilters = new String[]{{
                                    add("occaecati"),
                                    add("fugit"),
                                    add("deleniti"),
                                }};
                            }};, GetComplianceSummaryXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_GET_COMPLIANCE_SUMMARY) {{
                maxResults = "hic";
                paginationToken = "optio";
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            GetComplianceSummaryResponse res = sdk.sdk.getComplianceSummary(req);

            if (res.getComplianceSummaryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResources

<p>Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account's effective tag policy. For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesRequest;
import org.openapis.openapi.models.operations.GetResourcesResponse;
import org.openapis.openapi.models.operations.GetResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourcesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcesRequest req = new GetResourcesRequest(                new GetResourcesInput() {{
                                excludeCompliantResources = false;
                                includeComplianceDetails = false;
                                paginationToken = "esse";
                                resourceARNList = new String[]{{
                                    add("excepturi"),
                                }};
                                resourceTypeFilters = new String[]{{
                                    add("perferendis"),
                                }};
                                resourcesPerPage = 324141L;
                                tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                    add(new TagFilter() {{
                                        key = "sed";
                                        values = new String[]{{
                                            add("dolor"),
                                            add("natus"),
                                            add("laboriosam"),
                                        }};
                                    }}),
                                    add(new TagFilter() {{
                                        key = "hic";
                                        values = new String[]{{
                                            add("fuga"),
                                            add("in"),
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                    }}),
                                    add(new TagFilter() {{
                                        key = "iure";
                                        values = new String[]{{
                                            add("quidem"),
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                }};
                                tagsPerPage = 666767L;
                            }};, GetResourcesXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_GET_RESOURCES) {{
                paginationToken = "mollitia";
                resourcesPerPage = "laborum";
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            GetResourcesResponse res = sdk.sdk.getResources(req);

            if (res.getResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagKeys

<p>Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagKeysRequest;
import org.openapis.openapi.models.operations.GetTagKeysResponse;
import org.openapis.openapi.models.operations.GetTagKeysXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTagKeysInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTagKeysRequest req = new GetTagKeysRequest(                new GetTagKeysInput() {{
                                paginationToken = "minima";
                            }};, GetTagKeysXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_GET_TAG_KEYS) {{
                paginationToken = "excepturi";
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetTagKeysResponse res = sdk.sdk.getTagKeys(req);

            if (res.getTagKeysOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagValues

<p>Returns all tag values for the specified key that are used in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagValuesRequest;
import org.openapis.openapi.models.operations.GetTagValuesResponse;
import org.openapis.openapi.models.operations.GetTagValuesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTagValuesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTagValuesRequest req = new GetTagValuesRequest(                new GetTagValuesInput("culpa") {{
                                paginationToken = "consequuntur";
                            }};, GetTagValuesXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_GET_TAG_VALUES) {{
                paginationToken = "repellat";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            GetTagValuesResponse res = sdk.sdk.getTagValues(req);

            if (res.getTagValuesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startReportCreation

<p>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.</p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartReportCreationRequest;
import org.openapis.openapi.models.operations.StartReportCreationResponse;
import org.openapis.openapi.models.operations.StartReportCreationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartReportCreationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartReportCreationRequest req = new StartReportCreationRequest(                new StartReportCreationInput("quia");, StartReportCreationXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_START_REPORT_CREATION) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            StartReportCreationResponse res = sdk.sdk.startReportCreation(req);

            if (res.startReportCreationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResources

<p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:TagResource</code> </p> </li> <li> <p> <code>ec2:CreateTags</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourcesRequest;
import org.openapis.openapi.models.operations.TagResourcesResponse;
import org.openapis.openapi.models.operations.TagResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourcesInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourcesRequest req = new TagResourcesRequest(                new TagResourcesInput(                new String[]{{
                                                add("ipsam"),
                                                add("id"),
                                                add("possimus"),
                                                add("aut"),
                                            }},                 new java.util.HashMap<String, String>() {{
                                                put("error", "temporibus");
                                            }});, TagResourcesXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_TAG_RESOURCES) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
            }};            

            TagResourcesResponse res = sdk.sdk.tagResources(req);

            if (res.tagResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResources

<p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.</p> </li> </ul> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:UntagResource</code> </p> </li> <li> <p> <code>ec2:DeleteTags</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourcesRequest;
import org.openapis.openapi.models.operations.UntagResourcesResponse;
import org.openapis.openapi.models.operations.UntagResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourcesInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourcesRequest req = new UntagResourcesRequest(                new UntagResourcesInput(                new String[]{{
                                                add("omnis"),
                                            }},                 new String[]{{
                                                add("cum"),
                                                add("perferendis"),
                                            }});, UntagResourcesXAmzTargetEnum.RESOURCE_GROUPS_TAGGING_API20170126_UNTAG_RESOURCES) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            UntagResourcesResponse res = sdk.sdk.untagResources(req);

            if (res.untagResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
