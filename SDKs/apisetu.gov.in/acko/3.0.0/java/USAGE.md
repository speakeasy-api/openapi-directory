<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CripcSecurity;
import org.openapis.openapi.models.operations.CripcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CripcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CripcRequestBody;
import org.openapis.openapi.models.operations.CripcRequest;
import org.openapis.openapi.models.operations.CripcResponse;
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
import org.openapis.openapi.models.shared.SchemeAPIKey;
import org.openapis.openapi.models.shared.SchemeClientID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CripcRequest req = new CripcRequest() {{
                security = new CripcSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientID() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new CripcRequestBody() {{
                    certificateParameters = new CripcRequestBodyCertificateParameters() {{
                        phoneno = "10 Digits without any prefix";
                        policyno = "DXXXXXXXXXXXXX/XX OR AROGXXXXXXXXXX";
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
                }};
            }};            

            CripcResponse res = sdk.apIs.cripc(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->