# legalEntities

### Available Operations

* [getLegalEntitiesId](#getlegalentitiesid) - Get a legal entity
* [patchLegalEntitiesId](#patchlegalentitiesid) - Update a legal entity
* [postLegalEntities](#postlegalentities) - Create a legal entity

## getLegalEntitiesId

Returns a legal entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdRequest;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdResponse;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLegalEntitiesIdRequest req = new GetLegalEntitiesIdRequest("pariatur");            

            GetLegalEntitiesIdResponse res = sdk.legalEntities.getLegalEntitiesId(req, new GetLegalEntitiesIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.legalEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchLegalEntitiesId

Updates a legal entity.

 >To change the legal entity type, include only the new `type` in your request. To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchLegalEntitiesIdRequest;
import org.openapis.openapi.models.operations.PatchLegalEntitiesIdResponse;
import org.openapis.openapi.models.operations.PatchLegalEntitiesIdSecurity;
import org.openapis.openapi.models.shared.Address3;
import org.openapis.openapi.models.shared.BirthData;
import org.openapis.openapi.models.shared.IdentificationData;
import org.openapis.openapi.models.shared.IdentificationDataTypeEnum;
import org.openapis.openapi.models.shared.IndividualInput;
import org.openapis.openapi.models.shared.LegalEntityAssociationInput;
import org.openapis.openapi.models.shared.LegalEntityAssociationTypeEnum;
import org.openapis.openapi.models.shared.LegalEntityInfoInput;
import org.openapis.openapi.models.shared.LegalEntityInfoTypeEnum;
import org.openapis.openapi.models.shared.Name3;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.OrganizationTaxIdAbsenceReasonEnum;
import org.openapis.openapi.models.shared.OrganizationTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber2;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StockData;
import org.openapis.openapi.models.shared.WebDataInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchLegalEntitiesIdRequest req = new PatchLegalEntitiesIdRequest("accusantium") {{
                legalEntityInfoInput = new LegalEntityInfoInput() {{
                    entityAssociations = new org.openapis.openapi.models.shared.LegalEntityAssociationInput[]{{
                        add(new LegalEntityAssociationInput("illum", LegalEntityAssociationTypeEnum.UBO_THROUGH_OWNERSHIP) {{
                            jobTitle = "Central Communications Officer";
                            legalEntityId = "sunt";
                            type = LegalEntityAssociationTypeEnum.UBO_THROUGH_OWNERSHIP;
                        }}),
                    }};
                    individual = new IndividualInput(                new Name3("maxime", "ea") {{
                                        infix = "excepturi";
                                    }};,                 new Address3("odit") {{
                                        city = "Alexanneton";
                                        postalCode = "63447-0839";
                                        stateOrProvince = "perferendis";
                                        street = "207 Tyreek Ridges";
                                        street2 = "nobis";
                                    }};) {{
                        birthData = new BirthData() {{
                            dateOfBirth = "dolores";
                        }};;
                        email = "Jovani33@yahoo.com";
                        identificationData = new IdentificationData(IdentificationDataTypeEnum.IDENTITY_CARD) {{
                            cardNumber = "eos";
                            expiryDate = "perferendis";
                            issuerCountry = "dolores";
                            issuerState = "minus";
                            nationalIdExempt = false;
                            number = "quam";
                        }};;
                        nationality = "dolor";
                        phone = new PhoneNumber2("vero", "nostrum") {{
                            countryCode = "VA";
                        }};;
                        webData = new WebDataInput() {{
                            webAddress = "recusandae";
                        }};;
                    }};;
                    organization = new OrganizationInput("omnis",                 new Address3("facilis") {{
                                        city = "Alexandriafield";
                                        postalCode = "56056";
                                        stateOrProvince = "adipisci";
                                        street = "926 Leuschke Throughway";
                                        street2 = "provident";
                                    }};) {{
                        description = "nobis";
                        doingBusinessAs = "libero";
                        email = "Elvis.Luettgen@hotmail.com";
                        phone = new PhoneNumber2("dolorem", "dolor") {{
                            countryCode = "CM";
                        }};;
                        principalPlaceOfBusiness = new Address3("ipsum") {{
                            city = "Missoula";
                            postalCode = "44926-2000";
                            stateOrProvince = "iure";
                            street = "3869 Liam Dam";
                            street2 = "atque";
                        }};;
                        registrationNumber = "sit";
                        stockData = new StockData() {{
                            marketIdentifier = "fugiat";
                            stockNumber = "ab";
                            tickerSymbol = "soluta";
                        }};;
                        taxExempt = false;
                        taxId = "dolorum";
                        taxIdAbsenceReason = OrganizationTaxIdAbsenceReasonEnum.INDUSTRY_EXEMPTION;
                        type = OrganizationTypeEnum.LISTED_PUBLIC_COMPANY;
                        webData = new WebDataInput() {{
                            webAddress = "dolorum";
                        }};;
                    }};;
                    reference = "deleniti";
                    type = LegalEntityInfoTypeEnum.ORGANIZATION;
                }};;
            }};            

            PatchLegalEntitiesIdResponse res = sdk.legalEntities.patchLegalEntitiesId(req, new PatchLegalEntitiesIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.legalEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLegalEntities

Creates a legal entity. 

This resource contains information about the user that will be onboarded in your platform. Adyen uses this information to perform verification checks as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses. 



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLegalEntitiesResponse;
import org.openapis.openapi.models.operations.PostLegalEntitiesSecurity;
import org.openapis.openapi.models.shared.Address3;
import org.openapis.openapi.models.shared.BirthData;
import org.openapis.openapi.models.shared.IdentificationData;
import org.openapis.openapi.models.shared.IdentificationDataTypeEnum;
import org.openapis.openapi.models.shared.IndividualInput;
import org.openapis.openapi.models.shared.LegalEntityAssociationInput;
import org.openapis.openapi.models.shared.LegalEntityAssociationTypeEnum;
import org.openapis.openapi.models.shared.LegalEntityInfoRequiredTypeInput;
import org.openapis.openapi.models.shared.LegalEntityInfoRequiredTypeTypeEnum;
import org.openapis.openapi.models.shared.Name3;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.OrganizationTaxIdAbsenceReasonEnum;
import org.openapis.openapi.models.shared.OrganizationTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber2;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StockData;
import org.openapis.openapi.models.shared.WebDataInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LegalEntityInfoRequiredTypeInput req = new LegalEntityInfoRequiredTypeInput(LegalEntityInfoRequiredTypeTypeEnum.ORGANIZATION) {{
                entityAssociations = new org.openapis.openapi.models.shared.LegalEntityAssociationInput[]{{
                    add(new LegalEntityAssociationInput("saepe", LegalEntityAssociationTypeEnum.SIGNATORY) {{
                        jobTitle = "Principal Applications Manager";
                        legalEntityId = "voluptate";
                        type = LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL;
                    }}),
                    add(new LegalEntityAssociationInput("ad", LegalEntityAssociationTypeEnum.UBO_THROUGH_OWNERSHIP) {{
                        jobTitle = "Direct Solutions Manager";
                        legalEntityId = "optio";
                        type = LegalEntityAssociationTypeEnum.UBO_THROUGH_OWNERSHIP;
                    }}),
                    add(new LegalEntityAssociationInput("totam", LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL) {{
                        jobTitle = "Regional Web Planner";
                        legalEntityId = "minima";
                        type = LegalEntityAssociationTypeEnum.UBO_THROUGH_OWNERSHIP;
                    }}),
                }};
                individual = new IndividualInput(                new Name3("alias", "at") {{
                                    infix = "quaerat";
                                }};,                 new Address3("tempora") {{
                                    city = "Pierreside";
                                    postalCode = "69464";
                                    stateOrProvince = "ipsum";
                                    street = "927 Funk Gardens";
                                    street2 = "dolorem";
                                }};) {{
                    birthData = new BirthData() {{
                        dateOfBirth = "sapiente";
                    }};;
                    email = "Jannie.Balistreri15@yahoo.com";
                    identificationData = new IdentificationData(IdentificationDataTypeEnum.PASSPORT) {{
                        cardNumber = "libero";
                        expiryDate = "voluptas";
                        issuerCountry = "deserunt";
                        issuerState = "quam";
                        nationalIdExempt = false;
                        number = "ipsum";
                    }};;
                    nationality = "incidunt";
                    phone = new PhoneNumber2("qui", "cupiditate") {{
                        countryCode = "SK";
                    }};;
                    webData = new WebDataInput() {{
                        webAddress = "pariatur";
                    }};;
                }};;
                organization = new OrganizationInput("soluta",                 new Address3("dicta") {{
                                    city = "Larsonboro";
                                    postalCode = "17734";
                                    stateOrProvince = "molestias";
                                    street = "121 Jefferey Court";
                                    street2 = "ullam";
                                }};) {{
                    description = "nam";
                    doingBusinessAs = "hic";
                    email = "Nova.Rogahn90@gmail.com";
                    phone = new PhoneNumber2("ipsum", "veritatis") {{
                        countryCode = "QA";
                    }};;
                    principalPlaceOfBusiness = new Address3("quos") {{
                        city = "McDermottton";
                        postalCode = "22226-1005";
                        stateOrProvince = "itaque";
                        street = "68792 McGlynn Dam";
                        street2 = "quae";
                    }};;
                    registrationNumber = "laudantium";
                    stockData = new StockData() {{
                        marketIdentifier = "odio";
                        stockNumber = "occaecati";
                        tickerSymbol = "voluptatibus";
                    }};;
                    taxExempt = false;
                    taxId = "quisquam";
                    taxIdAbsenceReason = OrganizationTaxIdAbsenceReasonEnum.BELOW_TAX_THRESHOLD;
                    type = OrganizationTypeEnum.NON_PROFIT;
                    webData = new WebDataInput() {{
                        webAddress = "quis";
                    }};;
                }};;
                reference = "ipsum";
            }};            

            PostLegalEntitiesResponse res = sdk.legalEntities.postLegalEntities(req, new PostLegalEntitiesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.legalEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
