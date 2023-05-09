# accountHolders

### Available Operations

* [postCloseAccountHolder](#postcloseaccountholder) - Close an account holder
* [postCloseStores](#postclosestores) - Close stores
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

## postCloseStores

Closes stores associated with an account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCloseStoresResponse;
import org.openapis.openapi.models.operations.PostCloseStoresSecurity;
import org.openapis.openapi.models.shared.CloseStoresRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CloseStoresRequest req = new CloseStoresRequest("distinctio",                 new String[]{{
                                add("unde"),
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }});            

            PostCloseStoresResponse res = sdk.accountHolders.postCloseStores(req, new PostCloseStoresSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.genericResponse != null) {
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
import org.openapis.openapi.models.shared.BusinessDetails;
import org.openapis.openapi.models.shared.CreateAccountHolderRequest;
import org.openapis.openapi.models.shared.CreateAccountHolderRequestLegalEntityEnum;
import org.openapis.openapi.models.shared.IndividualDetails;
import org.openapis.openapi.models.shared.PayoutMethod;
import org.openapis.openapi.models.shared.PersonalDocumentData;
import org.openapis.openapi.models.shared.PersonalDocumentDataTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ShareholderContact;
import org.openapis.openapi.models.shared.ShareholderContactShareholderTypeEnum;
import org.openapis.openapi.models.shared.SignatoryContact;
import org.openapis.openapi.models.shared.StoreDetail;
import org.openapis.openapi.models.shared.StoreDetailShopperInteractionEnum;
import org.openapis.openapi.models.shared.StoreDetailStatusEnum;
import org.openapis.openapi.models.shared.UltimateParentCompany;
import org.openapis.openapi.models.shared.UltimateParentCompanyBusinessDetails;
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

            org.openapis.openapi.models.shared.CreateAccountHolderRequest req = new CreateAccountHolderRequest("vel",                 new AccountHolderDetails() {{
                                address = new ViasAddress() {{
                                    city = "Oberbrunnerbury";
                                    country = "Jamaica";
                                    houseNumberOrName = "magnam";
                                    postalCode = "09234-7854";
                                    stateOrProvince = "excepturi";
                                    street = "9803 Lydia Bridge";
                                }};;
                                bankAccountDetails = new org.openapis.openapi.models.shared.BankAccountDetail[]{{
                                    add(new BankAccountDetail() {{
                                        accountNumber = "repellendus";
                                        accountType = "sapiente";
                                        bankAccountName = "quo";
                                        bankAccountReference = "odit";
                                        bankAccountUUID = "at";
                                        bankBicSwift = "at";
                                        bankCity = "maiores";
                                        bankCode = "molestiae";
                                        bankName = "quod";
                                        branchCode = "quod";
                                        checkCode = "esse";
                                        countryCode = "LK";
                                        currencyCode = "porro";
                                        iban = "dolorum";
                                        ownerCity = "dicta";
                                        ownerCountryCode = "nam";
                                        ownerDateOfBirth = "officia";
                                        ownerHouseNumberOrName = "occaecati";
                                        ownerName = "fugit";
                                        ownerNationality = "deleniti";
                                        ownerPostalCode = "hic";
                                        ownerState = "optio";
                                        ownerStreet = "totam";
                                        primaryAccount = false;
                                        taxId = "beatae";
                                        urlForVerification = "commodi";
                                    }}),
                                    add(new BankAccountDetail() {{
                                        accountNumber = "molestiae";
                                        accountType = "modi";
                                        bankAccountName = "qui";
                                        bankAccountReference = "impedit";
                                        bankAccountUUID = "cum";
                                        bankBicSwift = "esse";
                                        bankCity = "ipsum";
                                        bankCode = "excepturi";
                                        bankName = "aspernatur";
                                        branchCode = "perferendis";
                                        checkCode = "ad";
                                        countryCode = "MU";
                                        currencyCode = "sed";
                                        iban = "iste";
                                        ownerCity = "dolor";
                                        ownerCountryCode = "natus";
                                        ownerDateOfBirth = "laboriosam";
                                        ownerHouseNumberOrName = "hic";
                                        ownerName = "saepe";
                                        ownerNationality = "fuga";
                                        ownerPostalCode = "in";
                                        ownerState = "corporis";
                                        ownerStreet = "iste";
                                        primaryAccount = false;
                                        taxId = "iure";
                                        urlForVerification = "saepe";
                                    }}),
                                }};
                                bankAggregatorDataReference = "quidem";
                                businessDetails = new BusinessDetails() {{
                                    doingBusinessAs = "architecto";
                                    legalBusinessName = "ipsa";
                                    listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                                        add(new UltimateParentCompany() {{
                                            address = new ViasAddress() {{
                                                city = "O'Harachester";
                                                country = "Chad";
                                                houseNumberOrName = "dolorem";
                                                postalCode = "17363";
                                                stateOrProvince = "minima";
                                                street = "0469 Brakus Plain";
                                            }};
                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                legalBusinessName = "dolorem";
                                                registrationNumber = "culpa";
                                                stockExchange = "consequuntur";
                                                stockNumber = "repellat";
                                                stockTicker = "mollitia";
                                            }};
                                            ultimateParentCompanyCode = "occaecati";
                                        }}),
                                        add(new UltimateParentCompany() {{
                                            address = new ViasAddress() {{
                                                city = "South Jamil";
                                                country = "Kuwait";
                                                houseNumberOrName = "velit";
                                                postalCode = "13166-3171";
                                                stateOrProvince = "tenetur";
                                                street = "6800 Smitham Points";
                                            }};
                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                legalBusinessName = "quasi";
                                                registrationNumber = "reiciendis";
                                                stockExchange = "voluptatibus";
                                                stockNumber = "vero";
                                                stockTicker = "nihil";
                                            }};
                                            ultimateParentCompanyCode = "praesentium";
                                        }}),
                                        add(new UltimateParentCompany() {{
                                            address = new ViasAddress() {{
                                                city = "Baltimore";
                                                country = "Mozambique";
                                                houseNumberOrName = "voluptate";
                                                postalCode = "00429-1324";
                                                stateOrProvince = "dicta";
                                                street = "384 Bergnaum Extension";
                                            }};
                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                legalBusinessName = "quidem";
                                                registrationNumber = "molestias";
                                                stockExchange = "excepturi";
                                                stockNumber = "pariatur";
                                                stockTicker = "modi";
                                            }};
                                            ultimateParentCompanyCode = "praesentium";
                                        }}),
                                        add(new UltimateParentCompany() {{
                                            address = new ViasAddress() {{
                                                city = "Terenceland";
                                                country = "Turks and Caicos Islands";
                                                houseNumberOrName = "sint";
                                                postalCode = "92306";
                                                stateOrProvince = "quibusdam";
                                                street = "67822 Grant Oval";
                                            }};
                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                legalBusinessName = "quos";
                                                registrationNumber = "perferendis";
                                                stockExchange = "magni";
                                                stockNumber = "assumenda";
                                                stockTicker = "ipsam";
                                            }};
                                            ultimateParentCompanyCode = "alias";
                                        }}),
                                    }};
                                    registrationNumber = "fugit";
                                    shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                                        add(new ShareholderContact() {{
                                            address = new ViasAddress() {{
                                                city = "Dominiquecester";
                                                country = "Russian Federation";
                                                houseNumberOrName = "labore";
                                                postalCode = "42753-5856";
                                                stateOrProvince = "dolor";
                                                street = "964 Rose Wall";
                                            }};
                                            email = "Bettye_Gulgowski41@hotmail.com";
                                            fullPhoneNumber = "aliquid";
                                            jobTitle = "International Accountability Engineer";
                                            name = new ViasName() {{
                                                firstName = "Kristian";
                                                gender = ViasNameGenderEnum.MALE;
                                                infix = "accusamus";
                                                lastName = "Wintheiser";
                                            }};
                                            personalData = new ViasPersonalData() {{
                                                dateOfBirth = "quidem";
                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                        expirationDate = "nam";
                                                        issuerCountry = "id";
                                                        issuerState = "blanditiis";
                                                        number = "deleniti";
                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                    }}),
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                        expirationDate = "deserunt";
                                                        issuerCountry = "nisi";
                                                        issuerState = "vel";
                                                        number = "natus";
                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                    }}),
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                        expirationDate = "perferendis";
                                                        issuerCountry = "nihil";
                                                        issuerState = "magnam";
                                                        number = "distinctio";
                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                    }}),
                                                }};
                                                nationality = "labore";
                                            }};
                                            phoneNumber = new ViasPhoneNumber() {{
                                                phoneCountryCode = "suscipit";
                                                phoneNumber = "natus";
                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                            }};
                                            shareholderCode = "eum";
                                            shareholderReference = "vero";
                                            shareholderType = ShareholderContactShareholderTypeEnum.CONTROLLER;
                                            webAddress = "architecto";
                                        }}),
                                        add(new ShareholderContact() {{
                                            address = new ViasAddress() {{
                                                city = "North Kevon";
                                                country = "Guatemala";
                                                houseNumberOrName = "provident";
                                                postalCode = "50696-3428";
                                                stateOrProvince = "odit";
                                                street = "0498 Rachel Mews";
                                            }};
                                            email = "Isaias91@hotmail.com";
                                            fullPhoneNumber = "ullam";
                                            jobTitle = "International Applications Strategist";
                                            name = new ViasName() {{
                                                firstName = "Roman";
                                                gender = ViasNameGenderEnum.MALE;
                                                infix = "saepe";
                                                lastName = "Stroman";
                                            }};
                                            personalData = new ViasPersonalData() {{
                                                dateOfBirth = "accusantium";
                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                        expirationDate = "praesentium";
                                                        issuerCountry = "natus";
                                                        issuerState = "magni";
                                                        number = "sunt";
                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                    }}),
                                                }};
                                                nationality = "pariatur";
                                            }};
                                            phoneNumber = new ViasPhoneNumber() {{
                                                phoneCountryCode = "maxime";
                                                phoneNumber = "ea";
                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                            }};
                                            shareholderCode = "odit";
                                            shareholderReference = "ea";
                                            shareholderType = ShareholderContactShareholderTypeEnum.CONTROLLER;
                                            webAddress = "ab";
                                        }}),
                                        add(new ShareholderContact() {{
                                            address = new ViasAddress() {{
                                                city = "Plano";
                                                country = "Haiti";
                                                houseNumberOrName = "voluptate";
                                                postalCode = "70839";
                                                stateOrProvince = "perferendis";
                                                street = "207 Tyreek Ridges";
                                            }};
                                            email = "Celestine.Hayes@hotmail.com";
                                            fullPhoneNumber = "eaque";
                                            jobTitle = "National Implementation Officer";
                                            name = new ViasName() {{
                                                firstName = "Aidan";
                                                gender = ViasNameGenderEnum.MALE;
                                                infix = "minus";
                                                lastName = "Kohler";
                                            }};
                                            personalData = new ViasPersonalData() {{
                                                dateOfBirth = "dolor";
                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                        expirationDate = "nostrum";
                                                        issuerCountry = "hic";
                                                        issuerState = "recusandae";
                                                        number = "omnis";
                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                    }}),
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                        expirationDate = "voluptatem";
                                                        issuerCountry = "porro";
                                                        issuerState = "consequuntur";
                                                        number = "blanditiis";
                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                    }}),
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                        expirationDate = "occaecati";
                                                        issuerCountry = "rerum";
                                                        issuerState = "adipisci";
                                                        number = "asperiores";
                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                    }}),
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                        expirationDate = "iste";
                                                        issuerCountry = "dolorum";
                                                        issuerState = "deleniti";
                                                        number = "pariatur";
                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                    }}),
                                                }};
                                                nationality = "libero";
                                            }};
                                            phoneNumber = new ViasPhoneNumber() {{
                                                phoneCountryCode = "delectus";
                                                phoneNumber = "quaerat";
                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                            }};
                                            shareholderCode = "aliquid";
                                            shareholderReference = "dolorem";
                                            shareholderType = ShareholderContactShareholderTypeEnum.CONTROLLER;
                                            webAddress = "dolor";
                                        }}),
                                    }};
                                    signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                                        add(new SignatoryContact() {{
                                            address = new ViasAddress() {{
                                                city = "Fort Kevin";
                                                country = "Rwanda";
                                                houseNumberOrName = "voluptate";
                                                postalCode = "92620";
                                                stateOrProvince = "ipsa";
                                                street = "44386 Hodkiewicz Pass";
                                            }};
                                            email = "Kari.Bailey74@gmail.com";
                                            fullPhoneNumber = "dolorum";
                                            jobTitle = "Central Division Technician";
                                            name = new ViasName() {{
                                                firstName = "Kaitlin";
                                                gender = ViasNameGenderEnum.FEMALE;
                                                infix = "necessitatibus";
                                                lastName = "Rau";
                                            }};
                                            personalData = new ViasPersonalData() {{
                                                dateOfBirth = "asperiores";
                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                        expirationDate = "ipsum";
                                                        issuerCountry = "voluptate";
                                                        issuerState = "id";
                                                        number = "saepe";
                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                    }}),
                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                        expirationDate = "perferendis";
                                                        issuerCountry = "amet";
                                                        issuerState = "optio";
                                                        number = "accusamus";
                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                    }}),
                                                }};
                                                nationality = "suscipit";
                                            }};
                                            phoneNumber = new ViasPhoneNumber() {{
                                                phoneCountryCode = "deserunt";
                                                phoneNumber = "provident";
                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                            }};
                                            signatoryCode = "repellendus";
                                            signatoryReference = "totam";
                                            webAddress = "similique";
                                        }}),
                                    }};
                                    taxId = "alias";
                                }};;
                                email = "Elvis_Goodwin@hotmail.com";
                                fullPhoneNumber = "officiis";
                                individualDetails = new IndividualDetails() {{
                                    name = new ViasName() {{
                                        firstName = "Christophe";
                                        gender = ViasNameGenderEnum.UNKNOWN;
                                        infix = "a";
                                        lastName = "Klocko";
                                    }};;
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "harum";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                expirationDate = "ipsum";
                                                issuerCountry = "quisquam";
                                                issuerState = "tenetur";
                                                number = "amet";
                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                            }}),
                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                expirationDate = "numquam";
                                                issuerCountry = "enim";
                                                issuerState = "dolorem";
                                                number = "sapiente";
                                                type = PersonalDocumentDataTypeEnum.PASSPORT;
                                            }}),
                                        }};
                                        nationality = "sit";
                                    }};;
                                }};;
                                lastReviewDate = "expedita";
                                merchantCategoryCode = "neque";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("vel", "libero");
                                }};
                                payoutMethods = new org.openapis.openapi.models.shared.PayoutMethod[]{{
                                    add(new PayoutMethod("cupiditate", "maxime", "pariatur") {{
                                        merchantAccount = "deserunt";
                                        payoutMethodCode = "quam";
                                        payoutMethodReference = "ipsum";
                                        recurringDetailReference = "incidunt";
                                        shopperReference = "qui";
                                    }}),
                                    add(new PayoutMethod("aspernatur", "dolores", "distinctio") {{
                                        merchantAccount = "soluta";
                                        payoutMethodCode = "dicta";
                                        payoutMethodReference = "laborum";
                                        recurringDetailReference = "totam";
                                        shopperReference = "incidunt";
                                    }}),
                                }};
                                principalBusinessAddress = new ViasAddress() {{
                                    city = "Hyattport";
                                    country = "Mauritius";
                                    houseNumberOrName = "temporibus";
                                    postalCode = "21141";
                                    stateOrProvince = "ullam";
                                    street = "907 Rohan Cliffs";
                                }};;
                                storeDetails = new org.openapis.openapi.models.shared.StoreDetail[]{{
                                    add(new StoreDetail(                new ViasAddress() {{
                                                        city = "Waterbury";
                                                        country = "Lesotho";
                                                        houseNumberOrName = "hic";
                                                        postalCode = "74678-4288";
                                                        stateOrProvince = "sequi";
                                                        street = "7093 Cormier Shore";
                                                    }};, "maiores", "doloribus") {{
                                        address = new ViasAddress() {{
                                            city = "North Nellie";
                                            country = "Marshall Islands";
                                            houseNumberOrName = "tempore";
                                            postalCode = "09222-2610";
                                            stateOrProvince = "aut";
                                            street = "9068 Wyman Forge";
                                        }};
                                        fullPhoneNumber = "facilis";
                                        logo = "cupiditate";
                                        merchantAccount = "qui";
                                        merchantCategoryCode = "quae";
                                        merchantHouseNumber = "laudantium";
                                        phoneNumber = new ViasPhoneNumber() {{
                                            phoneCountryCode = "odio";
                                            phoneNumber = "occaecati";
                                            phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                        }};
                                        shopperInteraction = StoreDetailShopperInteractionEnum.POS;
                                        splitConfigurationUUID = "vero";
                                        status = StoreDetailStatusEnum.INACTIVE_WITH_MODIFICATIONS;
                                        store = "quis";
                                        storeName = "ipsum";
                                        storeReference = "delectus";
                                        virtualAccount = "voluptate";
                                        webAddress = "consectetur";
                                    }}),
                                    add(new StoreDetail(                new ViasAddress() {{
                                                        city = "Camarillo";
                                                        country = "Ghana";
                                                        houseNumberOrName = "eaque";
                                                        postalCode = "70057-3180";
                                                        stateOrProvince = "non";
                                                        street = "66824 Nia Motorway";
                                                    }};, "assumenda", "nulla") {{
                                        address = new ViasAddress() {{
                                            city = "Nickmouth";
                                            country = "Afghanistan";
                                            houseNumberOrName = "officia";
                                            postalCode = "34148";
                                            stateOrProvince = "magnam";
                                            street = "45129 Gustave Throughway";
                                        }};
                                        fullPhoneNumber = "excepturi";
                                        logo = "voluptatibus";
                                        merchantAccount = "nostrum";
                                        merchantCategoryCode = "sapiente";
                                        merchantHouseNumber = "quisquam";
                                        phoneNumber = new ViasPhoneNumber() {{
                                            phoneCountryCode = "saepe";
                                            phoneNumber = "ea";
                                            phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                        }};
                                        shopperInteraction = StoreDetailShopperInteractionEnum.ECOMMERCE;
                                        splitConfigurationUUID = "veniam";
                                        status = StoreDetailStatusEnum.CLOSED;
                                        store = "inventore";
                                        storeName = "magnam";
                                        storeReference = "ea";
                                        virtualAccount = "quo";
                                        webAddress = "consectetur";
                                    }}),
                                    add(new StoreDetail(                new ViasAddress() {{
                                                        city = "West Ansleystead";
                                                        country = "Algeria";
                                                        houseNumberOrName = "tempora";
                                                        postalCode = "31174-9077";
                                                        stateOrProvince = "dignissimos";
                                                        street = "45834 Johns Vista";
                                                    }};, "dolores", "deserunt") {{
                                        address = new ViasAddress() {{
                                            city = "Lake Ava";
                                            country = "Estonia";
                                            houseNumberOrName = "numquam";
                                            postalCode = "50434";
                                            stateOrProvince = "eius";
                                            street = "4564 Stehr Forges";
                                        }};
                                        fullPhoneNumber = "eum";
                                        logo = "suscipit";
                                        merchantAccount = "assumenda";
                                        merchantCategoryCode = "eos";
                                        merchantHouseNumber = "praesentium";
                                        phoneNumber = new ViasPhoneNumber() {{
                                            phoneCountryCode = "quisquam";
                                            phoneNumber = "veritatis";
                                            phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                        }};
                                        shopperInteraction = StoreDetailShopperInteractionEnum.POS;
                                        splitConfigurationUUID = "quidem";
                                        status = StoreDetailStatusEnum.CLOSED;
                                        store = "quo";
                                        storeName = "illum";
                                        storeReference = "quo";
                                        virtualAccount = "fuga";
                                        webAddress = "eius";
                                    }}),
                                    add(new StoreDetail(                new ViasAddress() {{
                                                        city = "Lake Nikki";
                                                        country = "Anguilla";
                                                        houseNumberOrName = "culpa";
                                                        postalCode = "27107-3924";
                                                        stateOrProvince = "blanditiis";
                                                        street = "9854 Vance Passage";
                                                    }};, "sint", "pariatur") {{
                                        address = new ViasAddress() {{
                                            city = "Alfonzofield";
                                            country = "Italy";
                                            houseNumberOrName = "quas";
                                            postalCode = "15166-2513";
                                            stateOrProvince = "nisi";
                                            street = "91119 Little Cliff";
                                        }};
                                        fullPhoneNumber = "esse";
                                        logo = "eveniet";
                                        merchantAccount = "accusamus";
                                        merchantCategoryCode = "veritatis";
                                        merchantHouseNumber = "esse";
                                        phoneNumber = new ViasPhoneNumber() {{
                                            phoneCountryCode = "quod";
                                            phoneNumber = "nam";
                                            phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                        }};
                                        shopperInteraction = StoreDetailShopperInteractionEnum.ECOMMERCE;
                                        splitConfigurationUUID = "quasi";
                                        status = StoreDetailStatusEnum.PENDING;
                                        store = "vel";
                                        storeName = "harum";
                                        storeReference = "molestiae";
                                        virtualAccount = "rerum";
                                        webAddress = "occaecati";
                                    }}),
                                }};
                                webAddress = "possimus";
                            }};, CreateAccountHolderRequestLegalEntityEnum.BUSINESS) {{
                createDefaultAccount = false;
                description = "eveniet";
                primaryCurrency = "asperiores";
                processingTier = 815524;
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
                accountCode = "veritatis";
                accountHolderCode = "consequuntur";
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

            org.openapis.openapi.models.shared.GetTaxFormRequest req = new GetTaxFormRequest("quasi", "similique", 633608);            

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

            org.openapis.openapi.models.shared.SuspendAccountHolderRequest req = new SuspendAccountHolderRequest("aliquid");            

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

            org.openapis.openapi.models.shared.UnSuspendAccountHolderRequest req = new UnSuspendAccountHolderRequest("tenetur");            

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
import org.openapis.openapi.models.shared.BusinessDetails;
import org.openapis.openapi.models.shared.IndividualDetails;
import org.openapis.openapi.models.shared.PayoutMethod;
import org.openapis.openapi.models.shared.PersonalDocumentData;
import org.openapis.openapi.models.shared.PersonalDocumentDataTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ShareholderContact;
import org.openapis.openapi.models.shared.ShareholderContactShareholderTypeEnum;
import org.openapis.openapi.models.shared.SignatoryContact;
import org.openapis.openapi.models.shared.StoreDetail;
import org.openapis.openapi.models.shared.StoreDetailShopperInteractionEnum;
import org.openapis.openapi.models.shared.StoreDetailStatusEnum;
import org.openapis.openapi.models.shared.UltimateParentCompany;
import org.openapis.openapi.models.shared.UltimateParentCompanyBusinessDetails;
import org.openapis.openapi.models.shared.UpdateAccountHolderRequest;
import org.openapis.openapi.models.shared.UpdateAccountHolderRequestLegalEntityEnum;
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

            org.openapis.openapi.models.shared.UpdateAccountHolderRequest req = new UpdateAccountHolderRequest("quae") {{
                accountHolderDetails = new AccountHolderDetails() {{
                    address = new ViasAddress() {{
                        city = "Jackson";
                        country = "Jordan";
                        houseNumberOrName = "eius";
                        postalCode = "87039-1343";
                        stateOrProvince = "nisi";
                        street = "51845 Parisian Club";
                    }};;
                    bankAccountDetails = new org.openapis.openapi.models.shared.BankAccountDetail[]{{
                        add(new BankAccountDetail() {{
                            accountNumber = "tenetur";
                            accountType = "quasi";
                            bankAccountName = "at";
                            bankAccountReference = "et";
                            bankAccountUUID = "voluptate";
                            bankBicSwift = "ipsa";
                            bankCity = "minima";
                            bankCode = "veritatis";
                            bankName = "consectetur";
                            branchCode = "adipisci";
                            checkCode = "iste";
                            countryCode = "SV";
                            currencyCode = "accusantium";
                            iban = "rem";
                            ownerCity = "aut";
                            ownerCountryCode = "laudantium";
                            ownerDateOfBirth = "eum";
                            ownerHouseNumberOrName = "mollitia";
                            ownerName = "ab";
                            ownerNationality = "corrupti";
                            ownerPostalCode = "non";
                            ownerState = "voluptatem";
                            ownerStreet = "dolor";
                            primaryAccount = false;
                            taxId = "occaecati";
                            urlForVerification = "numquam";
                        }}),
                        add(new BankAccountDetail() {{
                            accountNumber = "impedit";
                            accountType = "explicabo";
                            bankAccountName = "voluptas";
                            bankAccountReference = "aut";
                            bankAccountUUID = "dignissimos";
                            bankBicSwift = "dicta";
                            bankCity = "maiores";
                            bankCode = "natus";
                            bankName = "velit";
                            branchCode = "voluptatibus";
                            checkCode = "voluptas";
                            countryCode = "ZA";
                            currencyCode = "aperiam";
                            iban = "ea";
                            ownerCity = "quaerat";
                            ownerCountryCode = "consequuntur";
                            ownerDateOfBirth = "repellendus";
                            ownerHouseNumberOrName = "officia";
                            ownerName = "maxime";
                            ownerNationality = "dignissimos";
                            ownerPostalCode = "officia";
                            ownerState = "asperiores";
                            ownerStreet = "nemo";
                            primaryAccount = false;
                            taxId = "quae";
                            urlForVerification = "quaerat";
                        }}),
                        add(new BankAccountDetail() {{
                            accountNumber = "porro";
                            accountType = "quod";
                            bankAccountName = "labore";
                            bankAccountReference = "ab";
                            bankAccountUUID = "adipisci";
                            bankBicSwift = "fuga";
                            bankCity = "id";
                            bankCode = "suscipit";
                            bankName = "velit";
                            branchCode = "culpa";
                            checkCode = "est";
                            countryCode = "UG";
                            currencyCode = "totam";
                            iban = "fugiat";
                            ownerCity = "vel";
                            ownerCountryCode = "ducimus";
                            ownerDateOfBirth = "quos";
                            ownerHouseNumberOrName = "vel";
                            ownerName = "labore";
                            ownerNationality = "possimus";
                            ownerPostalCode = "facilis";
                            ownerState = "cum";
                            ownerStreet = "commodi";
                            primaryAccount = false;
                            taxId = "in";
                            urlForVerification = "corporis";
                        }}),
                    }};
                    bankAggregatorDataReference = "reiciendis";
                    businessDetails = new BusinessDetails() {{
                        doingBusinessAs = "assumenda";
                        legalBusinessName = "nemo";
                        listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                            add(new UltimateParentCompany() {{
                                address = new ViasAddress() {{
                                    city = "North Myrtice";
                                    country = "Denmark";
                                    houseNumberOrName = "in";
                                    postalCode = "98293";
                                    stateOrProvince = "reiciendis";
                                    street = "982 Zachariah Field";
                                }};
                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                    legalBusinessName = "non";
                                    registrationNumber = "amet";
                                    stockExchange = "beatae";
                                    stockNumber = "dignissimos";
                                    stockTicker = "a";
                                }};
                                ultimateParentCompanyCode = "debitis";
                            }}),
                            add(new UltimateParentCompany() {{
                                address = new ViasAddress() {{
                                    city = "West Mary";
                                    country = "Holy See (Vatican City State)";
                                    houseNumberOrName = "ipsa";
                                    postalCode = "71862-1333";
                                    stateOrProvince = "minima";
                                    street = "627 Joanne Lake";
                                }};
                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                    legalBusinessName = "dolore";
                                    registrationNumber = "aliquam";
                                    stockExchange = "officiis";
                                    stockNumber = "temporibus";
                                    stockTicker = "ullam";
                                }};
                                ultimateParentCompanyCode = "adipisci";
                            }}),
                            add(new UltimateParentCompany() {{
                                address = new ViasAddress() {{
                                    city = "Kuvalisstad";
                                    country = "United Kingdom";
                                    houseNumberOrName = "nesciunt";
                                    postalCode = "58593-7061";
                                    stateOrProvince = "reiciendis";
                                    street = "97470 Greenholt Points";
                                }};
                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                    legalBusinessName = "sed";
                                    registrationNumber = "in";
                                    stockExchange = "commodi";
                                    stockNumber = "quidem";
                                    stockTicker = "explicabo";
                                }};
                                ultimateParentCompanyCode = "voluptas";
                            }}),
                            add(new UltimateParentCompany() {{
                                address = new ViasAddress() {{
                                    city = "Bradtkebury";
                                    country = "Vanuatu";
                                    houseNumberOrName = "debitis";
                                    postalCode = "90592";
                                    stateOrProvince = "sed";
                                    street = "2824 Lueilwitz Wall";
                                }};
                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                    legalBusinessName = "tempora";
                                    registrationNumber = "tempora";
                                    stockExchange = "voluptate";
                                    stockNumber = "reiciendis";
                                    stockTicker = "ex";
                                }};
                                ultimateParentCompanyCode = "sit";
                            }}),
                        }};
                        registrationNumber = "non";
                        shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                            add(new ShareholderContact() {{
                                address = new ViasAddress() {{
                                    city = "Melodyborough";
                                    country = "Faroe Islands";
                                    houseNumberOrName = "ipsam";
                                    postalCode = "50763-3998";
                                    stateOrProvince = "magni";
                                    street = "92348 Jon Grove";
                                }};
                                email = "Nadia_Howe62@yahoo.com";
                                fullPhoneNumber = "hic";
                                jobTitle = "International Interactions Manager";
                                name = new ViasName() {{
                                    firstName = "Marianna";
                                    gender = ViasNameGenderEnum.FEMALE;
                                    infix = "officia";
                                    lastName = "Padberg";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "corrupti";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                            expirationDate = "tempora";
                                            issuerCountry = "atque";
                                            issuerState = "fugit";
                                            number = "ut";
                                            type = PersonalDocumentDataTypeEnum.VISA;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                            expirationDate = "culpa";
                                            issuerCountry = "expedita";
                                            issuerState = "magnam";
                                            number = "consequatur";
                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                            expirationDate = "sit";
                                            issuerCountry = "voluptatum";
                                            issuerState = "quas";
                                            number = "repudiandae";
                                            type = PersonalDocumentDataTypeEnum.ID;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                            expirationDate = "blanditiis";
                                            issuerCountry = "ex";
                                            issuerState = "sed";
                                            number = "sit";
                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                        }}),
                                    }};
                                    nationality = "saepe";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "error";
                                    phoneNumber = "consequatur";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                }};
                                shareholderCode = "reiciendis";
                                shareholderReference = "dolorem";
                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                webAddress = "dicta";
                            }}),
                            add(new ShareholderContact() {{
                                address = new ViasAddress() {{
                                    city = "New Edythechester";
                                    country = "Maldives";
                                    houseNumberOrName = "laborum";
                                    postalCode = "93026-4695";
                                    stateOrProvince = "repellendus";
                                    street = "906 Kiehn Spurs";
                                }};
                                email = "John.OConnell@hotmail.com";
                                fullPhoneNumber = "quisquam";
                                jobTitle = "Chief Security Designer";
                                name = new ViasName() {{
                                    firstName = "Ima";
                                    gender = ViasNameGenderEnum.UNKNOWN;
                                    infix = "totam";
                                    lastName = "Hoppe";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "quidem";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                            expirationDate = "et";
                                            issuerCountry = "esse";
                                            issuerState = "amet";
                                            number = "assumenda";
                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                            expirationDate = "error";
                                            issuerCountry = "officiis";
                                            issuerState = "officiis";
                                            number = "accusamus";
                                            type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                            expirationDate = "aspernatur";
                                            issuerCountry = "ex";
                                            issuerState = "maiores";
                                            number = "corrupti";
                                            type = PersonalDocumentDataTypeEnum.VISA;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                            expirationDate = "blanditiis";
                                            issuerCountry = "suscipit";
                                            issuerState = "repudiandae";
                                            number = "atque";
                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                        }}),
                                    }};
                                    nationality = "recusandae";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "dolorum";
                                    phoneNumber = "repellendus";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                }};
                                shareholderCode = "reiciendis";
                                shareholderReference = "doloremque";
                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                webAddress = "dicta";
                            }}),
                            add(new ShareholderContact() {{
                                address = new ViasAddress() {{
                                    city = "North Chandlerborough";
                                    country = "Honduras";
                                    houseNumberOrName = "velit";
                                    postalCode = "53915-8542";
                                    stateOrProvince = "eveniet";
                                    street = "1163 Lionel Centers";
                                }};
                                email = "Maurine87@yahoo.com";
                                fullPhoneNumber = "doloremque";
                                jobTitle = "District Brand Analyst";
                                name = new ViasName() {{
                                    firstName = "Angelica";
                                    gender = ViasNameGenderEnum.FEMALE;
                                    infix = "eveniet";
                                    lastName = "Denesik";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "cum";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                            expirationDate = "necessitatibus";
                                            issuerCountry = "ratione";
                                            issuerState = "laborum";
                                            number = "distinctio";
                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                            expirationDate = "aliquam";
                                            issuerCountry = "ad";
                                            issuerState = "repellat";
                                            number = "alias";
                                            type = PersonalDocumentDataTypeEnum.ID;
                                        }}),
                                    }};
                                    nationality = "nihil";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "mollitia";
                                    phoneNumber = "voluptas";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                }};
                                shareholderCode = "maiores";
                                shareholderReference = "reiciendis";
                                shareholderType = ShareholderContactShareholderTypeEnum.CONTROLLER;
                                webAddress = "id";
                            }}),
                            add(new ShareholderContact() {{
                                address = new ViasAddress() {{
                                    city = "West Marilyne";
                                    country = "Congo";
                                    houseNumberOrName = "quae";
                                    postalCode = "63442-6285";
                                    stateOrProvince = "eum";
                                    street = "9453 Walker Overpass";
                                }};
                                email = "Filiberto.Boyer@gmail.com";
                                fullPhoneNumber = "mollitia";
                                jobTitle = "Customer Creative Technician";
                                name = new ViasName() {{
                                    firstName = "Guadalupe";
                                    gender = ViasNameGenderEnum.FEMALE;
                                    infix = "accusantium";
                                    lastName = "Zulauf";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "doloribus";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                            expirationDate = "in";
                                            issuerCountry = "nam";
                                            issuerState = "earum";
                                            number = "officia";
                                            type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                            expirationDate = "modi";
                                            issuerCountry = "voluptatibus";
                                            issuerState = "molestias";
                                            number = "officiis";
                                            type = PersonalDocumentDataTypeEnum.VISA;
                                        }}),
                                    }};
                                    nationality = "vitae";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "rerum";
                                    phoneNumber = "tempora";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                }};
                                shareholderCode = "inventore";
                                shareholderReference = "fugit";
                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                webAddress = "quae";
                            }}),
                        }};
                        signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                            add(new SignatoryContact() {{
                                address = new ViasAddress() {{
                                    city = "East Holly";
                                    country = "Equatorial Guinea";
                                    houseNumberOrName = "rem";
                                    postalCode = "71941-3155";
                                    stateOrProvince = "earum";
                                    street = "980 Metz Way";
                                }};
                                email = "Gregg.Sauer@hotmail.com";
                                fullPhoneNumber = "fugit";
                                jobTitle = "Forward Quality Officer";
                                name = new ViasName() {{
                                    firstName = "Madisyn";
                                    gender = ViasNameGenderEnum.UNKNOWN;
                                    infix = "nulla";
                                    lastName = "Altenwerth";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "quasi";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                            expirationDate = "ducimus";
                                            issuerCountry = "natus";
                                            issuerState = "occaecati";
                                            number = "suscipit";
                                            type = PersonalDocumentDataTypeEnum.ID;
                                        }}),
                                    }};
                                    nationality = "magni";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "doloribus";
                                    phoneNumber = "nulla";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                }};
                                signatoryCode = "ipsa";
                                signatoryReference = "tempora";
                                webAddress = "nihil";
                            }}),
                        }};
                        taxId = "molestiae";
                    }};;
                    email = "Jayce_Koch@gmail.com";
                    fullPhoneNumber = "reiciendis";
                    individualDetails = new IndividualDetails() {{
                        name = new ViasName() {{
                            firstName = "Henry";
                            gender = ViasNameGenderEnum.MALE;
                            infix = "fugiat";
                            lastName = "Batz";
                        }};;
                        personalData = new ViasPersonalData() {{
                            dateOfBirth = "dicta";
                            documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                    expirationDate = "tempora";
                                    issuerCountry = "esse";
                                    issuerState = "ex";
                                    number = "consectetur";
                                    type = PersonalDocumentDataTypeEnum.ID;
                                }}),
                                add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                    expirationDate = "laborum";
                                    issuerCountry = "sunt";
                                    issuerState = "nostrum";
                                    number = "fugiat";
                                    type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                }}),
                            }};
                            nationality = "officia";
                        }};;
                    }};;
                    lastReviewDate = "suscipit";
                    merchantCategoryCode = "aliquid";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("eum", "voluptas");
                    }};
                    payoutMethods = new org.openapis.openapi.models.shared.PayoutMethod[]{{
                        add(new PayoutMethod("mollitia", "laborum", "libero") {{
                            merchantAccount = "id";
                            payoutMethodCode = "ab";
                            payoutMethodReference = "error";
                            recurringDetailReference = "possimus";
                            shopperReference = "voluptates";
                        }}),
                        add(new PayoutMethod("ex", "quo", "ex") {{
                            merchantAccount = "ad";
                            payoutMethodCode = "deleniti";
                            payoutMethodReference = "enim";
                            recurringDetailReference = "vitae";
                            shopperReference = "repellendus";
                        }}),
                        add(new PayoutMethod("cum", "aliquid", "beatae") {{
                            merchantAccount = "ut";
                            payoutMethodCode = "ad";
                            payoutMethodReference = "expedita";
                            recurringDetailReference = "voluptatem";
                            shopperReference = "molestias";
                        }}),
                    }};
                    principalBusinessAddress = new ViasAddress() {{
                        city = "Lemuelton";
                        country = "Philippines";
                        houseNumberOrName = "est";
                        postalCode = "09816-8800";
                        stateOrProvince = "deleniti";
                        street = "495 Hickle Well";
                    }};;
                    storeDetails = new org.openapis.openapi.models.shared.StoreDetail[]{{
                        add(new StoreDetail(                new ViasAddress() {{
                                            city = "Elishabury";
                                            country = "Bangladesh";
                                            houseNumberOrName = "porro";
                                            postalCode = "73910";
                                            stateOrProvince = "exercitationem";
                                            street = "038 Orn Prairie";
                                        }};, "sequi", "doloribus") {{
                            address = new ViasAddress() {{
                                city = "North Rosetta";
                                country = "Macao";
                                houseNumberOrName = "impedit";
                                postalCode = "73623-0502";
                                stateOrProvince = "dolor";
                                street = "10210 Bergstrom Extensions";
                            }};
                            fullPhoneNumber = "fugiat";
                            logo = "ipsam";
                            merchantAccount = "consequuntur";
                            merchantCategoryCode = "ipsa";
                            merchantHouseNumber = "quas";
                            phoneNumber = new ViasPhoneNumber() {{
                                phoneCountryCode = "eveniet";
                                phoneNumber = "impedit";
                                phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                            }};
                            shopperInteraction = StoreDetailShopperInteractionEnum.ECOMMERCE;
                            splitConfigurationUUID = "necessitatibus";
                            status = StoreDetailStatusEnum.ACTIVE;
                            store = "veniam";
                            storeName = "nesciunt";
                            storeReference = "expedita";
                            virtualAccount = "eum";
                            webAddress = "vel";
                        }}),
                    }};
                    webAddress = "repudiandae";
                }};;
                description = "optio";
                legalEntity = UpdateAccountHolderRequestLegalEntityEnum.INDIVIDUAL;
                primaryCurrency = "nemo";
                processingTier = 455898;
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

            org.openapis.openapi.models.shared.UpdateAccountHolderStateRequest req = new UpdateAccountHolderStateRequest("blanditiis", false, UpdateAccountHolderStateRequestStateTypeEnum.LIMITLESS_PROCESSING) {{
                reason = "voluptas";
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
