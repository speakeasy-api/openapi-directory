<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskRequest;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskResponse;
import org.openapis.openapi.models.shared.CreateBatchLoadTaskRequest;
import org.openapis.openapi.models.shared.ReportConfiguration;
import org.openapis.openapi.models.shared.ReportS3Configuration;
import org.openapis.openapi.models.shared.S3EncryptionOptionEnum;
import org.openapis.openapi.models.shared.DataSourceConfiguration;
import org.openapis.openapi.models.shared.DataSourceS3Configuration;
import org.openapis.openapi.models.shared.BatchLoadDataFormatEnum;
import org.openapis.openapi.models.shared.CsvConfiguration;
import org.openapis.openapi.models.shared.DataModelConfiguration;
import org.openapis.openapi.models.shared.DataModelS3Configuration;
import org.openapis.openapi.models.shared.DataModel;
import org.openapis.openapi.models.shared.TimeUnitEnum;
import org.openapis.openapi.models.shared.MultiMeasureMappings;
import org.openapis.openapi.models.shared.MultiMeasureAttributeMapping;
import org.openapis.openapi.models.shared.ScalarMeasureValueTypeEnum;
import org.openapis.openapi.models.shared.MixedMeasureMapping;
import org.openapis.openapi.models.shared.MeasureValueTypeEnum;
import org.openapis.openapi.models.shared.DimensionMapping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchLoadTaskRequest req = new CreateBatchLoadTaskRequest() {{
                createBatchLoadTaskRequest = new CreateBatchLoadTaskRequest() {{
                    clientToken = "corrupti";
                    dataModelConfiguration = new DataModelConfiguration() {{
                        dataModel = new DataModel() {{
                            dimensionMappings = new org.openapis.openapi.models.shared.DimensionMapping[]{{
                                add(new DimensionMapping() {{
                                    destinationColumn = "distinctio";
                                    sourceColumn = "quibusdam";
                                }}),
                                add(new DimensionMapping() {{
                                    destinationColumn = "unde";
                                    sourceColumn = "nulla";
                                }}),
                                add(new DimensionMapping() {{
                                    destinationColumn = "corrupti";
                                    sourceColumn = "illum";
                                }}),
                            }};
                            measureNameColumn = "vel";
                            mixedMeasureMappings = new org.openapis.openapi.models.shared.MixedMeasureMapping[]{{
                                add(new MixedMeasureMapping() {{
                                    measureName = "deserunt";
                                    measureValueType = "VARCHAR";
                                    multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "BIGINT";
                                            sourceColumn = "debitis";
                                            targetMultiMeasureAttributeName = "ipsa";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "TIMESTAMP";
                                            sourceColumn = "tempora";
                                            targetMultiMeasureAttributeName = "suscipit";
                                        }}),
                                    }};
                                    sourceColumn = "molestiae";
                                    targetMeasureName = "minus";
                                }}),
                                add(new MixedMeasureMapping() {{
                                    measureName = "placeat";
                                    measureValueType = "BOOLEAN";
                                    multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "BOOLEAN";
                                            sourceColumn = "nisi";
                                            targetMultiMeasureAttributeName = "recusandae";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "TIMESTAMP";
                                            sourceColumn = "ab";
                                            targetMultiMeasureAttributeName = "quis";
                                        }}),
                                    }};
                                    sourceColumn = "veritatis";
                                    targetMeasureName = "deserunt";
                                }}),
                                add(new MixedMeasureMapping() {{
                                    measureName = "perferendis";
                                    measureValueType = "VARCHAR";
                                    multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "TIMESTAMP";
                                            sourceColumn = "quo";
                                            targetMultiMeasureAttributeName = "odit";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "TIMESTAMP";
                                            sourceColumn = "at";
                                            targetMultiMeasureAttributeName = "maiores";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "BOOLEAN";
                                            sourceColumn = "quod";
                                            targetMultiMeasureAttributeName = "quod";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "BOOLEAN";
                                            sourceColumn = "totam";
                                            targetMultiMeasureAttributeName = "porro";
                                        }}),
                                    }};
                                    sourceColumn = "dolorum";
                                    targetMeasureName = "dicta";
                                }}),
                            }};
                            multiMeasureMappings = new MultiMeasureMappings() {{
                                multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                    add(new MultiMeasureAttributeMapping() {{
                                        measureValueType = "VARCHAR";
                                        sourceColumn = "occaecati";
                                        targetMultiMeasureAttributeName = "fugit";
                                    }}),
                                    add(new MultiMeasureAttributeMapping() {{
                                        measureValueType = "BOOLEAN";
                                        sourceColumn = "hic";
                                        targetMultiMeasureAttributeName = "optio";
                                    }}),
                                    add(new MultiMeasureAttributeMapping() {{
                                        measureValueType = "BOOLEAN";
                                        sourceColumn = "beatae";
                                        targetMultiMeasureAttributeName = "commodi";
                                    }}),
                                }};
                                targetMultiMeasureName = "molestiae";
                            }};
                            timeColumn = "modi";
                            timeUnit = "MILLISECONDS";
                        }};
                        dataModelS3Configuration = new DataModelS3Configuration() {{
                            bucketName = "impedit";
                            objectKey = "cum";
                        }};
                    }};
                    dataSourceConfiguration = new DataSourceConfiguration() {{
                        csvConfiguration = new CsvConfiguration() {{
                            columnSeparator = "esse";
                            escapeChar = "ipsum";
                            nullValue = "excepturi";
                            quoteChar = "aspernatur";
                            trimWhiteSpace = false;
                        }};
                        dataFormat = "CSV";
                        dataSourceS3Configuration = new DataSourceS3Configuration() {{
                            bucketName = "perferendis";
                            objectKeyPrefix = "ad";
                        }};
                    }};
                    recordVersion = 617636;
                    reportConfiguration = new ReportConfiguration() {{
                        reportS3Configuration = new ReportS3Configuration() {{
                            bucketName = "sed";
                            encryptionOption = "SSE_KMS";
                            kmsKeyId = "dolor";
                            objectKeyPrefix = "natus";
                        }};
                    }};
                    targetDatabaseName = "laboriosam";
                    targetTableName = "hic";
                }};
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
                xAmzTarget = "Timestream_20181101.CreateBatchLoadTask";
            }}            

            CreateBatchLoadTaskResponse res = sdk.createBatchLoadTask(req);

            if (res.createBatchLoadTaskResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->