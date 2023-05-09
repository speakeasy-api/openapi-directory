# testHarness

## Overview

Test Harness Restv 2 Controller

### Available Operations

* [createTestHarnessScenarioUsingPOST](#createtestharnessscenariousingpost) - createTestHarnessScenario
* [deleteTestHarnessScenarioUsingDELETE](#deletetestharnessscenariousingdelete) - deleteTestHarnessScenario
* [getTestHarnessScenarioUsingGET](#gettestharnessscenariousingget) - getTestHarnessScenario
* [getTestHarnessScenariosUsingGET](#gettestharnessscenariosusingget) - getTestHarnessScenarios
* [updateTestHarnessScenarioUsingPUT](#updatetestharnessscenariousingput) - updateTestHarnessScenario

## createTestHarnessScenarioUsingPOST

createTestHarnessScenario

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTestHarnessScenarioUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateTestHarnessScenarioUsingPOSTResponse;
import org.openapis.openapi.models.shared.TestHarnessScenarioModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTestHarnessScenarioUsingPOSTRequest req = new CreateTestHarnessScenarioUsingPOSTRequest(                new TestHarnessScenarioModel() {{
                                scenarioJson = new java.util.HashMap<String, Object>() {{
                                    put("numquam", "veritatis");
                                    put("ipsa", "ipsa");
                                    put("iure", "odio");
                                }};
                                scenarioName = "quaerat";
                            }};, "accusamus");            

            CreateTestHarnessScenarioUsingPOSTResponse res = sdk.testHarness.createTestHarnessScenarioUsingPOST(req);

            if (res.testHarnessScenarioModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTestHarnessScenarioUsingDELETE

deleteTestHarnessScenario

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETETestHarnessScenarioUsingDELETERequest;
import org.openapis.openapi.models.operations.DELETETestHarnessScenarioUsingDELETEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETETestHarnessScenarioUsingDELETERequest req = new DELETETestHarnessScenarioUsingDELETERequest("quidem", "voluptatibus");            

            DELETETestHarnessScenarioUsingDELETEResponse res = sdk.testHarness.deleteTestHarnessScenarioUsingDELETE(req);

            if (res.messageModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestHarnessScenarioUsingGET

getTestHarnessScenario

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTestHarnessScenarioUsingGETRequest;
import org.openapis.openapi.models.operations.GETTestHarnessScenarioUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETTestHarnessScenarioUsingGETRequest req = new GETTestHarnessScenarioUsingGETRequest("voluptas", "natus");            

            GETTestHarnessScenarioUsingGETResponse res = sdk.testHarness.getTestHarnessScenarioUsingGET(req);

            if (res.testHarnessScenarioModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestHarnessScenariosUsingGET

getTestHarnessScenarios

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTestHarnessScenariosUsingGETRequest;
import org.openapis.openapi.models.operations.GETTestHarnessScenariosUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETTestHarnessScenariosUsingGETRequest req = new GETTestHarnessScenariosUsingGETRequest("eos");            

            GETTestHarnessScenariosUsingGETResponse res = sdk.testHarness.getTestHarnessScenariosUsingGET(req);

            if (res.testHarnessScenarioModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTestHarnessScenarioUsingPUT

updateTestHarnessScenario

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTestHarnessScenarioUsingPUTRequest;
import org.openapis.openapi.models.operations.UpdateTestHarnessScenarioUsingPUTResponse;
import org.openapis.openapi.models.shared.TestHarnessScenarioModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTestHarnessScenarioUsingPUTRequest req = new UpdateTestHarnessScenarioUsingPUTRequest(                new TestHarnessScenarioModel() {{
                                scenarioJson = new java.util.HashMap<String, Object>() {{
                                    put("sit", "fugiat");
                                    put("ab", "soluta");
                                    put("dolorum", "iusto");
                                }};
                                scenarioName = "voluptate";
                            }};, "dolorum", "deleniti");            

            UpdateTestHarnessScenarioUsingPUTResponse res = sdk.testHarness.updateTestHarnessScenarioUsingPUT(req);

            if (res.testHarnessScenarioModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
