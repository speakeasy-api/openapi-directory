# pciQuestionnaires

### Available Operations

* [getLegalEntitiesIdPciQuestionnaires](#getlegalentitiesidpciquestionnaires) - Get PCI questionnaire details
* [getLegalEntitiesIdPciQuestionnairesPciid](#getlegalentitiesidpciquestionnairespciid) - Get PCI questionnaire
* [postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates](#postlegalentitiesidpciquestionnairesgeneratepcitemplates) - Generate PCI questionnaire
* [postLegalEntitiesIdPciQuestionnairesSignPciTemplates](#postlegalentitiesidpciquestionnairessignpcitemplates) - Sign PCI questionnaire

## getLegalEntitiesIdPciQuestionnaires

Get a list of signed PCI questionnaires.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdPciQuestionnairesRequest;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdPciQuestionnairesResponse;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdPciQuestionnairesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLegalEntitiesIdPciQuestionnairesRequest req = new GetLegalEntitiesIdPciQuestionnairesRequest("soluta");            

            GetLegalEntitiesIdPciQuestionnairesResponse res = sdk.pciQuestionnaires.getLegalEntitiesIdPciQuestionnaires(req, new GetLegalEntitiesIdPciQuestionnairesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getPciQuestionnaireInfosResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLegalEntitiesIdPciQuestionnairesPciid

Returns the signed PCI questionnaire.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdPciQuestionnairesPciidRequest;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdPciQuestionnairesPciidResponse;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdPciQuestionnairesPciidSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLegalEntitiesIdPciQuestionnairesPciidRequest req = new GetLegalEntitiesIdPciQuestionnairesPciidRequest("nobis", "et");            

            GetLegalEntitiesIdPciQuestionnairesPciidResponse res = sdk.pciQuestionnaires.getLegalEntitiesIdPciQuestionnairesPciid(req, new GetLegalEntitiesIdPciQuestionnairesPciidSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getPciQuestionnaireResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates

Generates the required PCI questionnaire based on the user's [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels). If multiple questionnaires are required, this request creates a single consodilated document to be signed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesResponse;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesSecurity;
import org.openapis.openapi.models.shared.GeneratePciDescriptionRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest req = new PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest("saepe") {{
                generatePciDescriptionRequest = new GeneratePciDescriptionRequest() {{
                    language = "ipsum";
                }};;
            }};            

            PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesResponse res = sdk.pciQuestionnaires.postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(req, new PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.generatePciDescriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLegalEntitiesIdPciQuestionnairesSignPciTemplates

Signs the required PCI questionnaire.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesResponse;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesSecurity;
import org.openapis.openapi.models.shared.PciSigningRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest req = new PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest("veritatis") {{
                pciSigningRequest = new PciSigningRequest(                new String[]{{
                                    add("quos"),
                                    add("tempore"),
                                    add("cupiditate"),
                                }}, "aperiam");;
            }};            

            PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesResponse res = sdk.pciQuestionnaires.postLegalEntitiesIdPciQuestionnairesSignPciTemplates(req, new PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pciSigningResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
