# ssh

### Available Operations

* [getAllSshKeys](#getallsshkeys) - Overview of SSH keys

## getAllSshKeys

Overview of SSH keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllSshKeysRequest;
import org.openapis.openapi.models.operations.GetAllSshKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllSshKeysRequest req = new GetAllSshKeysRequest() {{
                skip = 584476;
                take = 45614;
            }};            

            GetAllSshKeysResponse res = sdk.ssh.getAllSshKeys(req);

            if (res.sshKeyDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
