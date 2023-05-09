# SDK

## Overview

<p>Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store.</p> <p>Use the following operations to configure your <code>OnlineStore</code> and <code>OfflineStore</code> features, and to create and manage feature groups:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFeatureGroup.html">CreateFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteFeatureGroup.html">DeleteFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeFeatureGroup.html">DescribeFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListFeatureGroups.html">ListFeatureGroups</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [batchGetRecord](#batchgetrecord) - Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
* [deleteRecord](#deleterecord) - <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the <code>OnlineStore</code>. Feature Store supports both <code>SOFT_DELETE</code> and <code>HARD_DELETE</code>. For <code>SOFT_DELETE</code> (default), feature columns are set to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or <code>BatchGetRecord</code>. For<code> HARD_DELETE</code>, the complete <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature Store appends the deleted record marker to the <code>OfflineStore</code> with feature values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>, and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p> <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be set later than the <code>EventTime</code> of the existing record in the <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the deletion does not occur:</p> <ul> <li> <p>For <code>SOFT_DELETE</code>, the existing (undeleted) record remains in the <code>OnlineStore</code>, though the delete record marker is still written to the <code>OfflineStore</code>.</p> </li> <li> <p> <code>HARD_DELETE</code> returns <code>EventTime</code>: <code>400 ValidationException</code> to indicate that the delete operation failed. No delete record marker is written to the <code>OfflineStore</code>.</p> </li> </ul>
* [getRecord](#getrecord) - Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 
* [putRecord](#putrecord) - Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.

## batchGetRecord

Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetRecordRequest;
import org.openapis.openapi.models.operations.BatchGetRecordRequestBody;
import org.openapis.openapi.models.operations.BatchGetRecordResponse;
import org.openapis.openapi.models.shared.BatchGetRecordIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetRecordRequest req = new BatchGetRecordRequest(                new BatchGetRecordRequestBody(                new org.openapis.openapi.models.shared.BatchGetRecordIdentifier[]{{
                                                add(new BatchGetRecordIdentifier("impedit",                 new String[]{{
                                                                    add("esse"),
                                                                    add("ipsum"),
                                                                    add("excepturi"),
                                                                }}) {{
                                                    featureGroupName = "totam";
                                                    featureNames = new String[]{{
                                                        add("commodi"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("modi"),
                                                        add("qui"),
                                                    }};
                                                }}),
                                                add(new BatchGetRecordIdentifier("natus",                 new String[]{{
                                                                    add("hic"),
                                                                    add("saepe"),
                                                                }}) {{
                                                    featureGroupName = "aspernatur";
                                                    featureNames = new String[]{{
                                                        add("ad"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("sed"),
                                                        add("iste"),
                                                        add("dolor"),
                                                    }};
                                                }}),
                                                add(new BatchGetRecordIdentifier("architecto",                 new String[]{{
                                                                    add("reiciendis"),
                                                                }}) {{
                                                    featureGroupName = "fuga";
                                                    featureNames = new String[]{{
                                                        add("corporis"),
                                                        add("iste"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("saepe"),
                                                        add("quidem"),
                                                    }};
                                                }}),
                                                add(new BatchGetRecordIdentifier("enim",                 new String[]{{
                                                                    add("nemo"),
                                                                    add("minima"),
                                                                    add("excepturi"),
                                                                }}) {{
                                                    featureGroupName = "est";
                                                    featureNames = new String[]{{
                                                        add("laborum"),
                                                        add("dolores"),
                                                        add("dolorem"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("explicabo"),
                                                        add("nobis"),
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            BatchGetRecordResponse res = sdk.sdk.batchGetRecord(req);

            if (res.batchGetRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRecord

<p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the <code>OnlineStore</code>. Feature Store supports both <code>SOFT_DELETE</code> and <code>HARD_DELETE</code>. For <code>SOFT_DELETE</code> (default), feature columns are set to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or <code>BatchGetRecord</code>. For<code> HARD_DELETE</code>, the complete <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature Store appends the deleted record marker to the <code>OfflineStore</code> with feature values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>, and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p> <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be set later than the <code>EventTime</code> of the existing record in the <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the deletion does not occur:</p> <ul> <li> <p>For <code>SOFT_DELETE</code>, the existing (undeleted) record remains in the <code>OnlineStore</code>, though the delete record marker is still written to the <code>OfflineStore</code>.</p> </li> <li> <p> <code>HARD_DELETE</code> returns <code>EventTime</code>: <code>400 ValidationException</code> to indicate that the delete operation failed. No delete record marker is written to the <code>OfflineStore</code>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecordDeletionModeEnum;
import org.openapis.openapi.models.operations.DeleteRecordRequest;
import org.openapis.openapi.models.operations.DeleteRecordResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetStoreEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRecordRequest req = new DeleteRecordRequest("culpa", "consequuntur", "repellat") {{
                deletionMode = DeleteRecordDeletionModeEnum.HARD_DELETE;
                targetStores = new org.openapis.openapi.models.shared.TargetStoreEnum[]{{
                    add(TargetStoreEnum.ONLINE_STORE),
                    add(TargetStoreEnum.ONLINE_STORE),
                    add(TargetStoreEnum.ONLINE_STORE),
                }};
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteRecordResponse res = sdk.sdk.deleteRecord(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecord

Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecordRequest;
import org.openapis.openapi.models.operations.GetRecordResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecordRequest req = new GetRecordRequest("enim", "odit") {{
                featureName = new String[]{{
                    add("sequi"),
                    add("tenetur"),
                    add("ipsam"),
                    add("id"),
                }};
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            GetRecordResponse res = sdk.sdk.getRecord(req);

            if (res.getRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRecord

Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRecordRequest;
import org.openapis.openapi.models.operations.PutRecordRequestBody;
import org.openapis.openapi.models.operations.PutRecordResponse;
import org.openapis.openapi.models.shared.FeatureValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetStoreEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRecordRequest req = new PutRecordRequest("voluptatibus",                 new PutRecordRequestBody(                new org.openapis.openapi.models.shared.FeatureValue[]{{
                                                add(new FeatureValue("voluptatibus", "ipsa") {{
                                                    featureName = "nihil";
                                                    valueAsString = "praesentium";
                                                }}),
                                                add(new FeatureValue("cum", "perferendis") {{
                                                    featureName = "omnis";
                                                    valueAsString = "voluptate";
                                                }}),
                                                add(new FeatureValue("ut", "maiores") {{
                                                    featureName = "doloremque";
                                                    valueAsString = "reprehenderit";
                                                }}),
                                                add(new FeatureValue("dolore", "iusto") {{
                                                    featureName = "dicta";
                                                    valueAsString = "corporis";
                                                }}),
                                            }}) {{
                                targetStores = new org.openapis.openapi.models.shared.TargetStoreEnum[]{{
                                    add(TargetStoreEnum.OFFLINE_STORE),
                                }};
                            }};) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            PutRecordResponse res = sdk.sdk.putRecord(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
