# SDK

## Overview

<p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete AWS Cost and Usage report definitions.</p> <p>AWS Cost and Usage reports track the monthly AWS costs and usage associated with your AWS account. The report contains line items for each unique combination of AWS product, usage type, and operation that your AWS account uses. You can configure the AWS Cost and Usage report to show only the data that you want, using the AWS Cost and Usage API.</p> <p>Service Endpoint</p> <p>The AWS Cost and Usage Report API provides the following endpoint:</p> <ul> <li> <p>cur.us-east-1.amazonaws.com</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cur/>
### Available Operations

* [deleteReportDefinition](#deletereportdefinition) - Deletes the specified report.
* [describeReportDefinitions](#describereportdefinitions) - Lists the AWS Cost and Usage reports available to this account.
* [modifyReportDefinition](#modifyreportdefinition) - Allows you to programatically update your report preferences.
* [putReportDefinition](#putreportdefinition) - Creates a new report using the description that you provide.

## deleteReportDefinition

Deletes the specified report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteReportDefinitionResponse;
import org.openapis.openapi.models.operations.DeleteReportDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReportDefinitionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReportDefinitionRequest req = new DeleteReportDefinitionRequest(                new DeleteReportDefinitionRequest() {{
                                reportName = "deserunt";
                            }};, DeleteReportDefinitionXAmzTargetEnum.AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DELETE_REPORT_DEFINITION) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            DeleteReportDefinitionResponse res = sdk.sdk.deleteReportDefinition(req);

            if (res.deleteReportDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReportDefinitions

Lists the AWS Cost and Usage reports available to this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReportDefinitionsRequest;
import org.openapis.openapi.models.operations.DescribeReportDefinitionsResponse;
import org.openapis.openapi.models.operations.DescribeReportDefinitionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReportDefinitionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReportDefinitionsRequest req = new DescribeReportDefinitionsRequest(                new DescribeReportDefinitionsRequest() {{
                                maxResults = 477665L;
                                nextToken = "minus";
                            }};, DescribeReportDefinitionsXAmzTargetEnum.AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DESCRIBE_REPORT_DEFINITIONS) {{
                maxResults = "placeat";
                nextToken = "voluptatum";
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            DescribeReportDefinitionsResponse res = sdk.sdk.describeReportDefinitions(req);

            if (res.describeReportDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyReportDefinition

Allows you to programatically update your report preferences.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyReportDefinitionRequest;
import org.openapis.openapi.models.operations.ModifyReportDefinitionResponse;
import org.openapis.openapi.models.operations.ModifyReportDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AWSRegionEnum;
import org.openapis.openapi.models.shared.AdditionalArtifactEnum;
import org.openapis.openapi.models.shared.CompressionFormatEnum;
import org.openapis.openapi.models.shared.ModifyReportDefinitionRequest;
import org.openapis.openapi.models.shared.ReportDefinition;
import org.openapis.openapi.models.shared.ReportFormatEnum;
import org.openapis.openapi.models.shared.ReportVersioningEnum;
import org.openapis.openapi.models.shared.SchemaElementEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyReportDefinitionRequest req = new ModifyReportDefinitionRequest(                new ModifyReportDefinitionRequest(                new ReportDefinition(                new org.openapis.openapi.models.shared.SchemaElementEnum[]{{
                                                                add(SchemaElementEnum.RESOURCES),
                                                                add(SchemaElementEnum.RESOURCES),
                                                                add(SchemaElementEnum.RESOURCES),
                                                            }}, CompressionFormatEnum.ZIP, ReportFormatEnum.TEXT_O_RCSV, "repellendus", "sapiente", "quo", AWSRegionEnum.AP_SOUTHEAST1, TimeUnitEnum.MONTHLY) {{
                                                additionalArtifacts = new org.openapis.openapi.models.shared.AdditionalArtifactEnum[]{{
                                                    add(AdditionalArtifactEnum.ATHENA),
                                                    add(AdditionalArtifactEnum.QUICKSIGHT),
                                                    add(AdditionalArtifactEnum.ATHENA),
                                                    add(AdditionalArtifactEnum.ATHENA),
                                                }};
                                                billingViewArn = "esse";
                                                refreshClosedReports = false;
                                                reportVersioning = ReportVersioningEnum.OVERWRITE_REPORT;
                                            }};, "porro");, ModifyReportDefinitionXAmzTargetEnum.AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_MODIFY_REPORT_DEFINITION) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            ModifyReportDefinitionResponse res = sdk.sdk.modifyReportDefinition(req);

            if (res.modifyReportDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putReportDefinition

Creates a new report using the description that you provide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutReportDefinitionRequest;
import org.openapis.openapi.models.operations.PutReportDefinitionResponse;
import org.openapis.openapi.models.operations.PutReportDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AWSRegionEnum;
import org.openapis.openapi.models.shared.AdditionalArtifactEnum;
import org.openapis.openapi.models.shared.CompressionFormatEnum;
import org.openapis.openapi.models.shared.PutReportDefinitionRequest;
import org.openapis.openapi.models.shared.ReportDefinition;
import org.openapis.openapi.models.shared.ReportFormatEnum;
import org.openapis.openapi.models.shared.ReportVersioningEnum;
import org.openapis.openapi.models.shared.SchemaElementEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutReportDefinitionRequest req = new PutReportDefinitionRequest(                new PutReportDefinitionRequest(                new ReportDefinition(                new org.openapis.openapi.models.shared.SchemaElementEnum[]{{
                                                                add(SchemaElementEnum.RESOURCES),
                                                                add(SchemaElementEnum.RESOURCES),
                                                                add(SchemaElementEnum.RESOURCES),
                                                                add(SchemaElementEnum.RESOURCES),
                                                            }}, CompressionFormatEnum.GZIP, ReportFormatEnum.TEXT_O_RCSV, "commodi", "molestiae", "modi", AWSRegionEnum.AP_SOUTHEAST2, TimeUnitEnum.MONTHLY) {{
                                                additionalArtifacts = new org.openapis.openapi.models.shared.AdditionalArtifactEnum[]{{
                                                    add(AdditionalArtifactEnum.QUICKSIGHT),
                                                    add(AdditionalArtifactEnum.REDSHIFT),
                                                    add(AdditionalArtifactEnum.QUICKSIGHT),
                                                }};
                                                billingViewArn = "aspernatur";
                                                refreshClosedReports = false;
                                                reportVersioning = ReportVersioningEnum.CREATE_NEW_REPORT;
                                            }};);, PutReportDefinitionXAmzTargetEnum.AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_PUT_REPORT_DEFINITION) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "natus";
                xAmzCredential = "sed";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "laboriosam";
            }};            

            PutReportDefinitionResponse res = sdk.sdk.putReportDefinition(req);

            if (res.putReportDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
