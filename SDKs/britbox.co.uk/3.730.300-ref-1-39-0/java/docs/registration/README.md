# registration

### Available Operations

* [register](#register) - Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.


## register

Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterRequest;
import org.openapis.openapi.models.operations.RegisterResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.RegistrationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegisterRequest req = new RegisterRequest(                new RegistrationRequest("debitis", "consectetur") {{
                                firstName = "Florian";
                                languageCode = "harum";
                                lastName = "Howe";
                                marketing = false;
                                pin = "ipsa";
                                segments = new String[]{{
                                    add("libero"),
                                    add("vitae"),
                                    add("accusamus"),
                                    add("similique"),
                                }};
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "voluptas";
            }};            

            RegisterResponse res = sdk.registration.register(req);

            if (res.accessTokens != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
