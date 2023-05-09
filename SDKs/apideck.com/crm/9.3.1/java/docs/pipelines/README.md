# pipelines

### Available Operations

* [pipelinesAdd](#pipelinesadd) - Create pipeline
* [pipelinesAll](#pipelinesall) - List pipelines
* [pipelinesDelete](#pipelinesdelete) - Delete pipeline
* [pipelinesOne](#pipelinesone) - Get pipeline
* [pipelinesUpdate](#pipelinesupdate) - Update pipeline

## pipelinesAdd

Create pipeline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PipelinesAddRequest;
import org.openapis.openapi.models.operations.PipelinesAddResponse;
import org.openapis.openapi.models.operations.PipelinesAddSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.PipelineInput;
import org.openapis.openapi.models.shared.PipelineStagesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PipelinesAddRequest req = new PipelinesAddRequest(                new PipelineInput("Sales Pipeline") {{
                                active = false;
                                archived = false;
                                currency = CurrencyEnum.USD;
                                displayOrder = 1L;
                                id = "default";
                                stages = new org.openapis.openapi.models.shared.PipelineStagesInput[]{{
                                    add(new PipelineStagesInput() {{
                                        displayOrder = 1L;
                                        name = "Contract Sent";
                                        value = "CONTRACT_SENT";
                                        winProbability = 50L;
                                    }}),
                                    add(new PipelineStagesInput() {{
                                        displayOrder = 1L;
                                        name = "Contract Sent";
                                        value = "CONTRACT_SENT";
                                        winProbability = 50L;
                                    }}),
                                    add(new PipelineStagesInput() {{
                                        displayOrder = 1L;
                                        name = "Contract Sent";
                                        value = "CONTRACT_SENT";
                                        winProbability = 50L;
                                    }}),
                                }};
                                winProbabilityEnabled = true;
                            }};, "odit", "ea") {{
                raw = false;
                xApideckServiceId = "accusantium";
            }};            

            PipelinesAddResponse res = sdk.pipelines.pipelinesAdd(req, new PipelinesAddSecurity("ab") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createPipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pipelinesAll

List pipelines

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PipelinesAllRequest;
import org.openapis.openapi.models.operations.PipelinesAllResponse;
import org.openapis.openapi.models.operations.PipelinesAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PipelinesAllRequest req = new PipelinesAllRequest("maiores", "quidem") {{
                cursor = "ipsam";
                fields = "voluptate";
                limit = 420075L;
                raw = false;
                xApideckServiceId = "nam";
            }};            

            PipelinesAllResponse res = sdk.pipelines.pipelinesAll(req, new PipelinesAllSecurity("eaque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPipelinesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pipelinesDelete

Delete pipeline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PipelinesDeleteRequest;
import org.openapis.openapi.models.operations.PipelinesDeleteResponse;
import org.openapis.openapi.models.operations.PipelinesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PipelinesDeleteRequest req = new PipelinesDeleteRequest("pariatur", "nemo", "voluptatibus") {{
                raw = false;
                xApideckServiceId = "perferendis";
            }};            

            PipelinesDeleteResponse res = sdk.pipelines.pipelinesDelete(req, new PipelinesDeleteSecurity("fugiat") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deletePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pipelinesOne

Get pipeline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PipelinesOneRequest;
import org.openapis.openapi.models.operations.PipelinesOneResponse;
import org.openapis.openapi.models.operations.PipelinesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PipelinesOneRequest req = new PipelinesOneRequest("amet", "aut", "cumque") {{
                fields = "corporis";
                raw = false;
                xApideckServiceId = "hic";
            }};            

            PipelinesOneResponse res = sdk.pipelines.pipelinesOne(req, new PipelinesOneSecurity("libero") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pipelinesUpdate

Update pipeline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PipelinesUpdateRequest;
import org.openapis.openapi.models.operations.PipelinesUpdateResponse;
import org.openapis.openapi.models.operations.PipelinesUpdateSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.PipelineInput;
import org.openapis.openapi.models.shared.PipelineStagesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PipelinesUpdateRequest req = new PipelinesUpdateRequest(                new PipelineInput("Sales Pipeline") {{
                                active = false;
                                archived = false;
                                currency = CurrencyEnum.USD;
                                displayOrder = 1L;
                                id = "default";
                                stages = new org.openapis.openapi.models.shared.PipelineStagesInput[]{{
                                    add(new PipelineStagesInput() {{
                                        displayOrder = 1L;
                                        name = "Contract Sent";
                                        value = "CONTRACT_SENT";
                                        winProbability = 50L;
                                    }}),
                                    add(new PipelineStagesInput() {{
                                        displayOrder = 1L;
                                        name = "Contract Sent";
                                        value = "CONTRACT_SENT";
                                        winProbability = 50L;
                                    }}),
                                    add(new PipelineStagesInput() {{
                                        displayOrder = 1L;
                                        name = "Contract Sent";
                                        value = "CONTRACT_SENT";
                                        winProbability = 50L;
                                    }}),
                                }};
                                winProbabilityEnabled = true;
                            }};, "dolores", "quis", "totam") {{
                raw = false;
                xApideckServiceId = "dignissimos";
            }};            

            PipelinesUpdateResponse res = sdk.pipelines.pipelinesUpdate(req, new PipelinesUpdateSecurity("eaque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updatePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
