# operation

### Available Operations

* [checkOperation](#checkoperation) - Check if an operation to be created is valid
* [createOperation](#createoperation) - Create an operation to be applied as part of a connection pipeline
* [deleteOperation](#deleteoperation) - Delete an operation
* [getOperation](#getoperation) - Returns an operation
* [listOperationsForConnection](#listoperationsforconnection) - Returns all operations for a connection.
* [updateOperation](#updateoperation) - Update an operation

## checkOperation

Check if an operation to be created is valid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckOperationResponse;
import org.openapis.openapi.models.shared.OperatorConfiguration;
import org.openapis.openapi.models.shared.OperatorDbt;
import org.openapis.openapi.models.shared.OperatorNormalization;
import org.openapis.openapi.models.shared.OperatorNormalizationOptionEnum;
import org.openapis.openapi.models.shared.OperatorTypeEnum;
import org.openapis.openapi.models.shared.OperatorWebhook;
import org.openapis.openapi.models.shared.OperatorWebhookDbtCloud;
import org.openapis.openapi.models.shared.OperatorWebhookWebhookTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OperatorConfiguration req = new OperatorConfiguration(OperatorTypeEnum.DBT) {{
                dbt = new OperatorDbt("quaerat") {{
                    dbtArguments = "ipsum";
                    dockerImage = "ducimus";
                    gitRepoBranch = "laudantium";
                }};;
                normalization = new OperatorNormalization() {{
                    option = OperatorNormalizationOptionEnum.BASIC;
                }};;
                webhook = new OperatorWebhook() {{
                    dbtCloud = new OperatorWebhookDbtCloud(701786L, 643997L);;
                    executionBody = "odit";
                    executionUrl = "ad";
                    webhookConfigId = "317747dc-915a-4d2c-af5d-d6723dc0f5ae";
                    webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                }};;
            }};            

            CheckOperationResponse res = sdk.operation.checkOperation(req);

            if (res.checkOperationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOperation

Create an operation to be applied as part of a connection pipeline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOperationResponse;
import org.openapis.openapi.models.shared.OperationCreate;
import org.openapis.openapi.models.shared.OperatorConfiguration;
import org.openapis.openapi.models.shared.OperatorDbt;
import org.openapis.openapi.models.shared.OperatorNormalization;
import org.openapis.openapi.models.shared.OperatorNormalizationOptionEnum;
import org.openapis.openapi.models.shared.OperatorTypeEnum;
import org.openapis.openapi.models.shared.OperatorWebhook;
import org.openapis.openapi.models.shared.OperatorWebhookDbtCloud;
import org.openapis.openapi.models.shared.OperatorWebhookWebhookTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OperationCreate req = new OperationCreate("aspernatur",                 new OperatorConfiguration(OperatorTypeEnum.WEBHOOK) {{
                                dbt = new OperatorDbt("neque") {{
                                    dbtArguments = "officia";
                                    dockerImage = "suscipit";
                                    gitRepoBranch = "harum";
                                }};;
                                normalization = new OperatorNormalization() {{
                                    option = OperatorNormalizationOptionEnum.BASIC;
                                }};;
                                webhook = new OperatorWebhook() {{
                                    dbtCloud = new OperatorWebhookDbtCloud(496578L, 42454L);;
                                    executionBody = "perferendis";
                                    executionUrl = "laudantium";
                                    webhookConfigId = "78756143-f5a6-4c98-b555-54080d40bcac";
                                    webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                                }};;
                            }};, "c6cbd6b5-f3ec-4909-b04f-926bad255381");            

            CreateOperationResponse res = sdk.operation.createOperation(req);

            if (res.operationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOperation

Delete an operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOperationResponse;
import org.openapis.openapi.models.shared.OperationIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OperationIdRequestBody req = new OperationIdRequestBody("9b474b0e-d20e-4562-88ff-f639a910abdc");            

            DeleteOperationResponse res = sdk.operation.deleteOperation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOperation

Returns an operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOperationResponse;
import org.openapis.openapi.models.shared.OperationIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OperationIdRequestBody req = new OperationIdRequestBody("ab626766-96e1-4ec0-8221-b335d89acb3e");            

            GetOperationResponse res = sdk.operation.getOperation(req);

            if (res.operationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOperationsForConnection

List operations for connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOperationsForConnectionResponse;
import org.openapis.openapi.models.shared.ConnectionIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConnectionIdRequestBody req = new ConnectionIdRequestBody("cfda8d0c-549e-4f03-8049-78a61fa1cf20");            

            ListOperationsForConnectionResponse res = sdk.operation.listOperationsForConnection(req);

            if (res.operationReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOperation

Update an operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOperationResponse;
import org.openapis.openapi.models.shared.OperationUpdate;
import org.openapis.openapi.models.shared.OperatorConfiguration;
import org.openapis.openapi.models.shared.OperatorDbt;
import org.openapis.openapi.models.shared.OperatorNormalization;
import org.openapis.openapi.models.shared.OperatorNormalizationOptionEnum;
import org.openapis.openapi.models.shared.OperatorTypeEnum;
import org.openapis.openapi.models.shared.OperatorWebhook;
import org.openapis.openapi.models.shared.OperatorWebhookDbtCloud;
import org.openapis.openapi.models.shared.OperatorWebhookWebhookTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OperationUpdate req = new OperationUpdate("commodi", "88f77c1f-fc71-4dca-963f-2a3c80a97ff3",                 new OperatorConfiguration(OperatorTypeEnum.NORMALIZATION) {{
                                dbt = new OperatorDbt("non") {{
                                    dbtArguments = "optio";
                                    dockerImage = "illum";
                                    gitRepoBranch = "at";
                                }};;
                                normalization = new OperatorNormalization() {{
                                    option = OperatorNormalizationOptionEnum.BASIC;
                                }};;
                                webhook = new OperatorWebhook() {{
                                    dbtCloud = new OperatorWebhookDbtCloud(945320L, 562066L);;
                                    executionBody = "ipsam";
                                    executionUrl = "esse";
                                    webhookConfigId = "a9e61876-c6ab-421d-a9df-c94d6fecd799";
                                    webhookType = OperatorWebhookWebhookTypeEnum.DBT_CLOUD;
                                }};;
                            }};);            

            UpdateOperationResponse res = sdk.operation.updateOperation(req);

            if (res.operationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
