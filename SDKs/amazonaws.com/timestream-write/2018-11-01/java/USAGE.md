<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateBatchLoadTaskRequest req = new CreateBatchLoadTaskRequest() {{
                headers = new CreateBatchLoadTaskHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Timestream_20181101.CreateBatchLoadTask";
                }};
                request = new CreateBatchLoadTaskRequest() {{
                    clientToken = "illum";
                    dataModelConfiguration = new DataModelConfiguration() {{
                        dataModel = new DataModel() {{
                            dimensionMappings = new org.openapis.openapi.models.shared.DimensionMapping[]{{
                                add(new DimensionMapping() {{
                                    destinationColumn = "error";
                                    sourceColumn = "deserunt";
                                }}),
                                add(new DimensionMapping() {{
                                    destinationColumn = "suscipit";
                                    sourceColumn = "iure";
                                }}),
                            }};
                            measureNameColumn = "magnam";
                            mixedMeasureMappings = new org.openapis.openapi.models.shared.MixedMeasureMapping[]{{
                                add(new MixedMeasureMapping() {{
                                    measureName = "ipsa";
                                    measureValueType = "MULTI";
                                    multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "BIGINT";
                                            sourceColumn = "molestiae";
                                            targetMultiMeasureAttributeName = "minus";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "TIMESTAMP";
                                            sourceColumn = "voluptatum";
                                            targetMultiMeasureAttributeName = "iusto";
                                        }}),
                                    }};
                                    sourceColumn = "excepturi";
                                    targetMeasureName = "nisi";
                                }}),
                                add(new MixedMeasureMapping() {{
                                    measureName = "recusandae";
                                    measureValueType = "MULTI";
                                    multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "BIGINT";
                                            sourceColumn = "veritatis";
                                            targetMultiMeasureAttributeName = "deserunt";
                                        }}),
                                    }};
                                    sourceColumn = "perferendis";
                                    targetMeasureName = "ipsam";
                                }}),
                                add(new MixedMeasureMapping() {{
                                    measureName = "repellendus";
                                    measureValueType = "MULTI";
                                    multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "DOUBLE";
                                            sourceColumn = "at";
                                            targetMultiMeasureAttributeName = "at";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "TIMESTAMP";
                                            sourceColumn = "molestiae";
                                            targetMultiMeasureAttributeName = "quod";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "TIMESTAMP";
                                            sourceColumn = "esse";
                                            targetMultiMeasureAttributeName = "totam";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "VARCHAR";
                                            sourceColumn = "dolorum";
                                            targetMultiMeasureAttributeName = "dicta";
                                        }}),
                                    }};
                                    sourceColumn = "nam";
                                    targetMeasureName = "officia";
                                }}),
                                add(new MixedMeasureMapping() {{
                                    measureName = "occaecati";
                                    measureValueType = "DOUBLE";
                                    multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "TIMESTAMP";
                                            sourceColumn = "optio";
                                            targetMultiMeasureAttributeName = "totam";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "DOUBLE";
                                            sourceColumn = "commodi";
                                            targetMultiMeasureAttributeName = "molestiae";
                                        }}),
                                        add(new MultiMeasureAttributeMapping() {{
                                            measureValueType = "BIGINT";
                                            sourceColumn = "qui";
                                            targetMultiMeasureAttributeName = "impedit";
                                        }}),
                                    }};
                                    sourceColumn = "cum";
                                    targetMeasureName = "esse";
                                }}),
                            }};
                            multiMeasureMappings = new MultiMeasureMappings() {{
                                multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                    add(new MultiMeasureAttributeMapping() {{
                                        measureValueType = "BOOLEAN";
                                        sourceColumn = "aspernatur";
                                        targetMultiMeasureAttributeName = "perferendis";
                                    }}),
                                }};
                                targetMultiMeasureName = "ad";
                            }};
                            timeColumn = "natus";
                            timeUnit = "MILLISECONDS";
                        }};
                        dataModelS3Configuration = new DataModelS3Configuration() {{
                            bucketName = "iste";
                            objectKey = "dolor";
                        }};
                    }};
                    dataSourceConfiguration = new DataSourceConfiguration() {{
                        csvConfiguration = new CsvConfiguration() {{
                            columnSeparator = "natus";
                            escapeChar = "laboriosam";
                            nullValue = "hic";
                            quoteChar = "saepe";
                            trimWhiteSpace = false;
                        }};
                        dataFormat = "CSV";
                        dataSourceS3Configuration = new DataSourceS3Configuration() {{
                            bucketName = "fuga";
                            objectKeyPrefix = "in";
                        }};
                    }};
                    recordVersion = 359508;
                    reportConfiguration = new ReportConfiguration() {{
                        reportS3Configuration = new ReportS3Configuration() {{
                            bucketName = "iste";
                            encryptionOption = "SSE_S3";
                            kmsKeyId = "saepe";
                            objectKeyPrefix = "quidem";
                        }};
                    }};
                    targetDatabaseName = "architecto";
                    targetTableName = "ipsa";
                }};
            }};            

            CreateBatchLoadTaskResponse res = sdk.createBatchLoadTask(req);

            if (res.createBatchLoadTaskResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->