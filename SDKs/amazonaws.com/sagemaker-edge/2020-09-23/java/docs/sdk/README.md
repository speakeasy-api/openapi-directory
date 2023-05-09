# SDK

## Overview

SageMaker Edge Manager dataplane service for communicating with active agents.

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [getDeployments](#getdeployments) - Use to get the active deployments from a device.
* [getDeviceRegistration](#getdeviceregistration) - Use to check if a device is registered with SageMaker Edge Manager.
* [sendHeartbeat](#sendheartbeat) - Use to get the current status of devices registered on SageMaker Edge Manager.

## getDeployments

Use to get the active deployments from a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentsRequest;
import org.openapis.openapi.models.operations.GetDeploymentsRequestBody;
import org.openapis.openapi.models.operations.GetDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentsRequest req = new GetDeploymentsRequest(                new GetDeploymentsRequestBody("suscipit", "iure");) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetDeploymentsResponse res = sdk.sdk.getDeployments(req);

            if (res.getDeploymentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceRegistration

Use to check if a device is registered with SageMaker Edge Manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceRegistrationRequest;
import org.openapis.openapi.models.operations.GetDeviceRegistrationRequestBody;
import org.openapis.openapi.models.operations.GetDeviceRegistrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceRegistrationRequest req = new GetDeviceRegistrationRequest(                new GetDeviceRegistrationRequestBody("placeat", "voluptatum");) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            GetDeviceRegistrationResponse res = sdk.sdk.getDeviceRegistration(req);

            if (res.getDeviceRegistrationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendHeartbeat

Use to get the current status of devices registered on SageMaker Edge Manager.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendHeartbeatRequest;
import org.openapis.openapi.models.operations.SendHeartbeatRequestBody;
import org.openapis.openapi.models.operations.SendHeartbeatRequestBodyDeploymentResult;
import org.openapis.openapi.models.operations.SendHeartbeatResponse;
import org.openapis.openapi.models.shared.DeploymentModel;
import org.openapis.openapi.models.shared.DeploymentStatusEnum;
import org.openapis.openapi.models.shared.EdgeMetric;
import org.openapis.openapi.models.shared.Model;
import org.openapis.openapi.models.shared.ModelStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendHeartbeatRequest req = new SendHeartbeatRequest(                new SendHeartbeatRequestBody("deserunt", "perferendis", "ipsam") {{
                                agentMetrics = new org.openapis.openapi.models.shared.EdgeMetric[]{{
                                    add(new EdgeMetric() {{
                                        dimension = "sapiente";
                                        metricName = "quo";
                                        timestamp = OffsetDateTime.parse("2022-02-17T10:41:36.857Z");
                                        value = 8700.88;
                                    }}),
                                    add(new EdgeMetric() {{
                                        dimension = "maiores";
                                        metricName = "molestiae";
                                        timestamp = OffsetDateTime.parse("2020-08-07T00:03:55.328Z");
                                        value = 4614.79;
                                    }}),
                                    add(new EdgeMetric() {{
                                        dimension = "totam";
                                        metricName = "porro";
                                        timestamp = OffsetDateTime.parse("2022-10-06T15:49:54.663Z");
                                        value = 7206.33;
                                    }}),
                                    add(new EdgeMetric() {{
                                        dimension = "officia";
                                        metricName = "occaecati";
                                        timestamp = OffsetDateTime.parse("2022-06-18T20:36:37.412Z");
                                        value = 9446.69;
                                    }}),
                                }};
                                deploymentResult = new SendHeartbeatRequestBodyDeploymentResult() {{
                                    deploymentEndTime = OffsetDateTime.parse("2021-06-08T13:49:32.889Z");
                                    deploymentModels = new org.openapis.openapi.models.shared.DeploymentModel[]{{
                                        add(new DeploymentModel() {{
                                            desiredState = ModelStateEnum.DEPLOY;
                                            modelHandle = "molestiae";
                                            modelName = "modi";
                                            modelVersion = "qui";
                                            rollbackFailureReason = "impedit";
                                            state = ModelStateEnum.UNDEPLOY;
                                            status = DeploymentStatusEnum.SUCCESS;
                                            statusReason = "ipsum";
                                        }}),
                                    }};
                                    deploymentName = "excepturi";
                                    deploymentStartTime = OffsetDateTime.parse("2022-12-25T03:24:03.949Z");
                                    deploymentStatus = "ad";
                                    deploymentStatusMessage = "natus";
                                }};;
                                models = new org.openapis.openapi.models.shared.Model[]{{
                                    add(new Model() {{
                                        latestInference = OffsetDateTime.parse("2022-07-22T16:55:44.795Z");
                                        latestSampleTime = OffsetDateTime.parse("2022-03-24T20:42:46.563Z");
                                        modelMetrics = new org.openapis.openapi.models.shared.EdgeMetric[]{{
                                            add(new EdgeMetric() {{
                                                dimension = "saepe";
                                                metricName = "fuga";
                                                timestamp = OffsetDateTime.parse("2022-08-22T18:42:38.160Z");
                                                value = 6130.64;
                                            }}),
                                            add(new EdgeMetric() {{
                                                dimension = "iure";
                                                metricName = "saepe";
                                                timestamp = OffsetDateTime.parse("2022-10-20T12:36:28.767Z");
                                                value = 602.25;
                                            }}),
                                            add(new EdgeMetric() {{
                                                dimension = "reiciendis";
                                                metricName = "est";
                                                timestamp = OffsetDateTime.parse("2021-08-29T10:25:27.700Z");
                                                value = 1709.09;
                                            }}),
                                            add(new EdgeMetric() {{
                                                dimension = "dolorem";
                                                metricName = "corporis";
                                                timestamp = OffsetDateTime.parse("2022-04-01T23:59:21.675Z");
                                                value = 3154.28;
                                            }}),
                                        }};
                                        modelName = "omnis";
                                        modelVersion = "nemo";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            SendHeartbeatResponse res = sdk.sdk.sendHeartbeat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
