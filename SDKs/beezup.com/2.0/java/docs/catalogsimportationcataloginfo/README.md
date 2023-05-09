# catalogsImportationCatalogInfo

### Available Operations

* [importationConfigureCatalogColumn](#importationconfigurecatalogcolumn) - Configure catalog column
* [importationDeleteCustomColumn](#importationdeletecustomcolumn) - Delete Custom Column
* [importationGetCustomColumnExpression](#importationgetcustomcolumnexpression) - Get the encrypted custom column expression in this importation
* [importationGetCustomColumns](#importationgetcustomcolumns) - Get custom columns currently place in this importation
* [importationGetDetectedCatalogColumns](#importationgetdetectedcatalogcolumns) - Get detected catalog columns during this importation.
* [importationGetProductSample](#importationgetproductsample) - Get the product sample related to this importation with all columns (catalog and custom)
* [importationGetProductSampleCustomColumnValue](#importationgetproductsamplecustomcolumnvalue) - Get product sample custom column value related to this importation.
* [importationIgnoreColumn](#importationignorecolumn) - Ignore Column
* [importationMapCatalogColumn](#importationmapcatalogcolumn) - Map catalog column to a BeezUP column
* [importationMapCustomColumn](#importationmapcustomcolumn) - Map custom column to a BeezUP column
* [importationReattendColumn](#importationreattendcolumn) - Reattend Column
* [importationSaveCustomColumn](#importationsavecustomcolumn) - Create or replace a custom column
* [importationUnmapCatalogColumn](#importationunmapcatalogcolumn) - Unmap catalog column
* [importationUnmapCustomColumn](#importationunmapcustomcolumn) - Unmap custom column

## importationConfigureCatalogColumn

Configure catalog column

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationConfigureCatalogColumnRequest;
import org.openapis.openapi.models.operations.ImportationConfigureCatalogColumnResponse;
import org.openapis.openapi.models.shared.BeezUPCommonColumnDataTypeEnum;
import org.openapis.openapi.models.shared.BeezUPCommonColumnImportanceEnum;
import org.openapis.openapi.models.shared.BeezUPCommonErrorSummary;
import org.openapis.openapi.models.shared.BeezUPCommonExceptionDetail;
import org.openapis.openapi.models.shared.BeezUPCommonHttpMethodEnum;
import org.openapis.openapi.models.shared.BeezUPCommonInfoSummaries;
import org.openapis.openapi.models.shared.BeezUPCommonInfoSummary;
import org.openapis.openapi.models.shared.BeezUPCommonLOVLink3;
import org.openapis.openapi.models.shared.BeezUPCommonLinkParameter3;
import org.openapis.openapi.models.shared.BeezUPCommonLinkParameterProperty3;
import org.openapis.openapi.models.shared.BeezUPCommonParameterInEnum;
import org.openapis.openapi.models.shared.BeezUPCommonParameterTypeEnum;
import org.openapis.openapi.models.shared.BeezUPCommonSuccessSummary;
import org.openapis.openapi.models.shared.BeezUPCommonWarningSummary;
import org.openapis.openapi.models.shared.CatalogColumn;
import org.openapis.openapi.models.shared.CatalogColumnLinks;
import org.openapis.openapi.models.shared.ColumnConfiguration;
import org.openapis.openapi.models.shared.CompareOptionsEnum;
import org.openapis.openapi.models.shared.ConfigureCatalogColumnCatalogRequest;
import org.openapis.openapi.models.shared.DuplicateProductValueConfiguration;
import org.openapis.openapi.models.shared.DuplicateProductValueStrategyEnum;
import org.openapis.openapi.models.shared.LinksCatalogChangeCatalogColumnUserNameLink;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationConfigureCatalogColumnRequest req = new ImportationConfigureCatalogColumnRequest("occaecati",                 new ConfigureCatalogColumnCatalogRequest(                new CatalogColumn("SKU",                 new ColumnConfiguration(BeezUPCommonColumnDataTypeEnum.STRING, BeezUPCommonColumnImportanceEnum.REQUIRED) {{
                                                                beezUPColumnName = "CategoryFirstLevel";
                                                                canBeTruncated = true;
                                                                columnCultureName = "fr-FR";
                                                                columnFormat = "MM/dd/yyyy";
                                                                displayGroupName = "Category";
                                                            }};, "8f6671d6-a9bc-4de0-a0c4-4643b0c3f871",                 new CatalogColumnLinks() {{
                                                                rename = new LinksCatalogChangeCatalogColumnUserNameLink("/v2/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}") {{
                                                                    allOptionalParamsProvided = false;
                                                                    allRequiredParamsProvided = false;
                                                                    description = "This is a description link";
                                                                    docUrl = "https://api-docs.beezup.com/#operation/EnableChannelCatalog";
                                                                    info = new BeezUPCommonInfoSummaries() {{
                                                                        errors = new org.openapis.openapi.models.shared.BeezUPCommonErrorSummary[]{{
                                                                            add(new BeezUPCommonErrorSummary() {{
                                                                                errorArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("delectus", "quidem");
                                                                                    put("provident", "nam");
                                                                                    put("id", "blanditiis");
                                                                                    put("deleniti", "sapiente");
                                                                                }};
                                                                                errorCode = "amet";
                                                                                errorGuid = "a6699707-4ba4-4469-b6e2-141959890afa";
                                                                                errorMessage = "ad";
                                                                                exceptionDetail = new BeezUPCommonExceptionDetail() {{
                                                                                    helpLink = "eum";
                                                                                    message = "dolor";
                                                                                    stackTrace = "necessitatibus";
                                                                                    type = "odit";
                                                                                }};
                                                                                objectName = "nemo";
                                                                                propertyName = "quasi";
                                                                                propertyValue = "iure";
                                                                                source = "doloribus";
                                                                                technicalErrorMessage = "debitis";
                                                                                utcDate = OffsetDateTime.parse("2022-03-12T17:44:26.081Z");
                                                                            }}),
                                                                            add(new BeezUPCommonErrorSummary() {{
                                                                                errorArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("facilis", "in");
                                                                                    put("architecto", "architecto");
                                                                                    put("repudiandae", "ullam");
                                                                                }};
                                                                                errorCode = "expedita";
                                                                                errorGuid = "7fd2ed02-8921-4cdd-8692-601fb576b0d5";
                                                                                errorMessage = "voluptatibus";
                                                                                exceptionDetail = new BeezUPCommonExceptionDetail() {{
                                                                                    helpLink = "perferendis";
                                                                                    message = "fugiat";
                                                                                    stackTrace = "amet";
                                                                                    type = "aut";
                                                                                }};
                                                                                objectName = "cumque";
                                                                                propertyName = "corporis";
                                                                                propertyValue = "hic";
                                                                                source = "libero";
                                                                                technicalErrorMessage = "nobis";
                                                                                utcDate = OffsetDateTime.parse("2022-08-30T02:49:20.597Z");
                                                                            }}),
                                                                        }};
                                                                        informations = new org.openapis.openapi.models.shared.BeezUPCommonInfoSummary[]{{
                                                                            add(new BeezUPCommonInfoSummary() {{
                                                                                informationArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("eaque", "quis");
                                                                                    put("nesciunt", "eos");
                                                                                }};
                                                                                informationCode = "perferendis";
                                                                                informationMessage = "dolores";
                                                                                objectName = "minus";
                                                                                propertyName = "quam";
                                                                                propertyValue = "dolor";
                                                                            }}),
                                                                            add(new BeezUPCommonInfoSummary() {{
                                                                                informationArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("nostrum", "hic");
                                                                                    put("recusandae", "omnis");
                                                                                    put("facilis", "perspiciatis");
                                                                                    put("voluptatem", "porro");
                                                                                }};
                                                                                informationCode = "consequuntur";
                                                                                informationMessage = "blanditiis";
                                                                                objectName = "error";
                                                                                propertyName = "eaque";
                                                                                propertyValue = "occaecati";
                                                                            }}),
                                                                            add(new BeezUPCommonInfoSummary() {{
                                                                                informationArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("adipisci", "asperiores");
                                                                                    put("earum", "modi");
                                                                                    put("iste", "dolorum");
                                                                                }};
                                                                                informationCode = "deleniti";
                                                                                informationMessage = "pariatur";
                                                                                objectName = "provident";
                                                                                propertyName = "nobis";
                                                                                propertyValue = "libero";
                                                                            }}),
                                                                        }};
                                                                        successes = new org.openapis.openapi.models.shared.BeezUPCommonSuccessSummary[]{{
                                                                            add(new BeezUPCommonSuccessSummary() {{
                                                                                objectName = "quaerat";
                                                                                propertyName = "quos";
                                                                                propertyValue = "aliquid";
                                                                                successArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("dolorem", "dolor");
                                                                                }};
                                                                                successCode = "qui";
                                                                                successMessage = "ipsum";
                                                                            }}),
                                                                            add(new BeezUPCommonSuccessSummary() {{
                                                                                objectName = "hic";
                                                                                propertyName = "excepturi";
                                                                                propertyValue = "cum";
                                                                                successArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("dignissimos", "reiciendis");
                                                                                    put("amet", "dolorum");
                                                                                }};
                                                                                successCode = "numquam";
                                                                                successMessage = "veritatis";
                                                                            }}),
                                                                            add(new BeezUPCommonSuccessSummary() {{
                                                                                objectName = "ipsa";
                                                                                propertyName = "ipsa";
                                                                                propertyValue = "iure";
                                                                                successArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("quaerat", "accusamus");
                                                                                    put("quidem", "voluptatibus");
                                                                                }};
                                                                                successCode = "voluptas";
                                                                                successMessage = "natus";
                                                                            }}),
                                                                            add(new BeezUPCommonSuccessSummary() {{
                                                                                objectName = "eos";
                                                                                propertyName = "atque";
                                                                                propertyValue = "sit";
                                                                                successArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("ab", "soluta");
                                                                                    put("dolorum", "iusto");
                                                                                    put("voluptate", "dolorum");
                                                                                    put("deleniti", "omnis");
                                                                                }};
                                                                                successCode = "necessitatibus";
                                                                                successMessage = "distinctio";
                                                                            }}),
                                                                        }};
                                                                        warnings = new org.openapis.openapi.models.shared.BeezUPCommonWarningSummary[]{{
                                                                            add(new BeezUPCommonWarningSummary() {{
                                                                                technicalErrorMessage = "nihil";
                                                                                warningArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("voluptate", "id");
                                                                                }};
                                                                                warningCode = "saepe";
                                                                                warningMessage = "eius";
                                                                            }}),
                                                                            add(new BeezUPCommonWarningSummary() {{
                                                                                technicalErrorMessage = "aspernatur";
                                                                                warningArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("amet", "optio");
                                                                                }};
                                                                                warningCode = "accusamus";
                                                                                warningMessage = "ad";
                                                                            }}),
                                                                            add(new BeezUPCommonWarningSummary() {{
                                                                                technicalErrorMessage = "saepe";
                                                                                warningArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("deserunt", "provident");
                                                                                    put("minima", "repellendus");
                                                                                }};
                                                                                warningCode = "totam";
                                                                                warningMessage = "similique";
                                                                            }}),
                                                                            add(new BeezUPCommonWarningSummary() {{
                                                                                technicalErrorMessage = "alias";
                                                                                warningArguments = new java.util.HashMap<String, String>() {{
                                                                                    put("quaerat", "tempora");
                                                                                    put("vel", "quod");
                                                                                    put("officiis", "qui");
                                                                                    put("dolorum", "a");
                                                                                }};
                                                                                warningCode = "esse";
                                                                                warningMessage = "harum";
                                                                            }}),
                                                                        }};
                                                                    }};;
                                                                    label = "The translated label";
                                                                    method = BeezUPCommonHttpMethodEnum.GET;
                                                                    operationId = "GetOrder";
                                                                    parameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.BeezUPCommonLinkParameter3>() {{
                                                                        put("ipsum", new BeezUPCommonLinkParameter3(BeezUPCommonParameterInEnum.PATH) {{
                                                                            description = "the store identifier";
                                                                            in = BeezUPCommonParameterInEnum.PATH;
                                                                            label = "The translated label";
                                                                            lovLink = new BeezUPCommonLOVLink3("/v2/public/Go2CultureName") {{
                                                                                href = "/v2/public/Go2CultureName";
                                                                                method = BeezUPCommonHttpMethodEnum.GET;
                                                                            }};
                                                                            lovRequired = true;
                                                                            properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BeezUPCommonLinkParameterProperty3>() {{
                                                                                put("tenetur", new BeezUPCommonLinkParameterProperty3(BeezUPCommonParameterTypeEnum.STRING) {{
                                                                                    description = "the store identifier";
                                                                                    label = "The translated label";
                                                                                    lovLink = new BeezUPCommonLOVLink3("/v2/public/Go2CultureName") {{
                                                                                        href = "/v2/public/Go2CultureName";
                                                                                        method = BeezUPCommonHttpMethodEnum.GET;
                                                                                    }};
                                                                                    lovRequired = true;
                                                                                    required = true;
                                                                                    schema = "orderListRequest";
                                                                                    type = BeezUPCommonParameterTypeEnum.STRING;
                                                                                    value = new java.util.HashMap<String, Object>() {{
                                                                                        put("tempore", "accusamus");
                                                                                    }};
                                                                                }});
                                                                                put("numquam", new BeezUPCommonLinkParameterProperty3(BeezUPCommonParameterTypeEnum.STRING) {{
                                                                                    description = "the store identifier";
                                                                                    label = "The translated label";
                                                                                    lovLink = new BeezUPCommonLOVLink3("/v2/public/Go2CultureName") {{
                                                                                        href = "/v2/public/Go2CultureName";
                                                                                        method = BeezUPCommonHttpMethodEnum.GET;
                                                                                    }};
                                                                                    lovRequired = true;
                                                                                    required = true;
                                                                                    schema = "orderListRequest";
                                                                                    type = BeezUPCommonParameterTypeEnum.STRING;
                                                                                    value = new java.util.HashMap<String, Object>() {{
                                                                                        put("dolorem", "sapiente");
                                                                                        put("totam", "nihil");
                                                                                    }};
                                                                                }});
                                                                                put("sit", new BeezUPCommonLinkParameterProperty3(BeezUPCommonParameterTypeEnum.STRING) {{
                                                                                    description = "the store identifier";
                                                                                    label = "The translated label";
                                                                                    lovLink = new BeezUPCommonLOVLink3("/v2/public/Go2CultureName") {{
                                                                                        href = "/v2/public/Go2CultureName";
                                                                                        method = BeezUPCommonHttpMethodEnum.GET;
                                                                                    }};
                                                                                    lovRequired = true;
                                                                                    required = true;
                                                                                    schema = "orderListRequest";
                                                                                    type = BeezUPCommonParameterTypeEnum.STRING;
                                                                                    value = new java.util.HashMap<String, Object>() {{
                                                                                        put("neque", "sed");
                                                                                        put("vel", "libero");
                                                                                        put("voluptas", "deserunt");
                                                                                    }};
                                                                                }});
                                                                                put("quam", new BeezUPCommonLinkParameterProperty3(BeezUPCommonParameterTypeEnum.STRING) {{
                                                                                    description = "the store identifier";
                                                                                    label = "The translated label";
                                                                                    lovLink = new BeezUPCommonLOVLink3("/v2/public/Go2CultureName") {{
                                                                                        href = "/v2/public/Go2CultureName";
                                                                                        method = BeezUPCommonHttpMethodEnum.GET;
                                                                                    }};
                                                                                    lovRequired = true;
                                                                                    required = true;
                                                                                    schema = "orderListRequest";
                                                                                    type = BeezUPCommonParameterTypeEnum.STRING;
                                                                                    value = new java.util.HashMap<String, Object>() {{
                                                                                        put("incidunt", "qui");
                                                                                    }};
                                                                                }});
                                                                            }};
                                                                            required = true;
                                                                            schema = "orderListRequest";
                                                                            type = BeezUPCommonParameterTypeEnum.STRING;
                                                                            value = new java.util.HashMap<String, Object>() {{
                                                                                put("maxime", "pariatur");
                                                                                put("soluta", "dicta");
                                                                                put("laborum", "totam");
                                                                            }};
                                                                        }});
                                                                        put("incidunt", new BeezUPCommonLinkParameter3(BeezUPCommonParameterInEnum.PATH) {{
                                                                            description = "the store identifier";
                                                                            in = BeezUPCommonParameterInEnum.PATH;
                                                                            label = "The translated label";
                                                                            lovLink = new BeezUPCommonLOVLink3("/v2/public/Go2CultureName") {{
                                                                                href = "/v2/public/Go2CultureName";
                                                                                method = BeezUPCommonHttpMethodEnum.GET;
                                                                            }};
                                                                            lovRequired = true;
                                                                            properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BeezUPCommonLinkParameterProperty3>() {{
                                                                                put("dolores", new BeezUPCommonLinkParameterProperty3(BeezUPCommonParameterTypeEnum.STRING) {{
                                                                                    description = "the store identifier";
                                                                                    label = "The translated label";
                                                                                    lovLink = new BeezUPCommonLOVLink3("/v2/public/Go2CultureName") {{
                                                                                        href = "/v2/public/Go2CultureName";
                                                                                        method = BeezUPCommonHttpMethodEnum.GET;
                                                                                    }};
                                                                                    lovRequired = true;
                                                                                    required = true;
                                                                                    schema = "orderListRequest";
                                                                                    type = BeezUPCommonParameterTypeEnum.STRING;
                                                                                    value = new java.util.HashMap<String, Object>() {{
                                                                                        put("facilis", "aliquid");
                                                                                        put("quam", "molestias");
                                                                                        put("temporibus", "qui");
                                                                                    }};
                                                                                }});
                                                                            }};
                                                                            required = true;
                                                                            schema = "orderListRequest";
                                                                            type = BeezUPCommonParameterTypeEnum.STRING;
                                                                            value = new java.util.HashMap<String, Object>() {{
                                                                                put("fugit", "magni");
                                                                            }};
                                                                        }});
                                                                    }};
                                                                    urlTemplated = false;
                                                                }};;
                                                            }};, "My SKU") {{
                                                duplicateProductValueConfiguration = new DuplicateProductValueConfiguration(CompareOptionsEnum.IGNORE_CASE, DuplicateProductValueStrategyEnum.KEEP_FIRST_DUPLICATE_PRODUCT_ONLY);;
                                                ignored = false;
                                            }};);, "odio", "sunt");            

            ImportationConfigureCatalogColumnResponse res = sdk.catalogsImportationCatalogInfo.importationConfigureCatalogColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationDeleteCustomColumn

Delete Custom Column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationDeleteCustomColumnRequest;
import org.openapis.openapi.models.operations.ImportationDeleteCustomColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationDeleteCustomColumnRequest req = new ImportationDeleteCustomColumnRequest("ullam", "nam", "hic");            

            ImportationDeleteCustomColumnResponse res = sdk.catalogsImportationCatalogInfo.importationDeleteCustomColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetCustomColumnExpression

Get the encrypted custom column expression in this importation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetCustomColumnExpressionRequest;
import org.openapis.openapi.models.operations.ImportationGetCustomColumnExpressionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetCustomColumnExpressionRequest req = new ImportationGetCustomColumnExpressionRequest("voluptatem", "cumque", "soluta");            

            ImportationGetCustomColumnExpressionResponse res = sdk.catalogsImportationCatalogInfo.importationGetCustomColumnExpression(req);

            if (res.importationGetCustomColumnExpression200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetCustomColumns

Get custom columns currently place in this importation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetCustomColumnsRequest;
import org.openapis.openapi.models.operations.ImportationGetCustomColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetCustomColumnsRequest req = new ImportationGetCustomColumnsRequest("nobis", "et");            

            ImportationGetCustomColumnsResponse res = sdk.catalogsImportationCatalogInfo.importationGetCustomColumns(req);

            if (res.importationCustomColumnList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetDetectedCatalogColumns

Get detected catalog columns during this importation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetDetectedCatalogColumnsRequest;
import org.openapis.openapi.models.operations.ImportationGetDetectedCatalogColumnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetDetectedCatalogColumnsRequest req = new ImportationGetDetectedCatalogColumnsRequest("saepe", "ipsum");            

            ImportationGetDetectedCatalogColumnsResponse res = sdk.catalogsImportationCatalogInfo.importationGetDetectedCatalogColumns(req);

            if (res.detectedCatalogColumnList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetProductSample

Get the product sample related to this importation with all columns (catalog and custom)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetProductSampleRequest;
import org.openapis.openapi.models.operations.ImportationGetProductSampleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetProductSampleRequest req = new ImportationGetProductSampleRequest("veritatis", 749255, "quos");            

            ImportationGetProductSampleResponse res = sdk.catalogsImportationCatalogInfo.importationGetProductSample(req);

            if (res.productSample != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationGetProductSampleCustomColumnValue

/!\ Use this operation only when you just changed the custom column expression and you want to get a precise the property value. Otherwise use the operation Importation_GetProductSample which will give you all property values

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationGetProductSampleCustomColumnValueRequest;
import org.openapis.openapi.models.operations.ImportationGetProductSampleCustomColumnValueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationGetProductSampleCustomColumnValueRequest req = new ImportationGetProductSampleCustomColumnValueRequest("tempore", "cupiditate", 45614, "delectus");            

            ImportationGetProductSampleCustomColumnValueResponse res = sdk.catalogsImportationCatalogInfo.importationGetProductSampleCustomColumnValue(req);

            if (res.importationGetProductSampleCustomColumnValue200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationIgnoreColumn

Ignore Column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationIgnoreColumnRequest;
import org.openapis.openapi.models.operations.ImportationIgnoreColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationIgnoreColumnRequest req = new ImportationIgnoreColumnRequest("dolorem", "dolore", "labore");            

            ImportationIgnoreColumnResponse res = sdk.catalogsImportationCatalogInfo.importationIgnoreColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationMapCatalogColumn

Map catalog column to a BeezUP column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationMapCatalogColumnRequest;
import org.openapis.openapi.models.operations.ImportationMapCatalogColumnResponse;
import org.openapis.openapi.models.shared.MapBeezUPColumnRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationMapCatalogColumnRequest req = new ImportationMapCatalogColumnRequest("adipisci", "dolorum",                 new MapBeezUPColumnRequest("CategoryFirstLevel");, "architecto");            

            ImportationMapCatalogColumnResponse res = sdk.catalogsImportationCatalogInfo.importationMapCatalogColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationMapCustomColumn

Map custom column to a BeezUP column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationMapCustomColumnRequest;
import org.openapis.openapi.models.operations.ImportationMapCustomColumnResponse;
import org.openapis.openapi.models.shared.MapBeezUPColumnRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationMapCustomColumnRequest req = new ImportationMapCustomColumnRequest("quae", "aut",                 new MapBeezUPColumnRequest("CategoryFirstLevel");, "quas");            

            ImportationMapCustomColumnResponse res = sdk.catalogsImportationCatalogInfo.importationMapCustomColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationReattendColumn

Reattend Column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationReattendColumnRequest;
import org.openapis.openapi.models.operations.ImportationReattendColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationReattendColumnRequest req = new ImportationReattendColumnRequest("itaque", "consequatur", "est");            

            ImportationReattendColumnResponse res = sdk.catalogsImportationCatalogInfo.importationReattendColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationSaveCustomColumn

Create or replace a custom column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationSaveCustomColumnRequest;
import org.openapis.openapi.models.operations.ImportationSaveCustomColumnResponse;
import org.openapis.openapi.models.shared.ChangeCustomColumnRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationSaveCustomColumnRequest req = new ImportationSaveCustomColumnRequest(                new ChangeCustomColumnRequest("apokpoa,opz,sixsoisiosnoisn", "uziushdczaniodnndonisodndsiondsoidsndoin", "My SKU");, "repellendus", "porro", "doloribus");            

            ImportationSaveCustomColumnResponse res = sdk.catalogsImportationCatalogInfo.importationSaveCustomColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationUnmapCatalogColumn

Unmap catalog column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationUnmapCatalogColumnRequest;
import org.openapis.openapi.models.operations.ImportationUnmapCatalogColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationUnmapCatalogColumnRequest req = new ImportationUnmapCatalogColumnRequest("ut", "facilis", "cupiditate");            

            ImportationUnmapCatalogColumnResponse res = sdk.catalogsImportationCatalogInfo.importationUnmapCatalogColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importationUnmapCustomColumn

Unmap custom column

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportationUnmapCustomColumnRequest;
import org.openapis.openapi.models.operations.ImportationUnmapCustomColumnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportationUnmapCustomColumnRequest req = new ImportationUnmapCustomColumnRequest("qui", "quae", "laudantium");            

            ImportationUnmapCustomColumnResponse res = sdk.catalogsImportationCatalogInfo.importationUnmapCustomColumn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
