# downloads

## Overview

Access the list of download links associated with the repository.

### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugDownloadsFilename](#deleterepositoriesworkspacereposlugdownloadsfilename) - Delete a download artifact
* [getRepositoriesWorkspaceRepoSlugDownloads](#getrepositoriesworkspacereposlugdownloads) - List download artifacts
* [getRepositoriesWorkspaceRepoSlugDownloadsFilename](#getrepositoriesworkspacereposlugdownloadsfilename) - Get a download artifact link
* [postRepositoriesWorkspaceRepoSlugDownloads](#postrepositoriesworkspacereposlugdownloads) - Upload a download artifact

## deleteRepositoriesWorkspaceRepoSlugDownloadsFilename

Deletes the specified download artifact from the repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest req = new DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest("molestiae", "perferendis", "nihil");            

            DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse res = sdk.downloads.deleteRepositoriesWorkspaceRepoSlugDownloadsFilename(req, new DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getRepositoriesWorkspaceRepoSlugDownloads

Returns a list of download links associated with the repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDownloadsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugDownloadsRequest req = new GetRepositoriesWorkspaceRepoSlugDownloadsRequest("magnam", "distinctio");            

            GetRepositoriesWorkspaceRepoSlugDownloadsResponse res = sdk.downloads.getRepositoriesWorkspaceRepoSlugDownloads(req, new GetRepositoriesWorkspaceRepoSlugDownloadsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getRepositoriesWorkspaceRepoSlugDownloadsFilename

Return a redirect to the contents of a download artifact.

This endpoint returns the actual file contents and not the artifact's
metadata.

    $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
    Hello World

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest req = new GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest("id", "labore", "labore");            

            GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse res = sdk.downloads.getRepositoriesWorkspaceRepoSlugDownloadsFilename(req, new GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## postRepositoriesWorkspaceRepoSlugDownloads

Upload new download artifacts.

To upload files, perform a `multipart/form-data` POST containing one
or more `files` fields:

    $ echo Hello World > hello.txt
    $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

When a file is uploaded with the same name as an existing artifact,
then the existing file will be replaced.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugDownloadsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugDownloadsRequest req = new PostRepositoriesWorkspaceRepoSlugDownloadsRequest("suscipit", "natus");            

            PostRepositoriesWorkspaceRepoSlugDownloadsResponse res = sdk.downloads.postRepositoriesWorkspaceRepoSlugDownloads(req, new PostRepositoriesWorkspaceRepoSlugDownloadsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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
