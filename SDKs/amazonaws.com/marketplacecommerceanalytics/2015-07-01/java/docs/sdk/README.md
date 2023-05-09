# SDK

## Overview

Provides AWS Marketplace business intelligence data on-demand.

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplacecommerceanalytics/>
### Available Operations

* [generateDataSet](#generatedataset) - Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
* [startSupportDataExport](#startsupportdataexport) - Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

## generateDataSet

Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateDataSetRequest;
import org.openapis.openapi.models.operations.GenerateDataSetResponse;
import org.openapis.openapi.models.operations.GenerateDataSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DataSetTypeEnum;
import org.openapis.openapi.models.shared.GenerateDataSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateDataSetRequest req = new GenerateDataSetRequest(                new GenerateDataSetRequest(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), DataSetTypeEnum.CUSTOMER_PROFILE_BY_INDUSTRY, "ab", "quis", "veritatis") {{
                                customerDefinedValues = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "ipsam");
                                    put("repellendus", "sapiente");
                                    put("quo", "odit");
                                }};
                                destinationS3Prefix = "at";
                            }};, GenerateDataSetXAmzTargetEnum.MARKETPLACE_COMMERCE_ANALYTICS20150701_GENERATE_DATA_SET) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            GenerateDataSetResponse res = sdk.sdk.generateDataSet(req);

            if (res.generateDataSetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSupportDataExport

Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSupportDataExportRequest;
import org.openapis.openapi.models.operations.StartSupportDataExportResponse;
import org.openapis.openapi.models.operations.StartSupportDataExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSupportDataExportRequest;
import org.openapis.openapi.models.shared.SupportDataSetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSupportDataExportRequest req = new StartSupportDataExportRequest(                new StartSupportDataExportRequest(SupportDataSetTypeEnum.TEST_CUSTOMER_SUPPORT_CONTACTS_DATA, "dicta", OffsetDateTime.parse("2021-09-20T20:35:01.256Z"), "occaecati", "fugit") {{
                                customerDefinedValues = new java.util.HashMap<String, String>() {{
                                    put("hic", "optio");
                                    put("totam", "beatae");
                                    put("commodi", "molestiae");
                                }};
                                destinationS3Prefix = "modi";
                            }};, StartSupportDataExportXAmzTargetEnum.MARKETPLACE_COMMERCE_ANALYTICS20150701_START_SUPPORT_DATA_EXPORT) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            StartSupportDataExportResponse res = sdk.sdk.startSupportDataExport(req);

            if (res.startSupportDataExportResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
