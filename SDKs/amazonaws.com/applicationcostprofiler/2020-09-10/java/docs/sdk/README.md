# SDK

## Overview

<p>This reference provides descriptions of the AWS Application Cost Profiler API.</p> <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete application cost report definitions, as well as to import your usage data into the Application Cost Profiler service.</p> <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost Profiler User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/application-cost-profiler/>
### Available Operations

* [deleteReportDefinition](#deletereportdefinition) - Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.
* [getReportDefinition](#getreportdefinition) - Retrieves the definition of a report already configured in AWS Application Cost Profiler.
* [importApplicationUsage](#importapplicationusage) - <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>
* [listReportDefinitions](#listreportdefinitions) - <p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>
* [putReportDefinition](#putreportdefinition) - Creates the report definition for a report in Application Cost Profiler.
* [updateReportDefinition](#updatereportdefinition) - Updates existing report in AWS Application Cost Profiler.

## deleteReportDefinition

Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteReportDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReportDefinitionRequest req = new DeleteReportDefinitionRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            DeleteReportDefinitionResponse res = sdk.sdk.deleteReportDefinition(req);

            if (res.deleteReportDefinitionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportDefinition

Retrieves the definition of a report already configured in AWS Application Cost Profiler.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportDefinitionRequest;
import org.openapis.openapi.models.operations.GetReportDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportDefinitionRequest req = new GetReportDefinitionRequest("molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            GetReportDefinitionResponse res = sdk.sdk.getReportDefinition(req);

            if (res.getReportDefinitionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importApplicationUsage

<p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportApplicationUsageRequest;
import org.openapis.openapi.models.operations.ImportApplicationUsageRequestBody;
import org.openapis.openapi.models.operations.ImportApplicationUsageRequestBodySourceS3Location;
import org.openapis.openapi.models.operations.ImportApplicationUsageResponse;
import org.openapis.openapi.models.shared.S3BucketRegionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportApplicationUsageRequest req = new ImportApplicationUsageRequest(                new ImportApplicationUsageRequestBody(                new ImportApplicationUsageRequestBodySourceS3Location() {{
                                                bucket = "ab";
                                                key = "quis";
                                                region = S3BucketRegionEnum.AP_EAST1;
                                            }};);) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            ImportApplicationUsageResponse res = sdk.sdk.importApplicationUsage(req);

            if (res.importApplicationUsageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReportDefinitions

<p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReportDefinitionsRequest;
import org.openapis.openapi.models.operations.ListReportDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReportDefinitionsRequest req = new ListReportDefinitionsRequest() {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
                maxResults = 780529L;
                nextToken = "dolorum";
            }};            

            ListReportDefinitionsResponse res = sdk.sdk.listReportDefinitions(req);

            if (res.listReportDefinitionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putReportDefinition

Creates the report definition for a report in Application Cost Profiler.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutReportDefinitionRequest;
import org.openapis.openapi.models.operations.PutReportDefinitionRequestBody;
import org.openapis.openapi.models.operations.PutReportDefinitionRequestBodyDestinationS3Location;
import org.openapis.openapi.models.operations.PutReportDefinitionRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.PutReportDefinitionRequestBodyReportFrequencyEnum;
import org.openapis.openapi.models.operations.PutReportDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutReportDefinitionRequest req = new PutReportDefinitionRequest(                new PutReportDefinitionRequestBody(                new PutReportDefinitionRequestBodyDestinationS3Location() {{
                                                bucket = "nam";
                                                prefix = "officia";
                                            }};, PutReportDefinitionRequestBodyFormatEnum.PARQUET, "fugit", PutReportDefinitionRequestBodyReportFrequencyEnum.DAILY, "hic");) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            PutReportDefinitionResponse res = sdk.sdk.putReportDefinition(req);

            if (res.putReportDefinitionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReportDefinition

Updates existing report in AWS Application Cost Profiler.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReportDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateReportDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateReportDefinitionRequestBodyDestinationS3Location;
import org.openapis.openapi.models.operations.UpdateReportDefinitionRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.UpdateReportDefinitionRequestBodyReportFrequencyEnum;
import org.openapis.openapi.models.operations.UpdateReportDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReportDefinitionRequest req = new UpdateReportDefinitionRequest(                new UpdateReportDefinitionRequestBody(                new UpdateReportDefinitionRequestBodyDestinationS3Location() {{
                                                bucket = "cum";
                                                prefix = "esse";
                                            }};, UpdateReportDefinitionRequestBodyFormatEnum.CSV, "excepturi", UpdateReportDefinitionRequestBodyReportFrequencyEnum.MONTHLY);, "perferendis") {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "natus";
                xAmzCredential = "sed";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "laboriosam";
            }};            

            UpdateReportDefinitionResponse res = sdk.sdk.updateReportDefinition(req);

            if (res.updateReportDefinitionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
