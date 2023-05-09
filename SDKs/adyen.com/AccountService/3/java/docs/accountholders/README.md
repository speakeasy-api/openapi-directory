# accountHolders

### Available Operations

* [postCloseAccountHolder](#postcloseaccountholder) - Close an account holder
* [postCreateAccountHolder](#postcreateaccountholder) - Create an account holder
* [postGetAccountHolder](#postgetaccountholder) - Get an account holder
* [postGetTaxForm](#postgettaxform) - Get a tax form
* [postSuspendAccountHolder](#postsuspendaccountholder) - Suspend an account holder
* [postUnSuspendAccountHolder](#postunsuspendaccountholder) - Unsuspend an account holder
* [postUpdateAccountHolder](#postupdateaccountholder) - Update an account holder
* [postUpdateAccountHolderState](#postupdateaccountholderstate) - Update payout or processing state

## postCloseAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCloseAccountHolderResponse;
import org.openapis.openapi.models.operations.PostCloseAccountHolderSecurity;
import org.openapis.openapi.models.shared.CloseAccountHolderRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CloseAccountHolderRequest req = new CloseAccountHolderRequest("provident");            

            PostCloseAccountHolderResponse res = sdk.accountHolders.postCloseAccountHolder(req, new PostCloseAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.closeAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateAccountHolder

Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/marketplaces-and-platforms/classic/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCreateAccountHolderResponse;
import org.openapis.openapi.models.operations.PostCreateAccountHolderSecurity;
import org.openapis.openapi.models.shared.AccountHolderDetails;
import org.openapis.openapi.models.shared.BankAccountDetail;
import org.openapis.openapi.models.shared.BankAccountDetailWrapper;
import org.openapis.openapi.models.shared.BusinessDetails;
import org.openapis.openapi.models.shared.CreateAccountHolderRequest;
import org.openapis.openapi.models.shared.CreateAccountHolderRequestLegalEntityEnum;
import org.openapis.openapi.models.shared.IndividualDetails;
import org.openapis.openapi.models.shared.PersonalDocumentData;
import org.openapis.openapi.models.shared.PersonalDocumentDataTypeEnum;
import org.openapis.openapi.models.shared.PersonalDocumentDataWrapper;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ShareholderContact;
import org.openapis.openapi.models.shared.ShareholderContactShareholderTypeEnum;
import org.openapis.openapi.models.shared.ShareholderContactWrapper;
import org.openapis.openapi.models.shared.SignatoryContact;
import org.openapis.openapi.models.shared.SignatoryContactWrapper;
import org.openapis.openapi.models.shared.UltimateParentCompany;
import org.openapis.openapi.models.shared.UltimateParentCompanyBusinessDetails;
import org.openapis.openapi.models.shared.UltimateParentCompanyWrapper;
import org.openapis.openapi.models.shared.ViasAddress;
import org.openapis.openapi.models.shared.ViasName;
import org.openapis.openapi.models.shared.ViasNameGenderEnum;
import org.openapis.openapi.models.shared.ViasPersonalData;
import org.openapis.openapi.models.shared.ViasPhoneNumber;
import org.openapis.openapi.models.shared.ViasPhoneNumberPhoneTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAccountHolderRequest req = new CreateAccountHolderRequest("distinctio",                 new AccountHolderDetails() {{
                                address = new ViasAddress() {{
                                    city = "New Orleans";
                                    country = "Sweden";
                                    houseNumberOrName = "corrupti";
                                    postalCode = "46634-2809";
                                    stateOrProvince = "tempora";
                                    street = "4785 Kenyon Hollow";
                                }};;
                                bankAccountDetails = new org.openapis.openapi.models.shared.BankAccountDetailWrapper[]{{
                                    add(new BankAccountDetailWrapper() {{
                                        bankAccountDetail = new BankAccountDetail() {{
                                            accountNumber = "temporibus";
                                            accountType = "ab";
                                            bankAccountName = "quis";
                                            bankAccountUUID = "veritatis";
                                            bankBicSwift = "deserunt";
                                            bankCity = "perferendis";
                                            bankCode = "ipsam";
                                            bankName = "repellendus";
                                            branchCode = "sapiente";
                                            checkCode = "quo";
                                            countryCode = "BW";
                                            currencyCode = "at";
                                            iban = "at";
                                            ownerCity = "maiores";
                                            ownerCountryCode = "molestiae";
                                            ownerDateOfBirth = "quod";
                                            ownerHouseNumberOrName = "quod";
                                            ownerName = "esse";
                                            ownerNationality = "totam";
                                            ownerPostalCode = "porro";
                                            ownerState = "dolorum";
                                            ownerStreet = "dicta";
                                            primaryAccount = false;
                                            taxId = "nam";
                                            urlForVerification = "officia";
                                        }};
                                    }}),
                                    add(new BankAccountDetailWrapper() {{
                                        bankAccountDetail = new BankAccountDetail() {{
                                            accountNumber = "occaecati";
                                            accountType = "fugit";
                                            bankAccountName = "deleniti";
                                            bankAccountUUID = "hic";
                                            bankBicSwift = "optio";
                                            bankCity = "totam";
                                            bankCode = "beatae";
                                            bankName = "commodi";
                                            branchCode = "molestiae";
                                            checkCode = "modi";
                                            countryCode = "CM";
                                            currencyCode = "impedit";
                                            iban = "cum";
                                            ownerCity = "esse";
                                            ownerCountryCode = "ipsum";
                                            ownerDateOfBirth = "excepturi";
                                            ownerHouseNumberOrName = "aspernatur";
                                            ownerName = "perferendis";
                                            ownerNationality = "ad";
                                            ownerPostalCode = "natus";
                                            ownerState = "sed";
                                            ownerStreet = "iste";
                                            primaryAccount = false;
                                            taxId = "dolor";
                                            urlForVerification = "natus";
                                        }};
                                    }}),
                                    add(new BankAccountDetailWrapper() {{
                                        bankAccountDetail = new BankAccountDetail() {{
                                            accountNumber = "laboriosam";
                                            accountType = "hic";
                                            bankAccountName = "saepe";
                                            bankAccountUUID = "fuga";
                                            bankBicSwift = "in";
                                            bankCity = "corporis";
                                            bankCode = "iste";
                                            bankName = "iure";
                                            branchCode = "saepe";
                                            checkCode = "quidem";
                                            countryCode = "BJ";
                                            currencyCode = "ipsa";
                                            iban = "reiciendis";
                                            ownerCity = "est";
                                            ownerCountryCode = "mollitia";
                                            ownerDateOfBirth = "laborum";
                                            ownerHouseNumberOrName = "dolores";
                                            ownerName = "dolorem";
                                            ownerNationality = "corporis";
                                            ownerPostalCode = "explicabo";
                                            ownerState = "nobis";
                                            ownerStreet = "enim";
                                            primaryAccount = false;
                                            taxId = "omnis";
                                            urlForVerification = "nemo";
                                        }};
                                    }}),
                                    add(new BankAccountDetailWrapper() {{
                                        bankAccountDetail = new BankAccountDetail() {{
                                            accountNumber = "minima";
                                            accountType = "excepturi";
                                            bankAccountName = "accusantium";
                                            bankAccountUUID = "iure";
                                            bankBicSwift = "culpa";
                                            bankCity = "doloribus";
                                            bankCode = "sapiente";
                                            bankName = "architecto";
                                            branchCode = "mollitia";
                                            checkCode = "dolorem";
                                            countryCode = "MZ";
                                            currencyCode = "consequuntur";
                                            iban = "repellat";
                                            ownerCity = "mollitia";
                                            ownerCountryCode = "occaecati";
                                            ownerDateOfBirth = "numquam";
                                            ownerHouseNumberOrName = "commodi";
                                            ownerName = "quam";
                                            ownerNationality = "molestiae";
                                            ownerPostalCode = "velit";
                                            ownerState = "error";
                                            ownerStreet = "quia";
                                            primaryAccount = false;
                                            taxId = "quis";
                                            urlForVerification = "vitae";
                                        }};
                                    }}),
                                }};
                                businessDetails = new BusinessDetails() {{
                                    doingBusinessAs = "laborum";
                                    legalBusinessName = "animi";
                                    listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompanyWrapper[]{{
                                        add(new UltimateParentCompanyWrapper() {{
                                            ultimateParentCompany = new UltimateParentCompany() {{
                                                address = new ViasAddress() {{
                                                    city = "Port Clevelandshire";
                                                    country = "Guinea-Bissau";
                                                    houseNumberOrName = "id";
                                                    postalCode = "00686-0998";
                                                    stateOrProvince = "nihil";
                                                    street = "9064 Aufderhar Burgs";
                                                }};
                                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                    legalBusinessName = "reprehenderit";
                                                    registrationNumber = "ut";
                                                    stockExchange = "maiores";
                                                    stockNumber = "dicta";
                                                    stockTicker = "corporis";
                                                }};
                                                ultimateParentCompanyCode = "dolore";
                                            }};
                                        }}),
                                        add(new UltimateParentCompanyWrapper() {{
                                            ultimateParentCompany = new UltimateParentCompany() {{
                                                address = new ViasAddress() {{
                                                    city = "Birdiechester";
                                                    country = "Georgia";
                                                    houseNumberOrName = "accusamus";
                                                    postalCode = "90265";
                                                    stateOrProvince = "excepturi";
                                                    street = "255 Botsford Valleys";
                                                }};
                                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                    legalBusinessName = "sint";
                                                    registrationNumber = "veritatis";
                                                    stockExchange = "itaque";
                                                    stockNumber = "incidunt";
                                                    stockTicker = "enim";
                                                }};
                                                ultimateParentCompanyCode = "consequatur";
                                            }};
                                        }}),
                                    }};
                                    shareholders = new org.openapis.openapi.models.shared.ShareholderContactWrapper[]{{
                                        add(new ShareholderContactWrapper() {{
                                            shareholderContact = new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Camarillo";
                                                    country = "Niger";
                                                    houseNumberOrName = "distinctio";
                                                    postalCode = "22135-5018";
                                                    stateOrProvince = "ipsam";
                                                    street = "16527 Green Vista";
                                                }};
                                                email = "Delores.Roob@yahoo.com";
                                                fullPhoneNumber = "provident";
                                                jobTitle = "Human Intranet Orchestrator";
                                                name = new ViasName() {{
                                                    firstName = "Damien";
                                                    gender = ViasNameGenderEnum.UNKNOWN;
                                                    infix = "a";
                                                    lastName = "Parisian";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "in";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                expirationDate = "illum";
                                                                issuerCountry = "maiores";
                                                                issuerState = "rerum";
                                                                number = "dicta";
                                                                type = PersonalDocumentDataTypeEnum.ID;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                expirationDate = "facere";
                                                                issuerCountry = "ea";
                                                                issuerState = "aliquid";
                                                                number = "laborum";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "occaecati";
                                                    nationality = "enim";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "accusamus";
                                                    phoneNumber = "delectus";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                }};
                                                shareholderCode = "provident";
                                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                webAddress = "id";
                                            }};
                                        }}),
                                        add(new ShareholderContactWrapper() {{
                                            shareholderContact = new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Kacieshire";
                                                    country = "Denmark";
                                                    houseNumberOrName = "deserunt";
                                                    postalCode = "46640";
                                                    stateOrProvince = "nihil";
                                                    street = "76223 Rohan Key";
                                                }};
                                                email = "Brice9@hotmail.com";
                                                fullPhoneNumber = "excepturi";
                                                jobTitle = "National Intranet Designer";
                                                name = new ViasName() {{
                                                    firstName = "Kiley";
                                                    gender = ViasNameGenderEnum.MALE;
                                                    infix = "mollitia";
                                                    lastName = "Wisozk";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "mollitia";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "eum";
                                                                issuerCountry = "dolor";
                                                                issuerState = "necessitatibus";
                                                                number = "odit";
                                                                type = PersonalDocumentDataTypeEnum.ID;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                expirationDate = "iure";
                                                                issuerCountry = "doloribus";
                                                                issuerState = "debitis";
                                                                number = "eius";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "facilis";
                                                    nationality = "in";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "architecto";
                                                    phoneNumber = "architecto";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                }};
                                                shareholderCode = "ullam";
                                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                webAddress = "nihil";
                                            }};
                                        }}),
                                        add(new ShareholderContactWrapper() {{
                                            shareholderContact = new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Southaven";
                                                    country = "Cameroon";
                                                    houseNumberOrName = "saepe";
                                                    postalCode = "01561-1788";
                                                    stateOrProvince = "maxime";
                                                    street = "5140 Willow Radial";
                                                }};
                                                email = "Jacey.Johnston86@yahoo.com";
                                                fullPhoneNumber = "nemo";
                                                jobTitle = "Principal Solutions Facilitator";
                                                name = new ViasName() {{
                                                    firstName = "Darian";
                                                    gender = ViasNameGenderEnum.MALE;
                                                    infix = "cumque";
                                                    lastName = "Hessel";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "hic";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "nobis";
                                                                issuerCountry = "dolores";
                                                                issuerState = "quis";
                                                                number = "totam";
                                                                type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                expirationDate = "quis";
                                                                issuerCountry = "nesciunt";
                                                                issuerState = "eos";
                                                                number = "perferendis";
                                                                type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                expirationDate = "quam";
                                                                issuerCountry = "dolor";
                                                                issuerState = "vero";
                                                                number = "nostrum";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "omnis";
                                                    nationality = "facilis";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "perspiciatis";
                                                    phoneNumber = "voluptatem";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                }};
                                                shareholderCode = "consequuntur";
                                                shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                webAddress = "error";
                                            }};
                                        }}),
                                    }};
                                    signatories = new org.openapis.openapi.models.shared.SignatoryContactWrapper[]{{
                                        add(new SignatoryContactWrapper() {{
                                            signatoryContact = new SignatoryContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Maximillianburgh";
                                                    country = "Zambia";
                                                    houseNumberOrName = "earum";
                                                    postalCode = "66585";
                                                    stateOrProvince = "nobis";
                                                    street = "935 Coy Estates";
                                                }};
                                                email = "Christy_Erdman73@gmail.com";
                                                fullPhoneNumber = "voluptate";
                                                jobTitle = "Central Usability Manager";
                                                name = new ViasName() {{
                                                    firstName = "Marina";
                                                    gender = ViasNameGenderEnum.MALE;
                                                    infix = "veritatis";
                                                    lastName = "Beer";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "ipsa";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                expirationDate = "odio";
                                                                issuerCountry = "quaerat";
                                                                issuerState = "accusamus";
                                                                number = "quidem";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "natus";
                                                                issuerCountry = "eos";
                                                                issuerState = "atque";
                                                                number = "sit";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "soluta";
                                                    nationality = "dolorum";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "iusto";
                                                    phoneNumber = "voluptate";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                }};
                                                signatoryCode = "deleniti";
                                                signatoryReference = "omnis";
                                                webAddress = "necessitatibus";
                                            }};
                                        }}),
                                    }};
                                    taxId = "distinctio";
                                }};;
                                email = "Janessa_Emmerich@hotmail.com";
                                fullPhoneNumber = "saepe";
                                individualDetails = new IndividualDetails() {{
                                    name = new ViasName() {{
                                        firstName = "Diamond";
                                        gender = ViasNameGenderEnum.MALE;
                                        infix = "perferendis";
                                        lastName = "Fay";
                                    }};;
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "optio";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                    expirationDate = "ad";
                                                    issuerCountry = "saepe";
                                                    issuerState = "suscipit";
                                                    number = "deserunt";
                                                    type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                    expirationDate = "repellendus";
                                                    issuerCountry = "totam";
                                                    issuerState = "similique";
                                                    number = "alias";
                                                    type = PersonalDocumentDataTypeEnum.VISA;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                    expirationDate = "tempora";
                                                    issuerCountry = "vel";
                                                    issuerState = "quod";
                                                    number = "officiis";
                                                    type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                    expirationDate = "a";
                                                    issuerCountry = "esse";
                                                    issuerState = "harum";
                                                    number = "iusto";
                                                    type = PersonalDocumentDataTypeEnum.ID;
                                                }};
                                            }}),
                                        }};
                                        idNumber = "tenetur";
                                        nationality = "amet";
                                    }};;
                                }};;
                                lastReviewDate = "tempore";
                                merchantCategoryCode = "accusamus";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("enim", "dolorem");
                                    put("sapiente", "totam");
                                }};
                                principalBusinessAddress = new ViasAddress() {{
                                    city = "Aldencester";
                                    country = "Costa Rica";
                                    houseNumberOrName = "sed";
                                    postalCode = "73642";
                                    stateOrProvince = "incidunt";
                                    street = "58871 Larson Forest";
                                }};;
                                webAddress = "aspernatur";
                            }};, CreateAccountHolderRequestLegalEntityEnum.BUSINESS) {{
                createDefaultAccount = false;
                processingTier = 716860;
            }};            

            PostCreateAccountHolderResponse res = sdk.accountHolders.postCreateAccountHolder(req, new PostCreateAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetAccountHolder

Returns the details of an account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetAccountHolderResponse;
import org.openapis.openapi.models.operations.PostGetAccountHolderSecurity;
import org.openapis.openapi.models.shared.GetAccountHolderRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetAccountHolderRequest req = new GetAccountHolderRequest() {{
                accountCode = "facilis";
                accountHolderCode = "aliquid";
            }};            

            PostGetAccountHolderResponse res = sdk.accountHolders.postGetAccountHolder(req, new PostGetAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetTaxForm

Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/marketplaces-and-platforms/classic/tax-forms).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetTaxFormResponse;
import org.openapis.openapi.models.operations.PostGetTaxFormSecurity;
import org.openapis.openapi.models.shared.GetTaxFormRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetTaxFormRequest req = new GetTaxFormRequest("quam", "molestias", 840429);            

            PostGetTaxFormResponse res = sdk.accountHolders.postGetTaxForm(req, new PostGetTaxFormSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getTaxFormResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSuspendAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) to **Suspended**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSuspendAccountHolderResponse;
import org.openapis.openapi.models.operations.PostSuspendAccountHolderSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SuspendAccountHolderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SuspendAccountHolderRequest req = new SuspendAccountHolderRequest("qui");            

            PostSuspendAccountHolderResponse res = sdk.accountHolders.postSuspendAccountHolder(req, new PostSuspendAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.suspendAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUnSuspendAccountHolder

Changes the [status of an account holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. 
Account holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.

You can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUnSuspendAccountHolderResponse;
import org.openapis.openapi.models.operations.PostUnSuspendAccountHolderSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UnSuspendAccountHolderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UnSuspendAccountHolderRequest req = new UnSuspendAccountHolderRequest("neque");            

            PostUnSuspendAccountHolderResponse res = sdk.accountHolders.postUnSuspendAccountHolder(req, new PostUnSuspendAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.unSuspendAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAccountHolder

Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.

When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:

* `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.

When updating any field in the following objects, you must submit all the fields required for validation:

 * `address`

* `fullPhoneNumber`

* `bankAccountDetails.BankAccountDetail`

* `businessDetails.shareholders.ShareholderContact`

 For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.

To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUpdateAccountHolderResponse;
import org.openapis.openapi.models.operations.PostUpdateAccountHolderSecurity;
import org.openapis.openapi.models.shared.AccountHolderDetails;
import org.openapis.openapi.models.shared.BankAccountDetail;
import org.openapis.openapi.models.shared.BankAccountDetailWrapper;
import org.openapis.openapi.models.shared.BusinessDetails;
import org.openapis.openapi.models.shared.IndividualDetails;
import org.openapis.openapi.models.shared.PersonalDocumentData;
import org.openapis.openapi.models.shared.PersonalDocumentDataTypeEnum;
import org.openapis.openapi.models.shared.PersonalDocumentDataWrapper;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ShareholderContact;
import org.openapis.openapi.models.shared.ShareholderContactShareholderTypeEnum;
import org.openapis.openapi.models.shared.ShareholderContactWrapper;
import org.openapis.openapi.models.shared.SignatoryContact;
import org.openapis.openapi.models.shared.SignatoryContactWrapper;
import org.openapis.openapi.models.shared.UltimateParentCompany;
import org.openapis.openapi.models.shared.UltimateParentCompanyBusinessDetails;
import org.openapis.openapi.models.shared.UltimateParentCompanyWrapper;
import org.openapis.openapi.models.shared.UpdateAccountHolderRequest;
import org.openapis.openapi.models.shared.ViasAddress;
import org.openapis.openapi.models.shared.ViasName;
import org.openapis.openapi.models.shared.ViasNameGenderEnum;
import org.openapis.openapi.models.shared.ViasPersonalData;
import org.openapis.openapi.models.shared.ViasPhoneNumber;
import org.openapis.openapi.models.shared.ViasPhoneNumberPhoneTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UpdateAccountHolderRequest req = new UpdateAccountHolderRequest("fugit") {{
                accountHolderDetails = new AccountHolderDetails() {{
                    address = new ViasAddress() {{
                        city = "South Bradybury";
                        country = "Qatar";
                        houseNumberOrName = "hic";
                        postalCode = "77709";
                        stateOrProvince = "ipsum";
                        street = "75750 Durgan Fork";
                    }};;
                    bankAccountDetails = new org.openapis.openapi.models.shared.BankAccountDetailWrapper[]{{
                        add(new BankAccountDetailWrapper() {{
                            bankAccountDetail = new BankAccountDetail() {{
                                accountNumber = "adipisci";
                                accountType = "dolorum";
                                bankAccountName = "architecto";
                                bankAccountUUID = "quae";
                                bankBicSwift = "aut";
                                bankCity = "quas";
                                bankCode = "itaque";
                                bankName = "consequatur";
                                branchCode = "est";
                                checkCode = "repellendus";
                                countryCode = "SD";
                                currencyCode = "doloribus";
                                iban = "ut";
                                ownerCity = "facilis";
                                ownerCountryCode = "cupiditate";
                                ownerDateOfBirth = "qui";
                                ownerHouseNumberOrName = "quae";
                                ownerName = "laudantium";
                                ownerNationality = "odio";
                                ownerPostalCode = "occaecati";
                                ownerState = "voluptatibus";
                                ownerStreet = "quisquam";
                                primaryAccount = false;
                                taxId = "vero";
                                urlForVerification = "omnis";
                            }};
                        }}),
                        add(new BankAccountDetailWrapper() {{
                            bankAccountDetail = new BankAccountDetail() {{
                                accountNumber = "quis";
                                accountType = "ipsum";
                                bankAccountName = "delectus";
                                bankAccountUUID = "voluptate";
                                bankBicSwift = "consectetur";
                                bankCity = "vero";
                                bankCode = "tenetur";
                                bankName = "dignissimos";
                                branchCode = "hic";
                                checkCode = "distinctio";
                                countryCode = "SI";
                                currencyCode = "odio";
                                iban = "similique";
                                ownerCity = "facilis";
                                ownerCountryCode = "vero";
                                ownerDateOfBirth = "ducimus";
                                ownerHouseNumberOrName = "dolore";
                                ownerName = "quibusdam";
                                ownerNationality = "illum";
                                ownerPostalCode = "sequi";
                                ownerState = "natus";
                                ownerStreet = "impedit";
                                primaryAccount = false;
                                taxId = "aut";
                                urlForVerification = "voluptatibus";
                            }};
                        }}),
                    }};
                    businessDetails = new BusinessDetails() {{
                        doingBusinessAs = "exercitationem";
                        legalBusinessName = "nulla";
                        listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompanyWrapper[]{{
                            add(new UltimateParentCompanyWrapper() {{
                                ultimateParentCompany = new UltimateParentCompany() {{
                                    address = new ViasAddress() {{
                                        city = "Wunschworth";
                                        country = "Kyrgyz Republic";
                                        houseNumberOrName = "eligendi";
                                        postalCode = "06234";
                                        stateOrProvince = "aspernatur";
                                        street = "8214 Cartwright Extensions";
                                    }};
                                    businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                        legalBusinessName = "maiores";
                                        registrationNumber = "quasi";
                                        stockExchange = "ex";
                                        stockNumber = "nulla";
                                        stockTicker = "excepturi";
                                    }};
                                    ultimateParentCompanyCode = "voluptatibus";
                                }};
                            }}),
                        }};
                        shareholders = new org.openapis.openapi.models.shared.ShareholderContactWrapper[]{{
                            add(new ShareholderContactWrapper() {{
                                shareholderContact = new ShareholderContact() {{
                                    address = new ViasAddress() {{
                                        city = "San Leandro";
                                        country = "Tunisia";
                                        houseNumberOrName = "ea";
                                        postalCode = "33303-4729";
                                        stateOrProvince = "aspernatur";
                                        street = "09700 Russel Freeway";
                                    }};
                                    email = "Shany8@gmail.com";
                                    fullPhoneNumber = "dolorum";
                                    jobTitle = "International Data Engineer";
                                    name = new ViasName() {{
                                        firstName = "Hollis";
                                        gender = ViasNameGenderEnum.FEMALE;
                                        infix = "nobis";
                                        lastName = "Lynch";
                                    }};
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "assumenda";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                    expirationDate = "voluptas";
                                                    issuerCountry = "libero";
                                                    issuerState = "quasi";
                                                    number = "tempora";
                                                    type = PersonalDocumentDataTypeEnum.ID;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                    expirationDate = "provident";
                                                    issuerCountry = "ipsa";
                                                    issuerState = "molestiae";
                                                    number = "magnam";
                                                    type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                    expirationDate = "esse";
                                                    issuerCountry = "esse";
                                                    issuerState = "rem";
                                                    number = "fuga";
                                                    type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                    expirationDate = "fugiat";
                                                    issuerCountry = "ut";
                                                    issuerState = "eum";
                                                    number = "suscipit";
                                                    type = PersonalDocumentDataTypeEnum.VISA;
                                                }};
                                            }}),
                                        }};
                                        idNumber = "praesentium";
                                        nationality = "quisquam";
                                    }};
                                    phoneNumber = new ViasPhoneNumber() {{
                                        phoneCountryCode = "veritatis";
                                        phoneNumber = "ipsa";
                                        phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                    }};
                                    shareholderCode = "quidem";
                                    shareholderType = ShareholderContactShareholderTypeEnum.CONTROLLER;
                                    webAddress = "quo";
                                }};
                            }}),
                            add(new ShareholderContactWrapper() {{
                                shareholderContact = new ShareholderContact() {{
                                    address = new ViasAddress() {{
                                        city = "San Angelo";
                                        country = "Palestinian Territory";
                                        houseNumberOrName = "eius";
                                        postalCode = "30502";
                                        stateOrProvince = "debitis";
                                        street = "1174 Bayer Rapids";
                                    }};
                                    email = "Jennings_Blick@hotmail.com";
                                    fullPhoneNumber = "accusamus";
                                    jobTitle = "Product Optimization Planner";
                                    name = new ViasName() {{
                                        firstName = "Harvey";
                                        gender = ViasNameGenderEnum.UNKNOWN;
                                        infix = "dolores";
                                        lastName = "Oberbrunner";
                                    }};
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "molestiae";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                    expirationDate = "porro";
                                                    issuerCountry = "eum";
                                                    issuerState = "quas";
                                                    number = "praesentium";
                                                    type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                }};
                                            }}),
                                        }};
                                        idNumber = "fugit";
                                        nationality = "fuga";
                                    }};
                                    phoneNumber = new ViasPhoneNumber() {{
                                        phoneCountryCode = "mollitia";
                                        phoneNumber = "incidunt";
                                        phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                    }};
                                    shareholderCode = "explicabo";
                                    shareholderType = ShareholderContactShareholderTypeEnum.CONTROLLER;
                                    webAddress = "nisi";
                                }};
                            }}),
                        }};
                        signatories = new org.openapis.openapi.models.shared.SignatoryContactWrapper[]{{
                            add(new SignatoryContactWrapper() {{
                                signatoryContact = new SignatoryContact() {{
                                    address = new ViasAddress() {{
                                        city = "Ceres";
                                        country = "Cocos (Keeling) Islands";
                                        houseNumberOrName = "explicabo";
                                        postalCode = "55049-8048";
                                        stateOrProvince = "nam";
                                        street = "309 Maryam Light";
                                    }};
                                    email = "Kraig_Harber2@hotmail.com";
                                    fullPhoneNumber = "culpa";
                                    jobTitle = "Legacy Integration Consultant";
                                    name = new ViasName() {{
                                        firstName = "Carole";
                                        gender = ViasNameGenderEnum.MALE;
                                        infix = "minus";
                                        lastName = "Hackett";
                                    }};
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "sapiente";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                    expirationDate = "esse";
                                                    issuerCountry = "blanditiis";
                                                    issuerState = "provident";
                                                    number = "a";
                                                    type = PersonalDocumentDataTypeEnum.VISA;
                                                }};
                                            }}),
                                        }};
                                        idNumber = "esse";
                                        nationality = "quasi";
                                    }};
                                    phoneNumber = new ViasPhoneNumber() {{
                                        phoneCountryCode = "a";
                                        phoneNumber = "error";
                                        phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                    }};
                                    signatoryCode = "pariatur";
                                    signatoryReference = "possimus";
                                    webAddress = "quia";
                                }};
                            }}),
                        }};
                        taxId = "eveniet";
                    }};;
                    email = "Raven9@hotmail.com";
                    fullPhoneNumber = "similique";
                    individualDetails = new IndividualDetails() {{
                        name = new ViasName() {{
                            firstName = "Lorena";
                            gender = ViasNameGenderEnum.FEMALE;
                            infix = "tenetur";
                            lastName = "Berge";
                        }};;
                        personalData = new ViasPersonalData() {{
                            dateOfBirth = "earum";
                            documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                add(new PersonalDocumentDataWrapper() {{
                                    personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                        expirationDate = "in";
                                        issuerCountry = "eius";
                                        issuerState = "libero";
                                        number = "illum";
                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                    }};
                                }}),
                                add(new PersonalDocumentDataWrapper() {{
                                    personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                        expirationDate = "aliquam";
                                        issuerCountry = "sapiente";
                                        issuerState = "dicta";
                                        number = "ullam";
                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                    }};
                                }}),
                            }};
                            idNumber = "nisi";
                            nationality = "aut";
                        }};;
                    }};;
                    lastReviewDate = "voluptatum";
                    merchantCategoryCode = "qui";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("ex", "deleniti");
                        put("itaque", "dolorum");
                        put("architecto", "omnis");
                        put("tenetur", "quasi");
                    }};
                    principalBusinessAddress = new ViasAddress() {{
                        city = "Boise City";
                        country = "Kazakhstan";
                        houseNumberOrName = "ipsa";
                        postalCode = "02268";
                        stateOrProvince = "accusantium";
                        street = "0546 Karlee Flat";
                    }};;
                    webAddress = "voluptatem";
                }};;
                processingTier = 221161;
            }};            

            PostUpdateAccountHolderResponse res = sdk.accountHolders.postUpdateAccountHolder(req, new PostUpdateAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.updateAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAccountHolderState

Disables or enables the processing or payout state of an account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUpdateAccountHolderStateResponse;
import org.openapis.openapi.models.operations.PostUpdateAccountHolderStateSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateAccountHolderStateRequest;
import org.openapis.openapi.models.shared.UpdateAccountHolderStateRequestStateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UpdateAccountHolderStateRequest req = new UpdateAccountHolderStateRequest("occaecati", false, UpdateAccountHolderStateRequestStateTypeEnum.LIMITED_PROCESSING) {{
                reason = "impedit";
            }};            

            PostUpdateAccountHolderStateResponse res = sdk.accountHolders.postUpdateAccountHolderState(req, new PostUpdateAccountHolderStateSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getAccountHolderStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
