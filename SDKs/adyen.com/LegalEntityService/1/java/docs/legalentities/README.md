# legalEntities

### Available Operations

* [getLegalEntitiesId](#getlegalentitiesid) - Get a legal entity
* [getLegalEntitiesIdBusinessLines](#getlegalentitiesidbusinesslines) - Get all business lines under a legal entity
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

            GetLegalEntitiesIdRequest req = new GetLegalEntitiesIdRequest("quidem");            

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

## getLegalEntitiesIdBusinessLines

Returns the business lines owned by a legal entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdBusinessLinesRequest;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdBusinessLinesResponse;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdBusinessLinesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLegalEntitiesIdBusinessLinesRequest req = new GetLegalEntitiesIdBusinessLinesRequest("architecto");            

            GetLegalEntitiesIdBusinessLinesResponse res = sdk.legalEntities.getLegalEntitiesIdBusinessLines(req, new GetLegalEntitiesIdBusinessLinesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.businessLines != null) {
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
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.BirthData;
import org.openapis.openapi.models.shared.IdentificationData;
import org.openapis.openapi.models.shared.IdentificationDataTypeEnum;
import org.openapis.openapi.models.shared.IndividualInput;
import org.openapis.openapi.models.shared.LegalEntityAssociationInput;
import org.openapis.openapi.models.shared.LegalEntityAssociationTypeEnum;
import org.openapis.openapi.models.shared.LegalEntityInfoInput;
import org.openapis.openapi.models.shared.LegalEntityInfoTypeEnum;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.OrganizationTaxIdAbsenceReasonEnum;
import org.openapis.openapi.models.shared.OrganizationTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StockData;
import org.openapis.openapi.models.shared.WebDataInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchLegalEntitiesIdRequest req = new PatchLegalEntitiesIdRequest("ipsa") {{
                legalEntityInfoInput = new LegalEntityInfoInput() {{
                    entityAssociations = new org.openapis.openapi.models.shared.LegalEntityAssociationInput[]{{
                        add(new LegalEntityAssociationInput("corporis", LegalEntityAssociationTypeEnum.SIGNATORY) {{
                            jobTitle = "International Branding Technician";
                            legalEntityId = "dolores";
                            type = LegalEntityAssociationTypeEnum.SIGNATORY;
                        }}),
                        add(new LegalEntityAssociationInput("excepturi", LegalEntityAssociationTypeEnum.SIGNATORY) {{
                            jobTitle = "Legacy Paradigm Orchestrator";
                            legalEntityId = "nemo";
                            type = LegalEntityAssociationTypeEnum.SIGNATORY;
                        }}),
                        add(new LegalEntityAssociationInput("mollitia", LegalEntityAssociationTypeEnum.SIGNATORY) {{
                            jobTitle = "District Web Strategist";
                            legalEntityId = "sapiente";
                            type = LegalEntityAssociationTypeEnum.SIGNATORY;
                        }}),
                        add(new LegalEntityAssociationInput("numquam", LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL) {{
                            jobTitle = "Investor Marketing Strategist";
                            legalEntityId = "mollitia";
                            type = LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL;
                        }}),
                    }};
                    individual = new IndividualInput(                new Name("quam", "molestiae") {{
                                        infix = "velit";
                                    }};,                 new Address("error") {{
                                        city = "West Berniechester";
                                        postalCode = "31719-3680";
                                        stateOrProvince = "quasi";
                                        street = "8609 Thiel Lane";
                                        street2 = "praesentium";
                                    }};) {{
                        birthData = new BirthData() {{
                            dateOfBirth = "voluptatibus";
                        }};;
                        email = "Lelah.Klein3@gmail.com";
                        identificationData = new IdentificationData(IdentificationDataTypeEnum.PASSPORT) {{
                            cardNumber = "ut";
                            expiryDate = "maiores";
                            issuerCountry = "dicta";
                            issuerState = "corporis";
                            nationalIdExempt = false;
                            number = "dolore";
                        }};;
                        nationality = "iusto";
                        phone = new PhoneNumber("dicta", "harum") {{
                            countryCode = "GF";
                        }};;
                        webData = new WebDataInput() {{
                            webAddress = "accusamus";
                        }};;
                    }};;
                    organization = new OrganizationInput("commodi",                 new Address("repudiandae") {{
                                        city = "East Mathildestad";
                                        postalCode = "82559-0950";
                                        stateOrProvince = "itaque";
                                        street = "30681 Rau Street";
                                        street2 = "labore";
                                    }};) {{
                        description = "modi";
                        doingBusinessAs = "qui";
                        email = "Kyler16@yahoo.com";
                        phone = new PhoneNumber("assumenda", "ipsam") {{
                            countryCode = "AE";
                        }};;
                        principalPlaceOfBusiness = new Address("fugit") {{
                            city = "Marksboro";
                            postalCode = "72942-7535";
                            stateOrProvince = "necessitatibus";
                            street = "6289 King Lake";
                            street2 = "illum";
                        }};;
                        registrationNumber = "maiores";
                        stockData = new StockData() {{
                            marketIdentifier = "rerum";
                            stockNumber = "dicta";
                            tickerSymbol = "magnam";
                        }};;
                        taxExempt = false;
                        taxId = "cumque";
                        taxIdAbsenceReason = OrganizationTaxIdAbsenceReasonEnum.BELOW_TAX_THRESHOLD;
                        type = OrganizationTypeEnum.LISTED_PUBLIC_COMPANY;
                        webData = new WebDataInput() {{
                            webAddress = "aliquid";
                        }};;
                    }};;
                    reference = "laborum";
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

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLegalEntitiesResponse;
import org.openapis.openapi.models.operations.PostLegalEntitiesSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.BirthData;
import org.openapis.openapi.models.shared.IdentificationData;
import org.openapis.openapi.models.shared.IdentificationDataTypeEnum;
import org.openapis.openapi.models.shared.IndividualInput;
import org.openapis.openapi.models.shared.LegalEntityAssociationInput;
import org.openapis.openapi.models.shared.LegalEntityAssociationTypeEnum;
import org.openapis.openapi.models.shared.LegalEntityInfoRequiredTypeInput;
import org.openapis.openapi.models.shared.LegalEntityInfoRequiredTypeTypeEnum;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.OrganizationTaxIdAbsenceReasonEnum;
import org.openapis.openapi.models.shared.OrganizationTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StockData;
import org.openapis.openapi.models.shared.WebDataInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LegalEntityInfoRequiredTypeInput req = new LegalEntityInfoRequiredTypeInput(LegalEntityInfoRequiredTypeTypeEnum.INDIVIDUAL) {{
                entityAssociations = new org.openapis.openapi.models.shared.LegalEntityAssociationInput[]{{
                    add(new LegalEntityAssociationInput("nam", LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL) {{
                        jobTitle = "Product Accountability Strategist";
                        legalEntityId = "quidem";
                        type = LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL;
                    }}),
                    add(new LegalEntityAssociationInput("nisi", LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL) {{
                        jobTitle = "Central Operations Representative";
                        legalEntityId = "amet";
                        type = LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL;
                    }}),
                    add(new LegalEntityAssociationInput("magnam", LegalEntityAssociationTypeEnum.UBO_THROUGH_OWNERSHIP) {{
                        jobTitle = "Customer Communications Architect";
                        legalEntityId = "perferendis";
                        type = LegalEntityAssociationTypeEnum.UBO_THROUGH_CONTROL;
                    }}),
                }};
                individual = new IndividualInput(                new Name("id", "labore") {{
                                    infix = "labore";
                                }};,                 new Address("suscipit") {{
                                    city = "Rohanview";
                                    postalCode = "11205-3555";
                                    stateOrProvince = "accusantium";
                                    street = "9634 Sophie Coves";
                                    street2 = "nemo";
                                }};) {{
                    birthData = new BirthData() {{
                        dateOfBirth = "quasi";
                    }};;
                    email = "Wilton80@yahoo.com";
                    identificationData = new IdentificationData(IdentificationDataTypeEnum.PROOF_OF_ADDRESS) {{
                        cardNumber = "facilis";
                        expiryDate = "in";
                        issuerCountry = "architecto";
                        issuerState = "architecto";
                        nationalIdExempt = false;
                        number = "repudiandae";
                    }};;
                    nationality = "ullam";
                    phone = new PhoneNumber("expedita", "nihil") {{
                        countryCode = "ZW";
                    }};;
                    webData = new WebDataInput() {{
                        webAddress = "quibusdam";
                    }};;
                }};;
                organization = new OrganizationInput("sed",                 new Address("saepe") {{
                                    city = "Arlington Heights";
                                    postalCode = "56117";
                                    stateOrProvince = "illum";
                                    street = "845 Gwendolyn Burg";
                                    street2 = "ab";
                                }};) {{
                    description = "maiores";
                    doingBusinessAs = "quidem";
                    email = "Jacey.Johnston86@yahoo.com";
                    phone = new PhoneNumber("nemo", "voluptatibus") {{
                        countryCode = "AI";
                    }};;
                    principalPlaceOfBusiness = new Address("fugiat") {{
                        city = "North Norwood";
                        postalCode = "97713";
                        stateOrProvince = "totam";
                        street = "0311 Cecilia Skyway";
                        street2 = "quam";
                    }};;
                    registrationNumber = "dolor";
                    stockData = new StockData() {{
                        marketIdentifier = "vero";
                        stockNumber = "nostrum";
                        tickerSymbol = "hic";
                    }};;
                    taxExempt = false;
                    taxId = "recusandae";
                    taxIdAbsenceReason = OrganizationTaxIdAbsenceReasonEnum.BELOW_TAX_THRESHOLD;
                    type = OrganizationTypeEnum.PARTNERSHIP_INCORPORATED;
                    webData = new WebDataInput() {{
                        webAddress = "perspiciatis";
                    }};;
                }};;
                reference = "voluptatem";
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
