# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/gamesparks/>
### Available Operations

* [createGame](#creategame) -  Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 
* [createSnapshot](#createsnapshot) - Creates a snapshot of the game configuration.
* [createStage](#createstage) - Creates a new stage for stage-by-stage game development and deployment.
* [deleteGame](#deletegame) - Deletes a game.
* [deleteStage](#deletestage) - Deletes a stage from a game, along with the associated game runtime.
* [disconnectPlayer](#disconnectplayer) - <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
* [exportSnapshot](#exportsnapshot) - Exports a game configuration snapshot.
* [getExtension](#getextension) - Gets details about a specified extension.
* [getExtensionVersion](#getextensionversion) - Gets details about a specified extension version.
* [getGame](#getgame) - Gets details about a game.
* [getGameConfiguration](#getgameconfiguration) - Gets the configuration of the game.
* [getGeneratedCodeJob](#getgeneratedcodejob) - Gets details about a job that is generating code for a snapshot.
* [getPlayerConnectionStatus](#getplayerconnectionstatus) - <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
* [getSnapshot](#getsnapshot) - Gets a copy of the game configuration in a snapshot.
* [getStage](#getstage) - Gets information about a stage.
* [getStageDeployment](#getstagedeployment) - Gets information about a stage deployment.
* [importGameConfiguration](#importgameconfiguration) - <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
* [listExtensionVersions](#listextensionversions) - <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
* [listExtensions](#listextensions) - <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
* [listGames](#listgames) - Gets a paginated list of games.
* [listGeneratedCodeJobs](#listgeneratedcodejobs) - Gets a paginated list of code generation jobs for a snapshot.
* [listSnapshots](#listsnapshots) - Gets a paginated list of snapshot summaries from the game.
* [listStageDeployments](#liststagedeployments) - Gets a paginated list of stage deployment summaries from the game.
* [listStages](#liststages) - Gets a paginated list of stage summaries from the game.
* [listTagsForResource](#listtagsforresource) - Lists the tags associated with a GameSparks resource.
* [startGeneratedCodeJob](#startgeneratedcodejob) -  Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 
* [startStageDeployment](#startstagedeployment) - <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
* [tagResource](#tagresource) - Adds tags to a GameSparks resource.
* [untagResource](#untagresource) - Removes tags from a GameSparks resource.
* [updateGame](#updategame) - Updates details of the game.
* [updateGameConfiguration](#updategameconfiguration) - Updates one or more sections of the game configuration.
* [updateSnapshot](#updatesnapshot) - Updates the metadata of a GameSparks snapshot.
* [updateStage](#updatestage) - Updates the metadata of a stage.

## createGame

 Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGameRequest;
import org.openapis.openapi.models.operations.CreateGameRequestBody;
import org.openapis.openapi.models.operations.CreateGameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGameRequest req = new CreateGameRequest(                new CreateGameRequestBody("molestiae") {{
                                clientToken = "minus";
                                description = "placeat";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("iusto", "excepturi");
                                    put("nisi", "recusandae");
                                    put("temporibus", "ab");
                                }};
                            }};) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            CreateGameResponse res = sdk.sdk.createGame(req);

            if (res.createGameResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSnapshot

Creates a snapshot of the game configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSnapshotRequest;
import org.openapis.openapi.models.operations.CreateSnapshotRequestBody;
import org.openapis.openapi.models.operations.CreateSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSnapshotRequest req = new CreateSnapshotRequest("odit",                 new CreateSnapshotRequestBody() {{
                                description = "at";
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            CreateSnapshotResponse res = sdk.sdk.createSnapshot(req);

            if (res.createSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStage

Creates a new stage for stage-by-stage game development and deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStageRequest;
import org.openapis.openapi.models.operations.CreateStageRequestBody;
import org.openapis.openapi.models.operations.CreateStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStageRequest req = new CreateStageRequest("dolorum",                 new CreateStageRequestBody("dicta", "nam") {{
                                clientToken = "officia";
                                description = "occaecati";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "hic");
                                }};
                            }};) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            CreateStageResponse res = sdk.sdk.createStage(req);

            if (res.createStageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGame

Deletes a game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGameRequest;
import org.openapis.openapi.models.operations.DeleteGameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGameRequest req = new DeleteGameRequest("cum") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            DeleteGameResponse res = sdk.sdk.deleteGame(req);

            if (res.deleteGameResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStage

Deletes a stage from a game, along with the associated game runtime.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStageRequest;
import org.openapis.openapi.models.operations.DeleteStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStageRequest req = new DeleteStageRequest("iste", "dolor") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            DeleteStageResponse res = sdk.sdk.deleteStage(req);

            if (res.deleteStageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectPlayer

<p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectPlayerRequest;
import org.openapis.openapi.models.operations.DisconnectPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectPlayerRequest req = new DisconnectPlayerRequest("iure", "saepe", "quidem") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            DisconnectPlayerResponse res = sdk.sdk.disconnectPlayer(req);

            if (res.disconnectPlayerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSnapshot

Exports a game configuration snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSnapshotRequest;
import org.openapis.openapi.models.operations.ExportSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportSnapshotRequest req = new ExportSnapshotRequest("corporis", "explicabo") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            ExportSnapshotResponse res = sdk.sdk.exportSnapshot(req);

            if (res.exportSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExtension

Gets details about a specified extension.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExtensionRequest;
import org.openapis.openapi.models.operations.GetExtensionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExtensionRequest req = new GetExtensionRequest("culpa", "doloribus") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            GetExtensionResponse res = sdk.sdk.getExtension(req);

            if (res.getExtensionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExtensionVersion

Gets details about a specified extension version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExtensionVersionRequest;
import org.openapis.openapi.models.operations.GetExtensionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExtensionVersionRequest req = new GetExtensionVersionRequest("occaecati", "numquam", "commodi") {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            GetExtensionVersionResponse res = sdk.sdk.getExtensionVersion(req);

            if (res.getExtensionVersionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGame

Gets details about a game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGameRequest;
import org.openapis.openapi.models.operations.GetGameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGameRequest req = new GetGameRequest("animi") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            GetGameResponse res = sdk.sdk.getGame(req);

            if (res.getGameResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGameConfiguration

Gets the configuration of the game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGameConfigurationRequest;
import org.openapis.openapi.models.operations.GetGameConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGameConfigurationRequest req = new GetGameConfigurationRequest("aut") {{
                sections = new String[]{{
                    add("error"),
                }};
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            GetGameConfigurationResponse res = sdk.sdk.getGameConfiguration(req);

            if (res.getGameConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneratedCodeJob

Gets details about a job that is generating code for a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeneratedCodeJobRequest;
import org.openapis.openapi.models.operations.GetGeneratedCodeJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGeneratedCodeJobRequest req = new GetGeneratedCodeJobRequest("voluptatibus", "ipsa", "omnis") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
            }};            

            GetGeneratedCodeJobResponse res = sdk.sdk.getGeneratedCodeJob(req);

            if (res.getGeneratedCodeJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlayerConnectionStatus

<p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayerConnectionStatusRequest;
import org.openapis.openapi.models.operations.GetPlayerConnectionStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayerConnectionStatusRequest req = new GetPlayerConnectionStatusRequest("corporis", "dolore", "iusto") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            GetPlayerConnectionStatusResponse res = sdk.sdk.getPlayerConnectionStatus(req);

            if (res.getPlayerConnectionStatusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnapshot

Gets a copy of the game configuration in a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnapshotRequest;
import org.openapis.openapi.models.operations.GetSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSnapshotRequest req = new GetSnapshotRequest("quidem", "molestias") {{
                sections = new String[]{{
                    add("pariatur"),
                    add("modi"),
                    add("praesentium"),
                }};
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            GetSnapshotResponse res = sdk.sdk.getSnapshot(req);

            if (res.getSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStage

Gets information about a stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStageRequest;
import org.openapis.openapi.models.operations.GetStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStageRequest req = new GetStageRequest("enim", "consequatur") {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
            }};            

            GetStageResponse res = sdk.sdk.getStage(req);

            if (res.getStageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStageDeployment

Gets information about a stage deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStageDeploymentRequest;
import org.openapis.openapi.models.operations.GetStageDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStageDeploymentRequest req = new GetStageDeploymentRequest("qui", "aliquid") {{
                deploymentId = "cupiditate";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            GetStageDeploymentResponse res = sdk.sdk.getStageDeployment(req);

            if (res.getStageDeploymentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importGameConfiguration

<p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportGameConfigurationRequest;
import org.openapis.openapi.models.operations.ImportGameConfigurationRequestBody;
import org.openapis.openapi.models.operations.ImportGameConfigurationRequestBodyImportSource;
import org.openapis.openapi.models.operations.ImportGameConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportGameConfigurationRequest req = new ImportGameConfigurationRequest("excepturi",                 new ImportGameConfigurationRequestBody(                new ImportGameConfigurationRequestBodyImportSource() {{
                                                file = "tempora";
                                            }};);) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
            }};            

            ImportGameConfigurationResponse res = sdk.sdk.importGameConfiguration(req);

            if (res.importGameConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExtensionVersions

<p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExtensionVersionsRequest;
import org.openapis.openapi.models.operations.ListExtensionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExtensionVersionsRequest req = new ListExtensionVersionsRequest("aliquid", "provident") {{
                maxResults = 896039L;
                nextToken = "sint";
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "debitis";
                xAmzDate = "a";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "in";
                xAmzSignedHeaders = "in";
            }};            

            ListExtensionVersionsResponse res = sdk.sdk.listExtensionVersions(req);

            if (res.listExtensionVersionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExtensions

<p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExtensionsRequest;
import org.openapis.openapi.models.operations.ListExtensionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExtensionsRequest req = new ListExtensionsRequest() {{
                maxResults = 978571L;
                nextToken = "rerum";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
            }};            

            ListExtensionsResponse res = sdk.sdk.listExtensions(req);

            if (res.listExtensionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGames

Gets a paginated list of games.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGamesRequest;
import org.openapis.openapi.models.operations.ListGamesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGamesRequest req = new ListGamesRequest() {{
                maxResults = 249796L;
                nextToken = "occaecati";
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            ListGamesResponse res = sdk.sdk.listGames(req);

            if (res.listGamesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGeneratedCodeJobs

Gets a paginated list of code generation jobs for a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGeneratedCodeJobsRequest;
import org.openapis.openapi.models.operations.ListGeneratedCodeJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGeneratedCodeJobsRequest req = new ListGeneratedCodeJobsRequest("deleniti", "sapiente") {{
                maxResults = 230533L;
                nextToken = "deserunt";
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "vel";
                xAmzCredential = "natus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "nihil";
            }};            

            ListGeneratedCodeJobsResponse res = sdk.sdk.listGeneratedCodeJobs(req);

            if (res.listGeneratedCodeJobsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSnapshots

Gets a paginated list of snapshot summaries from the game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSnapshotsRequest;
import org.openapis.openapi.models.operations.ListSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSnapshotsRequest req = new ListSnapshotsRequest("distinctio") {{
                maxResults = 660174L;
                nextToken = "labore";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
            }};            

            ListSnapshotsResponse res = sdk.sdk.listSnapshots(req);

            if (res.listSnapshotsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStageDeployments

Gets a paginated list of stage deployment summaries from the game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStageDeploymentsRequest;
import org.openapis.openapi.models.operations.ListStageDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStageDeploymentsRequest req = new ListStageDeploymentsRequest("magnam", "et") {{
                maxResults = 569965L;
                nextToken = "ullam";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
            }};            

            ListStageDeploymentsResponse res = sdk.sdk.listStageDeployments(req);

            if (res.listStageDeploymentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStages

Gets a paginated list of stage summaries from the game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStagesRequest;
import org.openapis.openapi.models.operations.ListStagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStagesRequest req = new ListStagesRequest("eum") {{
                maxResults = 221262L;
                nextToken = "necessitatibus";
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quasi";
                xAmzDate = "iure";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "eius";
            }};            

            ListStagesResponse res = sdk.sdk.listStages(req);

            if (res.listStagesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags associated with a GameSparks resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("deleniti") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "in";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "expedita";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startGeneratedCodeJob

 Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartGeneratedCodeJobRequest;
import org.openapis.openapi.models.operations.StartGeneratedCodeJobRequestBody;
import org.openapis.openapi.models.operations.StartGeneratedCodeJobRequestBodyGenerator;
import org.openapis.openapi.models.operations.StartGeneratedCodeJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartGeneratedCodeJobRequest req = new StartGeneratedCodeJobRequest("repellat",                 new StartGeneratedCodeJobRequestBody(                new StartGeneratedCodeJobRequestBodyGenerator() {{
                                                gameSDKVersion = "quibusdam";
                                                language = "sed";
                                                targetPlatform = "saepe";
                                            }};);, "pariatur") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
            }};            

            StartGeneratedCodeJobResponse res = sdk.sdk.startGeneratedCodeJob(req);

            if (res.startGeneratedCodeJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startStageDeployment

<p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartStageDeploymentRequest;
import org.openapis.openapi.models.operations.StartStageDeploymentRequestBody;
import org.openapis.openapi.models.operations.StartStageDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartStageDeploymentRequest req = new StartStageDeploymentRequest("pariatur",                 new StartStageDeploymentRequestBody("maxime") {{
                                clientToken = "ea";
                            }};, "excepturi") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
            }};            

            StartStageDeploymentResponse res = sdk.sdk.startStageDeployment(req);

            if (res.startStageDeploymentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to a GameSparks resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("nam", "eaque");
                                                put("pariatur", "nemo");
                                            }});, "voluptatibus") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from a GameSparks resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("nobis",                 new String[]{{
                                add("quis"),
                            }}) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "eaque";
                xAmzDate = "quis";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "perferendis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGame

Updates details of the game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGameRequest;
import org.openapis.openapi.models.operations.UpdateGameRequestBody;
import org.openapis.openapi.models.operations.UpdateGameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGameRequest req = new UpdateGameRequest("minus",                 new UpdateGameRequestBody() {{
                                description = "quam";
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            UpdateGameResponse res = sdk.sdk.updateGame(req);

            if (res.updateGameResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGameConfiguration

Updates one or more sections of the game configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGameConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateGameConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateGameConfigurationResponse;
import org.openapis.openapi.models.shared.OperationEnum;
import org.openapis.openapi.models.shared.SectionModification;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGameConfigurationRequest req = new UpdateGameConfigurationRequest("voluptatem",                 new UpdateGameConfigurationRequestBody(                new org.openapis.openapi.models.shared.SectionModification[]{{
                                                add(new SectionModification(OperationEnum.ADD, "asperiores", "earum") {{
                                                    operation = OperationEnum.ADD;
                                                    path = "blanditiis";
                                                    section = "error";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("occaecati", "rerum");
                                                    }};
                                                }}),
                                                add(new SectionModification(OperationEnum.REMOVE, "aliquid", "dolorem") {{
                                                    operation = OperationEnum.ADD;
                                                    path = "iste";
                                                    section = "dolorum";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("pariatur", "provident");
                                                        put("nobis", "libero");
                                                        put("delectus", "quaerat");
                                                    }};
                                                }}),
                                                add(new SectionModification(OperationEnum.REPLACE, "voluptate", "dignissimos") {{
                                                    operation = OperationEnum.ADD;
                                                    path = "dolor";
                                                    section = "qui";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("hic", "excepturi");
                                                    }};
                                                }}),
                                                add(new SectionModification(OperationEnum.REMOVE, "quaerat", "accusamus") {{
                                                    operation = OperationEnum.REPLACE;
                                                    path = "amet";
                                                    section = "dolorum";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("veritatis", "ipsa");
                                                        put("ipsa", "iure");
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            UpdateGameConfigurationResponse res = sdk.sdk.updateGameConfiguration(req);

            if (res.updateGameConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSnapshot

Updates the metadata of a GameSparks snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSnapshotRequest;
import org.openapis.openapi.models.operations.UpdateSnapshotRequestBody;
import org.openapis.openapi.models.operations.UpdateSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSnapshotRequest req = new UpdateSnapshotRequest("ab",                 new UpdateSnapshotRequestBody() {{
                                description = "soluta";
                            }};, "dolorum") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "distinctio";
            }};            

            UpdateSnapshotResponse res = sdk.sdk.updateSnapshot(req);

            if (res.updateSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStage

Updates the metadata of a stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStageRequest;
import org.openapis.openapi.models.operations.UpdateStageRequestBody;
import org.openapis.openapi.models.operations.UpdateStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStageRequest req = new UpdateStageRequest("nihil",                 new UpdateStageRequestBody() {{
                                description = "ipsum";
                                role = "voluptate";
                            }};, "id") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            UpdateStageResponse res = sdk.sdk.updateStage(req);

            if (res.updateStageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
