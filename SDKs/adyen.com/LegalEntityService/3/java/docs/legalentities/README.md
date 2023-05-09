# legalEntities

### Available Operations

* [getLegalEntitiesId](#getlegalentitiesid) - Get a legal entity
* [getLegalEntitiesIdBusinessLines](#getlegalentitiesidbusinesslines) - Get all business lines under a legal entity
* [patchLegalEntitiesId](#patchlegalentitiesid) - Update a legal entity
* [postLegalEntities](#postlegalentities) - Create a legal entity
* [postLegalEntitiesIdCheckVerificationErrors](#postlegalentitiesidcheckverificationerrors) - Check a legal entity's verification errors

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

            GetLegalEntitiesIdRequest req = new GetLegalEntitiesIdRequest("molestiae");            

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

            GetLegalEntitiesIdBusinessLinesRequest req = new GetLegalEntitiesIdBusinessLinesRequest("velit");            

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
import org.openapis.openapi.models.shared.OrganizationTypeEnum;
import org.openapis.openapi.models.shared.OrganizationVatAbsenceReasonEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SoleProprietorship;
import org.openapis.openapi.models.shared.SoleProprietorshipVatAbsenceReasonEnum;
import org.openapis.openapi.models.shared.StockData;
import org.openapis.openapi.models.shared.TaxInformation;
import org.openapis.openapi.models.shared.TaxReportingClassification;
import org.openapis.openapi.models.shared.TaxReportingClassificationBusinessTypeEnum;
import org.openapis.openapi.models.shared.TaxReportingClassificationMainSourceOfIncomeEnum;
import org.openapis.openapi.models.shared.TaxReportingClassificationTypeEnum;
import org.openapis.openapi.models.shared.WebDataInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchLegalEntitiesIdRequest req = new PatchLegalEntitiesIdRequest("error") {{
                legalEntityInfoInput = new LegalEntityInfoInput() {{
                    entityAssociations = new org.openapis.openapi.models.shared.LegalEntityAssociationInput[]{{
                        add(new LegalEntityAssociationInput("odit", LegalEntityAssociationTypeEnum.UBO_THROUGH_OWNERSHIP) {{
                            jobTitle = "National Research Technician";
                            legalEntityId = "animi";
                            type = LegalEntityAssociationTypeEnum.SIGNATORY;
                        }}),
                    }};
                    individual = new IndividualInput(                new Name("sequi", "tenetur") {{
                                        infix = "ipsam";
                                    }};,                 new Address("id") {{
                                        city = "Alpharetta";
                                        postalCode = "68609";
                                        stateOrProvince = "voluptatibus";
                                        street = "459 Lelah Lake";
                                        street2 = "cum";
                                    }};) {{
                        birthData = new BirthData() {{
                            dateOfBirth = "perferendis";
                        }};;
                        email = "Iliana.Grady35@gmail.com";
                        identificationData = new IdentificationData(IdentificationDataTypeEnum.NATIONAL_ID_NUMBER) {{
                            cardNumber = "iusto";
                            expiryDate = "dicta";
                            issuerCountry = "harum";
                            issuerState = "enim";
                            nationalIdExempt = false;
                            number = "accusamus";
                        }};;
                        nationality = "commodi";
                        phone = new PhoneNumber("repudiandae") {{
                            type = "quae";
                        }};;
                        taxInformation = new org.openapis.openapi.models.shared.TaxInformation[]{{
                            add(new TaxInformation() {{
                                country = "Papua New Guinea";
                                number = "molestias";
                                type = "excepturi";
                            }}),
                        }};
                        webData = new WebDataInput() {{
                            webAddress = "pariatur";
                        }};;
                    }};;
                    organization = new OrganizationInput("modi",                 new Address("praesentium") {{
                                        city = "Terenceland";
                                        postalCode = "50923-0681";
                                        stateOrProvince = "deserunt";
                                        street = "822 Grant Oval";
                                        street2 = "quos";
                                    }};) {{
                        dateOfIncorporation = "perferendis";
                        description = "magni";
                        doingBusinessAs = "assumenda";
                        email = "Abigale_Corkery27@yahoo.com";
                        phone = new PhoneNumber("facilis") {{
                            type = "tempore";
                        }};;
                        principalPlaceOfBusiness = new Address("labore") {{
                            city = "Joliet";
                            postalCode = "75358";
                            stateOrProvince = "sint";
                            street = "2896 Isobel Streets";
                            street2 = "maiores";
                        }};;
                        registrationNumber = "rerum";
                        stockData = new StockData() {{
                            marketIdentifier = "dicta";
                            stockNumber = "magnam";
                            tickerSymbol = "cumque";
                        }};;
                        taxInformation = new org.openapis.openapi.models.shared.TaxInformation[]{{
                            add(new TaxInformation() {{
                                country = "Iran";
                                number = "aliquid";
                                type = "laborum";
                            }}),
                            add(new TaxInformation() {{
                                country = "Tanzania";
                                number = "non";
                                type = "occaecati";
                            }}),
                            add(new TaxInformation() {{
                                country = "Gambia";
                                number = "accusamus";
                                type = "delectus";
                            }}),
                            add(new TaxInformation() {{
                                country = "Papua New Guinea";
                                number = "provident";
                                type = "nam";
                            }}),
                        }};
                        taxReportingClassification = new TaxReportingClassification() {{
                            businessType = TaxReportingClassificationBusinessTypeEnum.GOVERNMENTAL_ORGANIZATION;
                            financialInstitutionNumber = "blanditiis";
                            mainSourceOfIncome = TaxReportingClassificationMainSourceOfIncomeEnum.INVESTMENT_INTEREST_OR_ROYALTY;
                            type = TaxReportingClassificationTypeEnum.NON_FINANCIAL_PASSIVE;
                        }};;
                        type = OrganizationTypeEnum.GOVERNMENTAL_ORGANIZATION;
                        vatAbsenceReason = OrganizationVatAbsenceReasonEnum.BELOW_TAX_THRESHOLD;
                        vatNumber = "nisi";
                        webData = new WebDataInput() {{
                            webAddress = "vel";
                        }};;
                    }};;
                    reference = "natus";
                    soleProprietorship = new SoleProprietorship("omnis", "molestiae",                 new Address("perferendis") {{
                                        city = "Elishacester";
                                        postalCode = "22367-4811";
                                        stateOrProvince = "magnam";
                                        street = "53555 Madaline Walk";
                                        street2 = "mollitia";
                                    }};) {{
                        dateOfIncorporation = "ad";
                        doingBusinessAs = "eum";
                        principalPlaceOfBusiness = new Address("dolor") {{
                            city = "Carolina";
                            postalCode = "04982";
                            stateOrProvince = "maxime";
                            street = "7410 Herman Rapids";
                            street2 = "nihil";
                        }};;
                        registrationNumber = "repellat";
                        vatAbsenceReason = SoleProprietorshipVatAbsenceReasonEnum.BELOW_TAX_THRESHOLD;
                        vatNumber = "sed";
                    }};;
                    type = LegalEntityInfoTypeEnum.UNINCORPORATED_PARTNERSHIP;
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
import org.openapis.openapi.models.shared.OrganizationTypeEnum;
import org.openapis.openapi.models.shared.OrganizationVatAbsenceReasonEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SoleProprietorship;
import org.openapis.openapi.models.shared.SoleProprietorshipVatAbsenceReasonEnum;
import org.openapis.openapi.models.shared.StockData;
import org.openapis.openapi.models.shared.TaxInformation;
import org.openapis.openapi.models.shared.TaxReportingClassification;
import org.openapis.openapi.models.shared.TaxReportingClassificationBusinessTypeEnum;
import org.openapis.openapi.models.shared.TaxReportingClassificationMainSourceOfIncomeEnum;
import org.openapis.openapi.models.shared.TaxReportingClassificationTypeEnum;
import org.openapis.openapi.models.shared.WebDataInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LegalEntityInfoRequiredTypeInput req = new LegalEntityInfoRequiredTypeInput(LegalEntityInfoRequiredTypeTypeEnum.UNINCORPORATED_PARTNERSHIP) {{
                entityAssociations = new org.openapis.openapi.models.shared.LegalEntityAssociationInput[]{{
                    add(new LegalEntityAssociationInput("quo", LegalEntityAssociationTypeEnum.ULTIMATE_PARENT_COMPANY) {{
                        jobTitle = "Corporate Optimization Orchestrator";
                        legalEntityId = "magni";
                        type = LegalEntityAssociationTypeEnum.PCI_SIGNATORY;
                    }}),
                }};
                individual = new IndividualInput(                new Name("pariatur", "maxime") {{
                                    infix = "ea";
                                }};,                 new Address("excepturi") {{
                                    city = "South Alexanneton";
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
                    phone = new PhoneNumber("vero") {{
                        type = "nostrum";
                    }};;
                    taxInformation = new org.openapis.openapi.models.shared.TaxInformation[]{{
                        add(new TaxInformation() {{
                            country = "Uganda";
                            number = "omnis";
                            type = "facilis";
                        }}),
                        add(new TaxInformation() {{
                            country = "Montserrat";
                            number = "voluptatem";
                            type = "porro";
                        }}),
                        add(new TaxInformation() {{
                            country = "Central African Republic";
                            number = "blanditiis";
                            type = "error";
                        }}),
                        add(new TaxInformation() {{
                            country = "Australia";
                            number = "occaecati";
                            type = "rerum";
                        }}),
                    }};
                    webData = new WebDataInput() {{
                        webAddress = "adipisci";
                    }};;
                }};;
                organization = new OrganizationInput("asperiores",                 new Address("earum") {{
                                    city = "New Marielle";
                                    postalCode = "85779-3532";
                                    stateOrProvince = "dolorem";
                                    street = "12957 Jennifer Walks";
                                    street2 = "amet";
                                }};) {{
                    dateOfIncorporation = "dolorum";
                    description = "numquam";
                    doingBusinessAs = "veritatis";
                    email = "Anabelle.Kerluke@gmail.com";
                    phone = new PhoneNumber("accusamus") {{
                        type = "quidem";
                    }};;
                    principalPlaceOfBusiness = new Address("voluptatibus") {{
                        city = "New Chelsea";
                        postalCode = "08076-4465";
                        stateOrProvince = "omnis";
                        street = "794 Jacky Plaza";
                        street2 = "saepe";
                    }};;
                    registrationNumber = "eius";
                    stockData = new StockData() {{
                        marketIdentifier = "aspernatur";
                        stockNumber = "perferendis";
                        tickerSymbol = "amet";
                    }};;
                    taxInformation = new org.openapis.openapi.models.shared.TaxInformation[]{{
                        add(new TaxInformation() {{
                            country = "Thailand";
                            number = "ad";
                            type = "saepe";
                        }}),
                        add(new TaxInformation() {{
                            country = "Holy See (Vatican City State)";
                            number = "deserunt";
                            type = "provident";
                        }}),
                        add(new TaxInformation() {{
                            country = "Ghana";
                            number = "repellendus";
                            type = "totam";
                        }}),
                        add(new TaxInformation() {{
                            country = "Netherlands";
                            number = "alias";
                            type = "at";
                        }}),
                    }};
                    taxReportingClassification = new TaxReportingClassification() {{
                        businessType = TaxReportingClassificationBusinessTypeEnum.LISTED_PUBLIC_COMPANY;
                        financialInstitutionNumber = "tempora";
                        mainSourceOfIncome = TaxReportingClassificationMainSourceOfIncomeEnum.INVESTMENT_INTEREST_OR_ROYALTY;
                        type = TaxReportingClassificationTypeEnum.NON_FINANCIAL_PASSIVE;
                    }};;
                    type = OrganizationTypeEnum.PRIVATE_COMPANY;
                    vatAbsenceReason = OrganizationVatAbsenceReasonEnum.INDUSTRY_EXEMPTION;
                    vatNumber = "dolorum";
                    webData = new WebDataInput() {{
                        webAddress = "a";
                    }};;
                }};;
                reference = "esse";
                soleProprietorship = new SoleProprietorship("harum", "iusto",                 new Address("ipsum") {{
                                    city = "Whiteburgh";
                                    postalCode = "82329-5407";
                                    stateOrProvince = "neque";
                                    street = "47364 Drew Divide";
                                    street2 = "cupiditate";
                                }};) {{
                    dateOfIncorporation = "maxime";
                    doingBusinessAs = "pariatur";
                    principalPlaceOfBusiness = new Address("soluta") {{
                        city = "Lake Josephboro";
                        postalCode = "17734";
                        stateOrProvince = "molestias";
                        street = "121 Jefferey Court";
                        street2 = "ullam";
                    }};;
                    registrationNumber = "nam";
                    vatAbsenceReason = SoleProprietorshipVatAbsenceReasonEnum.BELOW_TAX_THRESHOLD;
                    vatNumber = "voluptatem";
                }};;
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

## postLegalEntitiesIdCheckVerificationErrors

Returns the verification errors for a legal entity and its supporting entities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdCheckVerificationErrorsRequest;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdCheckVerificationErrorsResponse;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdCheckVerificationErrorsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLegalEntitiesIdCheckVerificationErrorsRequest req = new PostLegalEntitiesIdCheckVerificationErrorsRequest("cumque");            

            PostLegalEntitiesIdCheckVerificationErrorsResponse res = sdk.legalEntities.postLegalEntitiesIdCheckVerificationErrors(req, new PostLegalEntitiesIdCheckVerificationErrorsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.verificationErrors != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
