<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskRequest;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskResponse;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchLoadDataFormatEnum;
import org.openapis.openapi.models.shared.CreateBatchLoadTaskRequest;
import org.openapis.openapi.models.shared.CsvConfiguration;
import org.openapis.openapi.models.shared.DataModel;
import org.openapis.openapi.models.shared.DataModelConfiguration;
import org.openapis.openapi.models.shared.DataModelS3Configuration;
import org.openapis.openapi.models.shared.DataSourceConfiguration;
import org.openapis.openapi.models.shared.DataSourceS3Configuration;
import org.openapis.openapi.models.shared.DimensionMapping;
import org.openapis.openapi.models.shared.MeasureValueTypeEnum;
import org.openapis.openapi.models.shared.MixedMeasureMapping;
import org.openapis.openapi.models.shared.MultiMeasureAttributeMapping;
import org.openapis.openapi.models.shared.MultiMeasureMappings;
import org.openapis.openapi.models.shared.ReportConfiguration;
import org.openapis.openapi.models.shared.ReportS3Configuration;
import org.openapis.openapi.models.shared.S3EncryptionOptionEnum;
import org.openapis.openapi.models.shared.ScalarMeasureValueTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchLoadTaskRequest req = new CreateBatchLoadTaskRequest(                new CreateBatchLoadTaskRequest(                new DataSourceConfiguration(BatchLoadDataFormatEnum.CSV,                 new DataSourceS3Configuration("provident") {{
                                                                objectKeyPrefix = "distinctio";
                                                            }};) {{
                                                csvConfiguration = new CsvConfiguration() {{
                                                    columnSeparator = "quibusdam";
                                                    escapeChar = "unde";
                                                    nullValue = "nulla";
                                                    quoteChar = "corrupti";
                                                    trimWhiteSpace = false;
                                                }};;
                                            }};,                 new ReportConfiguration() {{
                                                reportS3Configuration = new ReportS3Configuration("illum") {{
                                                    encryptionOption = S3EncryptionOptionEnum.SSE_S3;
                                                    kmsKeyId = "error";
                                                    objectKeyPrefix = "deserunt";
                                                }};;
                                            }};, "suscipit", "iure") {{
                                clientToken = "magnam";
                                dataModelConfiguration = new DataModelConfiguration() {{
                                    dataModel = new DataModel(                new org.openapis.openapi.models.shared.DimensionMapping[]{{
                                                        add(new DimensionMapping() {{
                                                            destinationColumn = "ipsa";
                                                            sourceColumn = "delectus";
                                                        }}),
                                                        add(new DimensionMapping() {{
                                                            destinationColumn = "tempora";
                                                            sourceColumn = "suscipit";
                                                        }}),
                                                        add(new DimensionMapping() {{
                                                            destinationColumn = "molestiae";
                                                            sourceColumn = "minus";
                                                        }}),
                                                        add(new DimensionMapping() {{
                                                            destinationColumn = "placeat";
                                                            sourceColumn = "voluptatum";
                                                        }}),
                                                    }}) {{
                                        measureNameColumn = "iusto";
                                        mixedMeasureMappings = new org.openapis.openapi.models.shared.MixedMeasureMapping[]{{
                                            add(new MixedMeasureMapping(MeasureValueTypeEnum.TIMESTAMP) {{
                                                measureName = "nisi";
                                                measureValueType = MeasureValueTypeEnum.MULTI;
                                                multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                                    add(new MultiMeasureAttributeMapping("deserunt") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.DOUBLE;
                                                        sourceColumn = "quis";
                                                        targetMultiMeasureAttributeName = "veritatis";
                                                    }}),
                                                    add(new MultiMeasureAttributeMapping("sapiente") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.DOUBLE;
                                                        sourceColumn = "ipsam";
                                                        targetMultiMeasureAttributeName = "repellendus";
                                                    }}),
                                                    add(new MultiMeasureAttributeMapping("at") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.VARCHAR;
                                                        sourceColumn = "odit";
                                                        targetMultiMeasureAttributeName = "at";
                                                    }}),
                                                    add(new MultiMeasureAttributeMapping("quod") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.TIMESTAMP;
                                                        sourceColumn = "molestiae";
                                                        targetMultiMeasureAttributeName = "quod";
                                                    }}),
                                                }};
                                                sourceColumn = "esse";
                                                targetMeasureName = "totam";
                                            }}),
                                            add(new MixedMeasureMapping(MeasureValueTypeEnum.VARCHAR) {{
                                                measureName = "dolorum";
                                                measureValueType = MeasureValueTypeEnum.DOUBLE;
                                                multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                                    add(new MultiMeasureAttributeMapping("deleniti") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.VARCHAR;
                                                        sourceColumn = "occaecati";
                                                        targetMultiMeasureAttributeName = "fugit";
                                                    }}),
                                                    add(new MultiMeasureAttributeMapping("beatae") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.TIMESTAMP;
                                                        sourceColumn = "optio";
                                                        targetMultiMeasureAttributeName = "totam";
                                                    }}),
                                                    add(new MultiMeasureAttributeMapping("qui") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.BOOLEAN_;
                                                        sourceColumn = "molestiae";
                                                        targetMultiMeasureAttributeName = "modi";
                                                    }}),
                                                }};
                                                sourceColumn = "impedit";
                                                targetMeasureName = "cum";
                                            }}),
                                            add(new MixedMeasureMapping(MeasureValueTypeEnum.BOOLEAN_) {{
                                                measureName = "ipsum";
                                                measureValueType = MeasureValueTypeEnum.BOOLEAN_;
                                                multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                                    add(new MultiMeasureAttributeMapping("sed") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.DOUBLE;
                                                        sourceColumn = "ad";
                                                        targetMultiMeasureAttributeName = "natus";
                                                    }}),
                                                }};
                                                sourceColumn = "iste";
                                                targetMeasureName = "dolor";
                                            }}),
                                        }};
                                        multiMeasureMappings = new MultiMeasureMappings(                new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                                            add(new MultiMeasureAttributeMapping("in") {{
                                                                measureValueType = ScalarMeasureValueTypeEnum.TIMESTAMP;
                                                                sourceColumn = "saepe";
                                                                targetMultiMeasureAttributeName = "fuga";
                                                            }}),
                                                            add(new MultiMeasureAttributeMapping("saepe") {{
                                                                measureValueType = ScalarMeasureValueTypeEnum.BIGINT;
                                                                sourceColumn = "iste";
                                                                targetMultiMeasureAttributeName = "iure";
                                                            }}),
                                                        }}) {{
                                            targetMultiMeasureName = "quidem";
                                        }};;
                                        timeColumn = "architecto";
                                        timeUnit = TimeUnitEnum.MILLISECONDS;
                                    }};;
                                    dataModelS3Configuration = new DataModelS3Configuration() {{
                                        bucketName = "reiciendis";
                                        objectKey = "est";
                                    }};;
                                }};;
                                recordVersion = 653140L;
                            }};, CreateBatchLoadTaskXAmzTargetEnum.TIMESTREAM20181101_CREATE_BATCH_LOAD_TASK) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
            }};            

            CreateBatchLoadTaskResponse res = sdk.createBatchLoadTask(req);

            if (res.createBatchLoadTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->