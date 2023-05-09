# experiments

## Overview

Experiment Rest Controller

### Available Operations

* [createExperimentUsingPOST](#createexperimentusingpost) - createExperiment
* [deleteExperimentUsingDELETE](#deleteexperimentusingdelete) - deleteExperiment
* [doActionExperimentUsingPOST](#doactionexperimentusingpost) - doActionExperiment
* [getExperimentUsingGET](#getexperimentusingget) - getExperiment
* [getExperimentsUsingGET](#getexperimentsusingget) - getExperiments
* [updateExperimentUsingPUT](#updateexperimentusingput) - updateExperiment

## createExperimentUsingPOST

createExperiment

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExperimentUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateExperimentUsingPOSTResponse;
import org.openapis.openapi.models.shared.ExperimentConfigModel;
import org.openapis.openapi.models.shared.ExperimentModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExperimentUsingPOSTRequest req = new CreateExperimentUsingPOSTRequest(                new ExperimentModel() {{
                                active = false;
                                changedFieldsAndInitialValues = new java.util.HashMap<String, Object>() {{
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                                complete = false;
                                config = new ExperimentConfigModel() {{
                                    playerMongoQuery = "nam";
                                    playerQuery = "officia";
                                    variants = "occaecati";
                                }};;
                                endDate = OffsetDateTime.parse("2022-06-18T20:36:37.412Z");
                                id = 944669L;
                                measurements = "optio";
                                measurementsEsQuery = "totam";
                                name = "Lucy Krajcik";
                                percentHash = "impedit";
                                publishedStages = new String[]{{
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                startDate = OffsetDateTime.parse("2022-12-25T03:24:03.949Z");
                            }};, "ad");            

            CreateExperimentUsingPOSTResponse res = sdk.experiments.createExperimentUsingPOST(req);

            if (res.experimentModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteExperimentUsingDELETE

deleteExperiment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETEExperimentUsingDELETERequest;
import org.openapis.openapi.models.operations.DELETEExperimentUsingDELETEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETEExperimentUsingDELETERequest req = new DELETEExperimentUsingDELETERequest("natus", 149675L);            

            DELETEExperimentUsingDELETEResponse res = sdk.experiments.deleteExperimentUsingDELETE(req);

            if (res.messageModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doActionExperimentUsingPOST

doActionExperiment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoActionExperimentUsingPOSTActionEnum;
import org.openapis.openapi.models.operations.DoActionExperimentUsingPOSTRequest;
import org.openapis.openapi.models.operations.DoActionExperimentUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoActionExperimentUsingPOSTRequest req = new DoActionExperimentUsingPOSTRequest(DoActionExperimentUsingPOSTActionEnum.PUBLISH, "dolor", 616934L);            

            DoActionExperimentUsingPOSTResponse res = sdk.experiments.doActionExperimentUsingPOST(req);

            if (res.experimentModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExperimentUsingGET

getExperiment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETExperimentUsingGETRequest;
import org.openapis.openapi.models.operations.GETExperimentUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETExperimentUsingGETRequest req = new GETExperimentUsingGETRequest("laboriosam", 943749L);            

            GETExperimentUsingGETResponse res = sdk.experiments.getExperimentUsingGET(req);

            if (res.experimentModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExperimentsUsingGET

getExperiments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETExperimentsUsingGETRequest;
import org.openapis.openapi.models.operations.GETExperimentsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETExperimentsUsingGETRequest req = new GETExperimentsUsingGETRequest("saepe");            

            GETExperimentsUsingGETResponse res = sdk.experiments.getExperimentsUsingGET(req);

            if (res.experimentModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateExperimentUsingPUT

updateExperiment

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExperimentUsingPUTRequest;
import org.openapis.openapi.models.operations.UpdateExperimentUsingPUTResponse;
import org.openapis.openapi.models.shared.ExperimentConfigModel;
import org.openapis.openapi.models.shared.ExperimentModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateExperimentUsingPUTRequest req = new UpdateExperimentUsingPUTRequest(                new ExperimentModel() {{
                                active = false;
                                changedFieldsAndInitialValues = new java.util.HashMap<String, Object>() {{
                                    put("in", "corporis");
                                    put("iste", "iure");
                                    put("saepe", "quidem");
                                }};
                                complete = false;
                                config = new ExperimentConfigModel() {{
                                    playerMongoQuery = "architecto";
                                    playerQuery = "ipsa";
                                    variants = "reiciendis";
                                }};;
                                endDate = OffsetDateTime.parse("2021-09-11T04:59:11.542Z");
                                id = 670638L;
                                measurements = "dolores";
                                measurementsEsQuery = "dolorem";
                                name = "Rose Rolfson";
                                percentHash = "nemo";
                                publishedStages = new String[]{{
                                    add("excepturi"),
                                    add("accusantium"),
                                }};
                                startDate = OffsetDateTime.parse("2022-05-14T11:45:33.094Z");
                            }};, "doloribus", 958950L);            

            UpdateExperimentUsingPUTResponse res = sdk.experiments.updateExperimentUsingPUT(req);

            if (res.experimentModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
