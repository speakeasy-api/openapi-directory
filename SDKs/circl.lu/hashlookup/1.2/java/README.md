# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetChildrenPathParams;
import org.openapis.openapi.models.operations.GetChildrenRequest;
import org.openapis.openapi.models.operations.GetChildrenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChildrenRequest req = new GetChildrenRequest() {{
                pathParams = new GetChildrenPathParams() {{
                    count = 548814;
                    cursor = "provident";
                    sha1 = "distinctio";
                }};
            }};            

            GetChildrenResponse res = sdk.default_.getChildren(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### default_

* `getChildren` - Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* `getInfo` - Info about the hashlookup database
* `getLookupMd5` - Lookup MD5.
* `getLookupSha1` - Lookup SHA-1.
* `getLookupSha256` - Lookup SHA-256.
* `getParents` - Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* `getSessionCreate` - Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
* `getSessionMatches` - Return set of matching and non-matching hashes from a session.
* `getStattop` - Return the top 100 of most queried values.
* `postBulkmd5` - Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
* `postBulksha1` - Bulk search of SHA1 hashes in a JSON array with the 'hashes'.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
