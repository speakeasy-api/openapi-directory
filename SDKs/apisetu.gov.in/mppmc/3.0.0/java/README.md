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

import org.openapis.openapi.models.operations.SocerSecurity;
import org.openapis.openapi.models.operations.SocerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SocerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SocerRequestBody;
import org.openapis.openapi.models.operations.SocerResponse;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentData;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentDataConsumer;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentDataProvider;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentPermissionDateRange;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentPermissionFrequency;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentPermission;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentPurpose;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentUser;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsent;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaSignature;
import org.openapis.openapi.models.shared.ConsentArtifactSchema;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocerRequestBody req = new SocerRequestBody() {{
                certificateParameters = new SocerRequestBodyCertificateParameters() {{
                    appno = "REG1307241";
                    dateOfBirth = "11-11-1990";
                    enrolno = "41C172C17OCT1203";
                    typOfCert = "Registration Certificate&#x28;PREGC&#x29;,Duplicate Registration Certificate&#x28;PDURC&#x29;,Good S";
                }};
                consentArtifact = new ConsentArtifactSchema() {{
                    consent = new ConsentArtifactSchemaConsent() {{
                        consentId = "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba";
                        data = new ConsentArtifactSchemaConsentData() {{
                            id = "corrupti";
                        }};
                        dataConsumer = new ConsentArtifactSchemaConsentDataConsumer() {{
                            id = "provident";
                        }};
                        dataProvider = new ConsentArtifactSchemaConsentDataProvider() {{
                            id = "distinctio";
                        }};
                        permission = new ConsentArtifactSchemaConsentPermission() {{
                            access = "quibusdam";
                            dateRange = new ConsentArtifactSchemaConsentPermissionDateRange() {{
                                from = "2021-04-14T16:47:33.722Z";
                                to = "2021-04-22T12:08:58.275Z";
                            }};
                            frequency = new ConsentArtifactSchemaConsentPermissionFrequency() {{
                                repeats = 4236.55;
                                unit = "error";
                                value = 6458.94;
                            }};
                        }};
                        purpose = new ConsentArtifactSchemaConsentPurpose() {{
                            description = "suscipit";
                        }};
                        timestamp = "2022-09-14T09:35:47.986Z";
                        user = new ConsentArtifactSchemaConsentUser() {{
                            email = "Anahi38@hotmail.com";
                            idNumber = "molestiae";
                            idType = "minus";
                            mobile = "645-598-0306 x03897";
                        }};
                    }};
                    signature = new ConsentArtifactSchemaSignature() {{
                        signature = "odit";
                    }};
                }};
                format = "pdf";
                txnId = "f7f1469c-29b0-4325-9dfc-c567200a70f7";
            }}            

            SocerResponse res = sdk.apIs.socer(req, new SocerSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apIs

* `socer` - Educational/ Exam Registration Certificate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
