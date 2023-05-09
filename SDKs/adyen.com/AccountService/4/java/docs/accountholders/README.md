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
                                    registrationNumber = "est";
                                    shareholders = new org.openapis.openapi.models.shared.ShareholderContactWrapper[]{{
                                        add(new ShareholderContactWrapper() {{
                                            shareholderContact = new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Lake Michellehaven";
                                                    country = "Finland";
                                                    houseNumberOrName = "modi";
                                                    postalCode = "35501";
                                                    stateOrProvince = "assumenda";
                                                    street = "0165 Mckayla River";
                                                }};
                                                email = "Vilma75@gmail.com";
                                                fullPhoneNumber = "sint";
                                                jobTitle = "Regional Intranet Agent";
                                                name = new ViasName() {{
                                                    firstName = "Kianna";
                                                    gender = ViasNameGenderEnum.FEMALE;
                                                    infix = "dolor";
                                                    lastName = "Toy";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "a";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "in";
                                                                issuerCountry = "in";
                                                                issuerState = "illum";
                                                                number = "maiores";
                                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                expirationDate = "magnam";
                                                                issuerCountry = "cumque";
                                                                issuerState = "facere";
                                                                number = "ea";
                                                                type = PersonalDocumentDataTypeEnum.ID;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                expirationDate = "accusamus";
                                                                issuerCountry = "non";
                                                                issuerState = "occaecati";
                                                                number = "enim";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "quidem";
                                                    nationality = "provident";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "nam";
                                                    phoneNumber = "id";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                }};
                                                shareholderCode = "deleniti";
                                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                webAddress = "amet";
                                            }};
                                        }}),
                                        add(new ShareholderContactWrapper() {{
                                            shareholderContact = new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Huelsview";
                                                    country = "Nauru";
                                                    houseNumberOrName = "omnis";
                                                    postalCode = "04376";
                                                    stateOrProvince = "labore";
                                                    street = "36748 Baylee Fort";
                                                }};
                                                email = "Kevon_Hermann@gmail.com";
                                                fullPhoneNumber = "sint";
                                                jobTitle = "Lead Branding Strategist";
                                                name = new ViasName() {{
                                                    firstName = "Mack";
                                                    gender = ViasNameGenderEnum.MALE;
                                                    infix = "eum";
                                                    lastName = "Ernser";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "necessitatibus";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                expirationDate = "nemo";
                                                                issuerCountry = "quasi";
                                                                issuerState = "iure";
                                                                number = "doloribus";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "maxime";
                                                    nationality = "deleniti";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "facilis";
                                                    phoneNumber = "in";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                }};
                                                shareholderCode = "architecto";
                                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                webAddress = "ullam";
                                            }};
                                        }}),
                                        add(new ShareholderContactWrapper() {{
                                            shareholderContact = new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Kossworth";
                                                    country = "Sudan";
                                                    houseNumberOrName = "sed";
                                                    postalCode = "80156-1178";
                                                    stateOrProvince = "pariatur";
                                                    street = "451 Alexanne Center";
                                                }};
                                                email = "Max.Hintz@hotmail.com";
                                                fullPhoneNumber = "nam";
                                                jobTitle = "Senior Accountability Coordinator";
                                                name = new ViasName() {{
                                                    firstName = "Wendy";
                                                    gender = ViasNameGenderEnum.MALE;
                                                    infix = "fugiat";
                                                    lastName = "Feeney";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "aut";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                expirationDate = "corporis";
                                                                issuerCountry = "hic";
                                                                issuerState = "libero";
                                                                number = "nobis";
                                                                type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "totam";
                                                                issuerCountry = "dignissimos";
                                                                issuerState = "eaque";
                                                                number = "quis";
                                                                type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                expirationDate = "perferendis";
                                                                issuerCountry = "dolores";
                                                                issuerState = "minus";
                                                                number = "quam";
                                                                type = PersonalDocumentDataTypeEnum.ID;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                expirationDate = "nostrum";
                                                                issuerCountry = "hic";
                                                                issuerState = "recusandae";
                                                                number = "omnis";
                                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "voluptatem";
                                                    nationality = "porro";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "consequuntur";
                                                    phoneNumber = "blanditiis";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                }};
                                                shareholderCode = "eaque";
                                                shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                webAddress = "rerum";
                                            }};
                                        }}),
                                        add(new ShareholderContactWrapper() {{
                                            shareholderContact = new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Fort Tracey";
                                                    country = "Estonia";
                                                    houseNumberOrName = "iste";
                                                    postalCode = "58577-9353";
                                                    stateOrProvince = "dolorem";
                                                    street = "21295 Klein Lock";
                                                }};
                                                email = "Danika8@hotmail.com";
                                                fullPhoneNumber = "ipsa";
                                                jobTitle = "Senior Division Analyst";
                                                name = new ViasName() {{
                                                    firstName = "Elvie";
                                                    gender = ViasNameGenderEnum.UNKNOWN;
                                                    infix = "quidem";
                                                    lastName = "Wolf";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "voluptas";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                expirationDate = "eos";
                                                                issuerCountry = "atque";
                                                                issuerState = "sit";
                                                                number = "fugiat";
                                                                type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                expirationDate = "dolorum";
                                                                issuerCountry = "iusto";
                                                                issuerState = "voluptate";
                                                                number = "dolorum";
                                                                type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                            }};
                                                        }}),
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                expirationDate = "necessitatibus";
                                                                issuerCountry = "distinctio";
                                                                issuerState = "asperiores";
                                                                number = "nihil";
                                                                type = PersonalDocumentDataTypeEnum.ID;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "id";
                                                    nationality = "saepe";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "eius";
                                                    phoneNumber = "aspernatur";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                }};
                                                shareholderCode = "amet";
                                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                webAddress = "accusamus";
                                            }};
                                        }}),
                                    }};
                                    signatories = new org.openapis.openapi.models.shared.SignatoryContactWrapper[]{{
                                        add(new SignatoryContactWrapper() {{
                                            signatoryContact = new SignatoryContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Hattiesburg";
                                                    country = "Niger";
                                                    houseNumberOrName = "provident";
                                                    postalCode = "85608";
                                                    stateOrProvince = "quaerat";
                                                    street = "47816 Klocko Prairie";
                                                }};
                                                email = "Cruz.Schamberger73@yahoo.com";
                                                fullPhoneNumber = "accusamus";
                                                jobTitle = "Future Paradigm Manager";
                                                name = new ViasName() {{
                                                    firstName = "Vernice";
                                                    gender = ViasNameGenderEnum.FEMALE;
                                                    infix = "nihil";
                                                    lastName = "Balistreri";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "expedita";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                expirationDate = "sed";
                                                                issuerCountry = "vel";
                                                                issuerState = "libero";
                                                                number = "voluptas";
                                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "ipsum";
                                                    nationality = "incidunt";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "qui";
                                                    phoneNumber = "cupiditate";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                }};
                                                signatoryCode = "pariatur";
                                                signatoryReference = "soluta";
                                                webAddress = "dicta";
                                            }};
                                        }}),
                                        add(new SignatoryContactWrapper() {{
                                            signatoryContact = new SignatoryContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Larsonboro";
                                                    country = "Bulgaria";
                                                    houseNumberOrName = "dolores";
                                                    postalCode = "73458-1211";
                                                    stateOrProvince = "odio";
                                                    street = "37907 Rohan Cliffs";
                                                }};
                                                email = "Cydney_Boehm73@hotmail.com";
                                                fullPhoneNumber = "cupiditate";
                                                jobTitle = "Lead Usability Manager";
                                                name = new ViasName() {{
                                                    firstName = "Eladio";
                                                    gender = ViasNameGenderEnum.MALE;
                                                    infix = "adipisci";
                                                    lastName = "Pagac";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "architecto";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                                        add(new PersonalDocumentDataWrapper() {{
                                                            personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                expirationDate = "aut";
                                                                issuerCountry = "quas";
                                                                issuerState = "itaque";
                                                                number = "consequatur";
                                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                            }};
                                                        }}),
                                                    }};
                                                    idNumber = "porro";
                                                    nationality = "doloribus";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "ut";
                                                    phoneNumber = "facilis";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                }};
                                                signatoryCode = "qui";
                                                signatoryReference = "quae";
                                                webAddress = "laudantium";
                                            }};
                                        }}),
                                    }};
                                    taxId = "odio";
                                }};;
                                email = "Wilbert_Schaefer33@yahoo.com";
                                fullPhoneNumber = "ipsum";
                                individualDetails = new IndividualDetails() {{
                                    name = new ViasName() {{
                                        firstName = "Vida";
                                        gender = ViasNameGenderEnum.FEMALE;
                                        infix = "consectetur";
                                        lastName = "Thiel";
                                    }};;
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "tenetur";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                    expirationDate = "hic";
                                                    issuerCountry = "distinctio";
                                                    issuerState = "quod";
                                                    number = "odio";
                                                    type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                    expirationDate = "vero";
                                                    issuerCountry = "ducimus";
                                                    issuerState = "dolore";
                                                    number = "quibusdam";
                                                    type = PersonalDocumentDataTypeEnum.VISA;
                                                }};
                                            }}),
                                        }};
                                        idNumber = "natus";
                                        nationality = "impedit";
                                    }};;
                                }};;
                                lastReviewDate = "aut";
                                merchantCategoryCode = "voluptatibus";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("nulla", "fugit");
                                    put("porro", "maiores");
                                }};
                                principalBusinessAddress = new ViasAddress() {{
                                    city = "Largo";
                                    country = "Saint Kitts and Nevis";
                                    houseNumberOrName = "ducimus";
                                    postalCode = "62341";
                                    stateOrProvince = "vel";
                                    street = "214 Cartwright Extensions";
                                }};;
                                webAddress = "maiores";
                            }};, CreateAccountHolderRequestLegalEntityEnum.BUSINESS) {{
                createDefaultAccount = false;
                description = "ex";
                primaryCurrency = "nulla";
                processingTier = 569211;
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
                accountCode = "voluptatibus";
                accountHolderCode = "nostrum";
                showDetails = false;
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

            org.openapis.openapi.models.shared.GetTaxFormRequest req = new GetTaxFormRequest("sapiente", "quisquam", 906556);            

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

            org.openapis.openapi.models.shared.SuspendAccountHolderRequest req = new SuspendAccountHolderRequest("ea");            

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

            org.openapis.openapi.models.shared.UnSuspendAccountHolderRequest req = new UnSuspendAccountHolderRequest("impedit");            

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

            org.openapis.openapi.models.shared.UpdateAccountHolderRequest req = new UpdateAccountHolderRequest("corporis") {{
                accountHolderDetails = new AccountHolderDetails() {{
                    address = new ViasAddress() {{
                        city = "South Armando";
                        country = "French Polynesia";
                        houseNumberOrName = "ea";
                        postalCode = "29130-9700";
                        stateOrProvince = "deleniti";
                        street = "318 Demarcus Cliff";
                    }};;
                    bankAccountDetails = new org.openapis.openapi.models.shared.BankAccountDetailWrapper[]{{
                        add(new BankAccountDetailWrapper() {{
                            bankAccountDetail = new BankAccountDetail() {{
                                accountNumber = "laborum";
                                accountType = "placeat";
                                bankAccountName = "velit";
                                bankAccountUUID = "eum";
                                bankBicSwift = "autem";
                                bankCity = "nobis";
                                bankCode = "quas";
                                bankName = "assumenda";
                                branchCode = "nulla";
                                checkCode = "voluptas";
                                countryCode = "PR";
                                currencyCode = "quasi";
                                iban = "tempora";
                                ownerCity = "numquam";
                                ownerCountryCode = "explicabo";
                                ownerDateOfBirth = "provident";
                                ownerHouseNumberOrName = "ipsa";
                                ownerName = "molestiae";
                                ownerNationality = "magnam";
                                ownerPostalCode = "odio";
                                ownerState = "eius";
                                ownerStreet = "esse";
                                primaryAccount = false;
                                taxId = "esse";
                                urlForVerification = "rem";
                            }};
                        }}),
                        add(new BankAccountDetailWrapper() {{
                            bankAccountDetail = new BankAccountDetail() {{
                                accountNumber = "fuga";
                                accountType = "reprehenderit";
                                bankAccountName = "quidem";
                                bankAccountUUID = "fugiat";
                                bankBicSwift = "ut";
                                bankCity = "eum";
                                bankCode = "suscipit";
                                bankName = "assumenda";
                                branchCode = "eos";
                                checkCode = "praesentium";
                                countryCode = "SE";
                                currencyCode = "veritatis";
                                iban = "ipsa";
                                ownerCity = "id";
                                ownerCountryCode = "quidem";
                                ownerDateOfBirth = "neque";
                                ownerHouseNumberOrName = "quo";
                                ownerName = "illum";
                                ownerNationality = "quo";
                                ownerPostalCode = "fuga";
                                ownerState = "eius";
                                ownerStreet = "eos";
                                primaryAccount = false;
                                taxId = "voluptas";
                                urlForVerification = "ab";
                            }};
                        }}),
                        add(new BankAccountDetailWrapper() {{
                            bankAccountDetail = new BankAccountDetail() {{
                                accountNumber = "cupiditate";
                                accountType = "consequatur";
                                bankAccountName = "tempora";
                                bankAccountUUID = "debitis";
                                bankBicSwift = "ipsam";
                                bankCity = "aspernatur";
                                bankCode = "sequi";
                                bankName = "quo";
                                branchCode = "esse";
                                checkCode = "recusandae";
                                countryCode = "AT";
                                currencyCode = "distinctio";
                                iban = "quod";
                                ownerCity = "dignissimos";
                                ownerCountryCode = "inventore";
                                ownerDateOfBirth = "nihil";
                                ownerHouseNumberOrName = "totam";
                                ownerName = "accusamus";
                                ownerNationality = "aliquam";
                                ownerPostalCode = "odio";
                                ownerState = "occaecati";
                                ownerStreet = "commodi";
                                primaryAccount = false;
                                taxId = "sapiente";
                                urlForVerification = "dolores";
                            }};
                        }}),
                    }};
                    businessDetails = new BusinessDetails() {{
                        doingBusinessAs = "deserunt";
                        legalBusinessName = "molestiae";
                        listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompanyWrapper[]{{
                            add(new UltimateParentCompanyWrapper() {{
                                ultimateParentCompany = new UltimateParentCompany() {{
                                    address = new ViasAddress() {{
                                        city = "Keelingstad";
                                        country = "Lithuania";
                                        houseNumberOrName = "consequuntur";
                                        postalCode = "16625-1331";
                                        stateOrProvince = "sapiente";
                                        street = "11955 Jacques Unions";
                                    }};
                                    businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                        legalBusinessName = "accusamus";
                                        registrationNumber = "veritatis";
                                        stockExchange = "esse";
                                        stockNumber = "quod";
                                        stockTicker = "nam";
                                    }};
                                    ultimateParentCompanyCode = "vero";
                                }};
                            }}),
                        }};
                        registrationNumber = "aliquid";
                        shareholders = new org.openapis.openapi.models.shared.ShareholderContactWrapper[]{{
                            add(new ShareholderContactWrapper() {{
                                shareholderContact = new ShareholderContact() {{
                                    address = new ViasAddress() {{
                                        city = "Janesville";
                                        country = "Papua New Guinea";
                                        houseNumberOrName = "molestiae";
                                        postalCode = "53770-6727";
                                        stateOrProvince = "consequuntur";
                                        street = "73924 McLaughlin Villages";
                                    }};
                                    email = "Keara95@hotmail.com";
                                    fullPhoneNumber = "error";
                                    jobTitle = "Customer Configuration Assistant";
                                    name = new ViasName() {{
                                        firstName = "Carlotta";
                                        gender = ViasNameGenderEnum.UNKNOWN;
                                        infix = "asperiores";
                                        lastName = "Schultz";
                                    }};
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "veritatis";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                    expirationDate = "quasi";
                                                    issuerCountry = "similique";
                                                    issuerState = "culpa";
                                                    number = "aliquid";
                                                    type = PersonalDocumentDataTypeEnum.VISA;
                                                }};
                                            }}),
                                        }};
                                        idNumber = "earum";
                                        nationality = "vel";
                                    }};
                                    phoneNumber = new ViasPhoneNumber() {{
                                        phoneCountryCode = "in";
                                        phoneNumber = "eius";
                                        phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                    }};
                                    shareholderCode = "illum";
                                    shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                    webAddress = "accusantium";
                                }};
                            }}),
                        }};
                        signatories = new org.openapis.openapi.models.shared.SignatoryContactWrapper[]{{
                            add(new SignatoryContactWrapper() {{
                                signatoryContact = new SignatoryContact() {{
                                    address = new ViasAddress() {{
                                        city = "Buena Park";
                                        country = "Guatemala";
                                        houseNumberOrName = "reprehenderit";
                                        postalCode = "30518";
                                        stateOrProvince = "ex";
                                        street = "9606 Boyle Trace";
                                    }};
                                    email = "Jacinto8@gmail.com";
                                    fullPhoneNumber = "consectetur";
                                    jobTitle = "Dynamic Communications Assistant";
                                    name = new ViasName() {{
                                        firstName = "Alexanne";
                                        gender = ViasNameGenderEnum.FEMALE;
                                        infix = "aut";
                                        lastName = "Langworth";
                                    }};
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "eum";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                    expirationDate = "ab";
                                                    issuerCountry = "corrupti";
                                                    issuerState = "non";
                                                    number = "voluptatem";
                                                    type = PersonalDocumentDataTypeEnum.ID;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                    expirationDate = "numquam";
                                                    issuerCountry = "impedit";
                                                    issuerState = "explicabo";
                                                    number = "voluptas";
                                                    type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                    expirationDate = "dicta";
                                                    issuerCountry = "maiores";
                                                    issuerState = "natus";
                                                    number = "velit";
                                                    type = PersonalDocumentDataTypeEnum.VISA;
                                                }};
                                            }}),
                                        }};
                                        idNumber = "asperiores";
                                        nationality = "aperiam";
                                    }};
                                    phoneNumber = new ViasPhoneNumber() {{
                                        phoneCountryCode = "ea";
                                        phoneNumber = "quaerat";
                                        phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                    }};
                                    signatoryCode = "repellendus";
                                    signatoryReference = "officia";
                                    webAddress = "maxime";
                                }};
                            }}),
                            add(new SignatoryContactWrapper() {{
                                signatoryContact = new SignatoryContact() {{
                                    address = new ViasAddress() {{
                                        city = "Lucienneworth";
                                        country = "Guinea-Bissau";
                                        houseNumberOrName = "quae";
                                        postalCode = "78202";
                                        stateOrProvince = "fuga";
                                        street = "3266 Larson Summit";
                                    }};
                                    email = "Jesse.Luettgen@yahoo.com";
                                    fullPhoneNumber = "possimus";
                                    jobTitle = "International Mobility Administrator";
                                    name = new ViasName() {{
                                        firstName = "Isadore";
                                        gender = ViasNameGenderEnum.FEMALE;
                                        infix = "reiciendis";
                                        lastName = "Shields";
                                    }};
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "nemo";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                    expirationDate = "aliquid";
                                                    issuerCountry = "aperiam";
                                                    issuerState = "cum";
                                                    number = "consectetur";
                                                    type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                    expirationDate = "earum";
                                                    issuerCountry = "facere";
                                                    issuerState = "numquam";
                                                    number = "doloribus";
                                                    type = PersonalDocumentDataTypeEnum.ID;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                    expirationDate = "quidem";
                                                    issuerCountry = "saepe";
                                                    issuerState = "necessitatibus";
                                                    number = "dolore";
                                                    type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                }};
                                            }}),
                                            add(new PersonalDocumentDataWrapper() {{
                                                personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                    expirationDate = "adipisci";
                                                    issuerCountry = "non";
                                                    issuerState = "amet";
                                                    number = "beatae";
                                                    type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                }};
                                            }}),
                                        }};
                                        idNumber = "debitis";
                                        nationality = "consectetur";
                                    }};
                                    phoneNumber = new ViasPhoneNumber() {{
                                        phoneCountryCode = "corporis";
                                        phoneNumber = "harum";
                                        phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                    }};
                                    signatoryCode = "ipsa";
                                    signatoryReference = "voluptates";
                                    webAddress = "libero";
                                }};
                            }}),
                        }};
                        taxId = "vitae";
                    }};;
                    email = "Lonie37@hotmail.com";
                    fullPhoneNumber = "voluptas";
                    individualDetails = new IndividualDetails() {{
                        name = new ViasName() {{
                            firstName = "Garland";
                            gender = ViasNameGenderEnum.MALE;
                            infix = "nobis";
                            lastName = "Parisian";
                        }};;
                        personalData = new ViasPersonalData() {{
                            dateOfBirth = "adipisci";
                            documentData = new org.openapis.openapi.models.shared.PersonalDocumentDataWrapper[]{{
                                add(new PersonalDocumentDataWrapper() {{
                                    personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                        expirationDate = "dolores";
                                        issuerCountry = "blanditiis";
                                        issuerState = "in";
                                        number = "dolore";
                                        type = PersonalDocumentDataTypeEnum.ID;
                                    }};
                                }}),
                                add(new PersonalDocumentDataWrapper() {{
                                    personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                        expirationDate = "temporibus";
                                        issuerCountry = "ullam";
                                        issuerState = "adipisci";
                                        number = "cum";
                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                    }};
                                }}),
                                add(new PersonalDocumentDataWrapper() {{
                                    personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                        expirationDate = "hic";
                                        issuerCountry = "nesciunt";
                                        issuerState = "culpa";
                                        number = "corrupti";
                                        type = PersonalDocumentDataTypeEnum.VISA;
                                    }};
                                }}),
                                add(new PersonalDocumentDataWrapper() {{
                                    personalDocumentData = new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                        expirationDate = "hic";
                                        issuerCountry = "exercitationem";
                                        issuerState = "nobis";
                                        number = "sit";
                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                    }};
                                }}),
                            }};
                            idNumber = "reiciendis";
                            nationality = "explicabo";
                        }};;
                    }};;
                    lastReviewDate = "asperiores";
                    merchantCategoryCode = "facilis";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("expedita", "ab");
                        put("iste", "dolore");
                    }};
                    principalBusinessAddress = new ViasAddress() {{
                        city = "Creminport";
                        country = "Iraq";
                        houseNumberOrName = "quidem";
                        postalCode = "36139";
                        stateOrProvince = "debitis";
                        street = "90592 Laron Flats";
                    }};;
                    webAddress = "necessitatibus";
                }};;
                description = "ipsum";
                primaryCurrency = "ea";
                processingTier = 579912;
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

            org.openapis.openapi.models.shared.UpdateAccountHolderStateRequest req = new UpdateAccountHolderStateRequest("quos", false, UpdateAccountHolderStateRequestStateTypeEnum.PROCESSING) {{
                reason = "tempora";
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
