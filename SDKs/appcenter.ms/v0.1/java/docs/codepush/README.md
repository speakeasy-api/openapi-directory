# codepush

### Available Operations

* [codePushAcquisitionGetAcquisitionStatus](#codepushacquisitiongetacquisitionstatus) - Returns the acquisition service status to the caller
* [codePushAcquisitionUpdateCheck](#codepushacquisitionupdatecheck) - Check for updates
* [codePushAcquisitionUpdateDeployStatus](#codepushacquisitionupdatedeploystatus) - Report Deployment status metric
* [codePushAcquisitionUpdateDownloadStatus](#codepushacquisitionupdatedownloadstatus) - Report download of specified release
* [codePushDeploymentMetricsGet](#codepushdeploymentmetricsget) - Gets all releases metrics for specified Deployment
* [codePushDeploymentReleaseRollback](#codepushdeploymentreleaserollback) - Rollback the latest or a specific release for an app deployment
* [codePushDeploymentReleasesCreate](#codepushdeploymentreleasescreate) - Create a new CodePush release for the specified deployment
* [codePushDeploymentReleasesDelete](#codepushdeploymentreleasesdelete) - Clears a Deployment of releases
* [codePushDeploymentReleasesGet](#codepushdeploymentreleasesget) - Gets the history of releases on a Deployment
* [codePushDeploymentUploadCreate](#codepushdeploymentuploadcreate) - Create a new CodePush release upload for the specified deployment
* [codePushDeploymentsCreate](#codepushdeploymentscreate) - Creates a CodePush Deployment for the given app
* [codePushDeploymentsDelete](#codepushdeploymentsdelete) - Deletes a CodePush Deployment for the given app
* [codePushDeploymentsGet](#codepushdeploymentsget) - Gets a CodePush Deployment for the given app
* [codePushDeploymentsList](#codepushdeploymentslist) - Gets a list of CodePush deployments for the given app
* [codePushDeploymentsPromote](#codepushdeploymentspromote) - Promote one release (default latest one) from one deployment to another
* [codePushDeploymentsUpdate](#codepushdeploymentsupdate) - Modifies a CodePush Deployment for the given app
* [deploymentReleasesUpdate](#deploymentreleasesupdate) - Modifies a CodePush release metadata under the given Deployment
* [legacyCodePushAcquisitionUpdateCheck](#legacycodepushacquisitionupdatecheck) - Check for updates
* [legacyCodePushAcquisitionUpdateDownloadStatus](#legacycodepushacquisitionupdatedownloadstatus) - Report download of specified release
* [legacyCodePushAcquisitionUpdateInstallsStatus](#legacycodepushacquisitionupdateinstallsstatus) - Report deploy of specified release

## codePushAcquisitionGetAcquisitionStatus

Returns the acquisition service status to the caller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushAcquisitionGetAcquisitionStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushAcquisitionGetAcquisitionStatusResponse res = sdk.codepush.codePushAcquisitionGetAcquisitionStatus();

            if (res.codePushAcquisitionGetAcquisitionStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushAcquisitionUpdateCheck

Check for updates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushAcquisitionUpdateCheckRequest;
import org.openapis.openapi.models.operations.CodePushAcquisitionUpdateCheckResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushAcquisitionUpdateCheckRequest req = new CodePushAcquisitionUpdateCheckRequest("laborum", "placeat") {{
                clientUniqueId = "modi";
                isCompanion = false;
                label = "voluptatibus";
                packageHash = "molestias";
                previousDeploymentKey = "officiis";
                previousLabelOrAppVersion = "sapiente";
            }};            

            CodePushAcquisitionUpdateCheckResponse res = sdk.codepush.codePushAcquisitionUpdateCheck(req);

            if (res.codePushAcquisitionUpdateCheck200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushAcquisitionUpdateDeployStatus

Report Deployment status metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushAcquisitionUpdateDeployStatusRequestBody;
import org.openapis.openapi.models.operations.CodePushAcquisitionUpdateDeployStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushAcquisitionUpdateDeployStatusRequestBody req = new CodePushAcquisitionUpdateDeployStatusRequestBody("cumque") {{
                appVersion = "vitae";
                clientUniqueId = "rerum";
                label = "tempora";
                previousDeploymentKey = "quis";
                previousLabelOrAppVersion = "inventore";
                status = "fugit";
            }};            

            CodePushAcquisitionUpdateDeployStatusResponse res = sdk.codepush.codePushAcquisitionUpdateDeployStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushAcquisitionUpdateDownloadStatus

Report download of specified release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushAcquisitionUpdateDownloadStatusRequestBody;
import org.openapis.openapi.models.operations.CodePushAcquisitionUpdateDownloadStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushAcquisitionUpdateDownloadStatusRequestBody req = new CodePushAcquisitionUpdateDownloadStatusRequestBody("cumque") {{
                appVersion = "quae";
                clientUniqueId = "perferendis";
                label = "velit";
                previousDeploymentKey = "aspernatur";
                previousLabelOrAppVersion = "eum";
                status = "eius";
            }};            

            CodePushAcquisitionUpdateDownloadStatusResponse res = sdk.codepush.codePushAcquisitionUpdateDownloadStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentMetricsGet

Gets all releases metrics for specified Deployment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentMetricsGetRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentMetricsGetResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentMetricsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentMetricsGetRequest req = new CodePushDeploymentMetricsGetRequest("rem", "at", "impedit");            

            CodePushDeploymentMetricsGetResponse res = sdk.codepush.codePushDeploymentMetricsGet(req, new CodePushDeploymentMetricsGetSecurity("eos") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentMetricsGet200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentReleaseRollback

Rollback the latest or a specific release for an app deployment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentReleaseRollbackRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentReleaseRollbackRequestBody;
import org.openapis.openapi.models.operations.CodePushDeploymentReleaseRollbackResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentReleaseRollbackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentReleaseRollbackRequest req = new CodePushDeploymentReleaseRollbackRequest("sapiente", "eum", "dicta") {{
                requestBody = new CodePushDeploymentReleaseRollbackRequestBody() {{
                    label = "minima";
                }};;
            }};            

            CodePushDeploymentReleaseRollbackResponse res = sdk.codepush.codePushDeploymentReleaseRollback(req, new CodePushDeploymentReleaseRollbackSecurity("beatae") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentReleaseRollback201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentReleasesCreate

Create a new CodePush release for the specified deployment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesCreateRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesCreateRequestBody;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesCreateRequestBodyReleaseUpload;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesCreateResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentReleasesCreateRequest req = new CodePushDeploymentReleasesCreateRequest(                new CodePushDeploymentReleasesCreateRequestBody(                new CodePushDeploymentReleasesCreateRequestBodyReleaseUpload("99ebfd0e-9fe6-4c63-aca3-aed011799631", "magni", "doloribus");, "nulla") {{
                                deploymentName = "necessitatibus";
                                description = "ipsa";
                                disabled = false;
                                mandatory = false;
                                noDuplicateReleaseError = false;
                                rollout = 271113L;
                            }};, "nihil", "molestiae", "dicta");            

            CodePushDeploymentReleasesCreateResponse res = sdk.codepush.codePushDeploymentReleasesCreate(req, new CodePushDeploymentReleasesCreateSecurity("iusto") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentReleasesCreate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentReleasesDelete

Clears a Deployment of releases

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesDeleteRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesDeleteResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentReleasesDeleteRequest req = new CodePushDeploymentReleasesDeleteRequest("esse", "praesentium", "maiores");            

            CodePushDeploymentReleasesDeleteResponse res = sdk.codepush.codePushDeploymentReleasesDelete(req, new CodePushDeploymentReleasesDeleteSecurity("reiciendis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentReleasesGet

Gets the history of releases on a Deployment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesGetRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesGetResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentReleasesGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentReleasesGetRequest req = new CodePushDeploymentReleasesGetRequest("vel", "architecto", "fugiat");            

            CodePushDeploymentReleasesGetResponse res = sdk.codepush.codePushDeploymentReleasesGet(req, new CodePushDeploymentReleasesGetSecurity("doloremque") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentReleasesGet200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentUploadCreate

Create a new CodePush release upload for the specified deployment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentUploadCreateRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentUploadCreateResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentUploadCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentUploadCreateRequest req = new CodePushDeploymentUploadCreateRequest("dicta", "odio", "tempora");            

            CodePushDeploymentUploadCreateResponse res = sdk.codepush.codePushDeploymentUploadCreate(req, new CodePushDeploymentUploadCreateSecurity("esse") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentUploadCreate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentsCreate

Creates a CodePush Deployment for the given app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentsCreateRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentsCreateRequestBody;
import org.openapis.openapi.models.operations.CodePushDeploymentsCreateRequestBodyLatestRelease;
import org.openapis.openapi.models.operations.CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap;
import org.openapis.openapi.models.operations.CodePushDeploymentsCreateRequestBodyLatestReleaseReleaseMethodEnum;
import org.openapis.openapi.models.operations.CodePushDeploymentsCreateResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentsCreateRequest req = new CodePushDeploymentsCreateRequest(                new CodePushDeploymentsCreateRequestBody("ex") {{
                                key = "consectetur";
                                latestRelease = new CodePushDeploymentsCreateRequestBodyLatestRelease() {{
                                    blobUrl = "aliquid";
                                    description = "ipsa";
                                    diffPackageMap = new java.util.HashMap<String, org.openapis.openapi.models.operations.CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap>() {{
                                        put("sunt", new CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap(7137.67, "aliquid") {{
                                            size = 3447.18;
                                            url = "fugiat";
                                        }});
                                        put("officia", new CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap(219.73, "eum") {{
                                            size = 3813.97;
                                            url = "aliquid";
                                        }});
                                        put("voluptas", new CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap(700.42, "error") {{
                                            size = 6145.28;
                                            url = "id";
                                        }});
                                    }};
                                    isDisabled = false;
                                    isMandatory = false;
                                    label = "possimus";
                                    originalDeployment = "voluptates";
                                    originalLabel = "mollitia";
                                    packageHash = "laborum";
                                    releaseMethod = CodePushDeploymentsCreateRequestBodyLatestReleaseReleaseMethodEnum.ROLLBACK;
                                    releasedBy = "ad";
                                    rollout = 536923L;
                                    size = 3162.2;
                                    targetBinaryRange = "vitae";
                                    uploadTime = 833316L;
                                }};;
                            }};, "ex", "quo");            

            CodePushDeploymentsCreateResponse res = sdk.codepush.codePushDeploymentsCreate(req, new CodePushDeploymentsCreateSecurity("ex") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentsCreate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentsDelete

Deletes a CodePush Deployment for the given app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentsDeleteRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentsDeleteResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentsDeleteRequest req = new CodePushDeploymentsDeleteRequest("ut", "ad", "expedita") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("molestias", "cum");
                }};
            }};            

            CodePushDeploymentsDeleteResponse res = sdk.codepush.codePushDeploymentsDelete(req, new CodePushDeploymentsDeleteSecurity("aliquid") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentsGet

Gets a CodePush Deployment for the given app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentsGetRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentsGetResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentsGetRequest req = new CodePushDeploymentsGetRequest("beatae", "voluptatum", "omnis");            

            CodePushDeploymentsGetResponse res = sdk.codepush.codePushDeploymentsGet(req, new CodePushDeploymentsGetSecurity("veritatis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentsList

Gets a list of CodePush deployments for the given app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentsListRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentsListResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentsListRequest req = new CodePushDeploymentsListRequest("rerum", "est");            

            CodePushDeploymentsListResponse res = sdk.codepush.codePushDeploymentsList(req, new CodePushDeploymentsListSecurity("culpa") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentsList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentsPromote

Promote one release (default latest one) from one deployment to another

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentsPromoteRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentsPromoteRequestBody;
import org.openapis.openapi.models.operations.CodePushDeploymentsPromoteResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentsPromoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentsPromoteRequest req = new CodePushDeploymentsPromoteRequest("voluptatem", "sapiente", "officiis", "architecto") {{
                requestBody = new CodePushDeploymentsPromoteRequestBody() {{
                    description = "fuga";
                    isDisabled = false;
                    isMandatory = false;
                    label = "pariatur";
                    rollout = 891315L;
                    targetBinaryRange = "voluptatem";
                }};;
            }};            

            CodePushDeploymentsPromoteResponse res = sdk.codepush.codePushDeploymentsPromote(req, new CodePushDeploymentsPromoteSecurity("alias") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.codePushDeploymentsPromote200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codePushDeploymentsUpdate

Modifies a CodePush Deployment for the given app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodePushDeploymentsUpdateRequest;
import org.openapis.openapi.models.operations.CodePushDeploymentsUpdateRequestBody;
import org.openapis.openapi.models.operations.CodePushDeploymentsUpdateResponse;
import org.openapis.openapi.models.operations.CodePushDeploymentsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodePushDeploymentsUpdateRequest req = new CodePushDeploymentsUpdateRequest(                new CodePushDeploymentsUpdateRequestBody("deleniti");, "earum", "ex", "sapiente");            

            CodePushDeploymentsUpdateResponse res = sdk.codepush.codePushDeploymentsUpdate(req, new CodePushDeploymentsUpdateSecurity("rem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deploymentReleasesUpdate

Modifies a CodePush release metadata under the given Deployment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploymentReleasesUpdateRequest;
import org.openapis.openapi.models.operations.DeploymentReleasesUpdateRequestBody;
import org.openapis.openapi.models.operations.DeploymentReleasesUpdateResponse;
import org.openapis.openapi.models.operations.DeploymentReleasesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeploymentReleasesUpdateRequest req = new DeploymentReleasesUpdateRequest(                new DeploymentReleasesUpdateRequestBody() {{
                                description = "minus";
                                isDisabled = false;
                                isMandatory = false;
                                rollout = 365100L;
                                targetBinaryRange = "asperiores";
                            }};, "ratione", "ullam", "perferendis", "illum");            

            DeploymentReleasesUpdateResponse res = sdk.codepush.deploymentReleasesUpdate(req, new DeploymentReleasesUpdateSecurity("totam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.deploymentReleasesUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyCodePushAcquisitionUpdateCheck

Check for updates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateCheckRequest;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateCheckResponse;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateCheckSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LegacyCodePushAcquisitionUpdateCheckRequest req = new LegacyCodePushAcquisitionUpdateCheckRequest() {{
                appVersion = "impedit";
                clientUniqueId = "quibusdam";
                deploymentKey = "nam";
                isCompanion = "ipsam";
                label = "culpa";
                packageHash = "dolor";
            }};            

            LegacyCodePushAcquisitionUpdateCheckResponse res = sdk.codepush.legacyCodePushAcquisitionUpdateCheck(req, new LegacyCodePushAcquisitionUpdateCheckSecurity("aliquam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.legacyCodePushAcquisitionUpdateCheck200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyCodePushAcquisitionUpdateDownloadStatus

Report download of specified release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateDownloadStatusRequestBody;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateDownloadStatusResponse;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateDownloadStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LegacyCodePushAcquisitionUpdateDownloadStatusRequestBody req = new LegacyCodePushAcquisitionUpdateDownloadStatusRequestBody() {{
                appVersion = "inventore";
                clientUniqueId = "deleniti";
                deploymentKey = "veritatis";
                label = "tempora";
                previousDeploymentKey = "dolor";
                previousLabelOrAppVersion = "consequatur";
                status = "architecto";
            }};            

            LegacyCodePushAcquisitionUpdateDownloadStatusResponse res = sdk.codepush.legacyCodePushAcquisitionUpdateDownloadStatus(req, new LegacyCodePushAcquisitionUpdateDownloadStatusSecurity("sit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyCodePushAcquisitionUpdateInstallsStatus

Report deploy of specified release

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateInstallsStatusRequestBody;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateInstallsStatusResponse;
import org.openapis.openapi.models.operations.LegacyCodePushAcquisitionUpdateInstallsStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LegacyCodePushAcquisitionUpdateInstallsStatusRequestBody req = new LegacyCodePushAcquisitionUpdateInstallsStatusRequestBody() {{
                appVersion = "modi";
                clientUniqueId = "fugit";
                deploymentKey = "ab";
                label = "laudantium";
                previousDeploymentKey = "quae";
                previousLabelOrAppVersion = "dolor";
                status = "fugiat";
            }};            

            LegacyCodePushAcquisitionUpdateInstallsStatusResponse res = sdk.codepush.legacyCodePushAcquisitionUpdateInstallsStatus(req, new LegacyCodePushAcquisitionUpdateInstallsStatusSecurity("ipsam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
