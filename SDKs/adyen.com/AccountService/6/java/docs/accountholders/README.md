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
import org.openapis.openapi.models.shared.LegalArrangementDetail;
import org.openapis.openapi.models.shared.LegalArrangementDetailLegalFormEnum;
import org.openapis.openapi.models.shared.LegalArrangementDetailTypeEnum;
import org.openapis.openapi.models.shared.LegalArrangementEntityDetail;
import org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalArrangementMembersEnum;
import org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalEntityTypeEnum;
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
                                    stockExchange = "alias";
                                    stockNumber = "at";
                                    stockTicker = "quaerat";
                                    taxId = "tempora";
                                }};;
                                email = "Pierre67@yahoo.com";
                                fullPhoneNumber = "a";
                                individualDetails = new IndividualDetails() {{
                                    name = new ViasName() {{
                                        firstName = "Jacky";
                                        gender = ViasNameGenderEnum.UNKNOWN;
                                        infix = "iusto";
                                        lastName = "Emard";
                                    }};;
                                    personalData = new ViasPersonalData() {{
                                        dateOfBirth = "quisquam";
                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                expirationDate = "amet";
                                                issuerCountry = "tempore";
                                                issuerState = "accusamus";
                                                number = "numquam";
                                                type = PersonalDocumentDataTypeEnum.ID;
                                            }}),
                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                expirationDate = "sapiente";
                                                issuerCountry = "totam";
                                                issuerState = "nihil";
                                                number = "sit";
                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                            }}),
                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                expirationDate = "sed";
                                                issuerCountry = "vel";
                                                issuerState = "libero";
                                                number = "voluptas";
                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                            }}),
                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                expirationDate = "ipsum";
                                                issuerCountry = "incidunt";
                                                issuerState = "qui";
                                                number = "cupiditate";
                                                type = PersonalDocumentDataTypeEnum.VISA;
                                            }}),
                                        }};
                                        nationality = "soluta";
                                    }};;
                                }};;
                                lastReviewDate = "dicta";
                                legalArrangements = new org.openapis.openapi.models.shared.LegalArrangementDetail[]{{
                                    add(new LegalArrangementDetail(                new ViasAddress() {{
                                                        city = "Jackson";
                                                        country = "Liberia";
                                                        houseNumberOrName = "quos";
                                                        postalCode = "28774";
                                                        stateOrProvince = "in";
                                                        street = "9839 Alvis Road";
                                                    }};, "consectetur", LegalArrangementDetailTypeEnum.PARTNERSHIP) {{
                                        address = new ViasAddress() {{
                                            city = "Doyleville";
                                            country = "Chile";
                                            houseNumberOrName = "distinctio";
                                            postalCode = "34581-2114";
                                            stateOrProvince = "sunt";
                                            street = "7907 Rohan Cliffs";
                                        }};
                                        legalArrangementCode = "saepe";
                                        legalArrangementEntities = new org.openapis.openapi.models.shared.LegalArrangementEntityDetail[]{{
                                            add(new LegalArrangementEntityDetail() {{
                                                address = new ViasAddress() {{
                                                    city = "Lake Katrinecester";
                                                    country = "Monaco";
                                                    houseNumberOrName = "aperiam";
                                                    postalCode = "22226-1005";
                                                    stateOrProvince = "itaque";
                                                    street = "68792 McGlynn Dam";
                                                }};
                                                businessDetails = new BusinessDetails() {{
                                                    doingBusinessAs = "quae";
                                                    legalBusinessName = "laudantium";
                                                    listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "Wilbertfield";
                                                                country = "Tajikistan";
                                                                houseNumberOrName = "omnis";
                                                                postalCode = "29428";
                                                                stateOrProvince = "tenetur";
                                                                street = "9774 Quitzon Track";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "ducimus";
                                                                registrationNumber = "dolore";
                                                                stockExchange = "quibusdam";
                                                                stockNumber = "illum";
                                                                stockTicker = "sequi";
                                                            }};
                                                            ultimateParentCompanyCode = "natus";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "Ankundingworth";
                                                                country = "Guadeloupe";
                                                                houseNumberOrName = "nulla";
                                                                postalCode = "79947";
                                                                stateOrProvince = "ducimus";
                                                                street = "62341 Reinhold Fort";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "ratione";
                                                                registrationNumber = "ex";
                                                                stockExchange = "laudantium";
                                                                stockNumber = "dicta";
                                                                stockTicker = "dolor";
                                                            }};
                                                            ultimateParentCompanyCode = "maiores";
                                                        }}),
                                                    }};
                                                    registrationNumber = "quasi";
                                                    shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Missoula";
                                                                country = "Virgin Islands, British";
                                                                houseNumberOrName = "nostrum";
                                                                postalCode = "79473-3303";
                                                                stateOrProvince = "ea";
                                                                street = "291 Amir Villages";
                                                            }};
                                                            email = "Adrian_Anderson@hotmail.com";
                                                            fullPhoneNumber = "aliquam";
                                                            jobTitle = "Corporate Accountability Associate";
                                                            name = new ViasName() {{
                                                                firstName = "Demarcus";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "dolorum";
                                                                lastName = "Osinski";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "placeat";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "eum";
                                                                        issuerCountry = "autem";
                                                                        issuerState = "nobis";
                                                                        number = "quas";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                }};
                                                                nationality = "voluptas";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "libero";
                                                                phoneNumber = "quasi";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                            }};
                                                            shareholderCode = "numquam";
                                                            shareholderReference = "explicabo";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                            webAddress = "ipsa";
                                                        }}),
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Elishamouth";
                                                                country = "Equatorial Guinea";
                                                                houseNumberOrName = "esse";
                                                                postalCode = "56468";
                                                                stateOrProvince = "ut";
                                                                street = "3815 Bogan Cape";
                                                            }};
                                                            email = "Mavis_DuBuque77@yahoo.com";
                                                            fullPhoneNumber = "fuga";
                                                            jobTitle = "Future Directives Coordinator";
                                                            name = new ViasName() {{
                                                                firstName = "Ansley";
                                                                gender = ViasNameGenderEnum.FEMALE;
                                                                infix = "consequatur";
                                                                lastName = "Goodwin";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "debitis";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "aspernatur";
                                                                        issuerCountry = "sequi";
                                                                        issuerState = "quo";
                                                                        number = "esse";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "distinctio";
                                                                        issuerCountry = "quod";
                                                                        issuerState = "dignissimos";
                                                                        number = "inventore";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                }};
                                                                nationality = "accusamus";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "aliquam";
                                                                phoneNumber = "odio";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                            }};
                                                            shareholderCode = "commodi";
                                                            shareholderReference = "sapiente";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.CONTROLLER;
                                                            webAddress = "deserunt";
                                                        }}),
                                                    }};
                                                    signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Port Hipolitostad";
                                                                country = "Lithuania";
                                                                houseNumberOrName = "consequuntur";
                                                                postalCode = "16625-1331";
                                                                stateOrProvince = "sapiente";
                                                                street = "11955 Jacques Unions";
                                                            }};
                                                            email = "Arnoldo_Koch87@hotmail.com";
                                                            fullPhoneNumber = "aliquid";
                                                            jobTitle = "Senior Interactions Administrator";
                                                            name = new ViasName() {{
                                                                firstName = "Maryam";
                                                                gender = ViasNameGenderEnum.FEMALE;
                                                                infix = "rerum";
                                                                lastName = "McClure";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "minima";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "eligendi";
                                                                        issuerCountry = "sit";
                                                                        issuerState = "culpa";
                                                                        number = "tempore";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "consequuntur";
                                                                        issuerCountry = "consequatur";
                                                                        issuerState = "minus";
                                                                        number = "quaerat";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "esse";
                                                                        issuerCountry = "blanditiis";
                                                                        issuerState = "provident";
                                                                        number = "a";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                }};
                                                                nationality = "esse";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "quasi";
                                                                phoneNumber = "a";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                            }};
                                                            signatoryCode = "sint";
                                                            signatoryReference = "pariatur";
                                                            webAddress = "possimus";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Fort Zacheryfield";
                                                                country = "Belgium";
                                                                houseNumberOrName = "consequuntur";
                                                                postalCode = "66390";
                                                                stateOrProvince = "earum";
                                                                street = "4278 Bartoletti Freeway";
                                                            }};
                                                            email = "Blake.Hermiston@hotmail.com";
                                                            fullPhoneNumber = "nisi";
                                                            jobTitle = "Lead Operations Officer";
                                                            name = new ViasName() {{
                                                                firstName = "Rosanna";
                                                                gender = ViasNameGenderEnum.FEMALE;
                                                                infix = "deleniti";
                                                                lastName = "Ward";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "dolorum";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "omnis";
                                                                        issuerCountry = "tenetur";
                                                                        issuerState = "quasi";
                                                                        number = "at";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                }};
                                                                nationality = "ipsa";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "minima";
                                                                phoneNumber = "veritatis";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                            }};
                                                            signatoryCode = "adipisci";
                                                            signatoryReference = "iste";
                                                            webAddress = "temporibus";
                                                        }}),
                                                    }};
                                                    stockExchange = "accusantium";
                                                    stockNumber = "rem";
                                                    stockTicker = "aut";
                                                    taxId = "laudantium";
                                                }};
                                                email = "Mabel.Bernhard@yahoo.com";
                                                fullPhoneNumber = "voluptatem";
                                                individualDetails = new IndividualDetails() {{
                                                    name = new ViasName() {{
                                                        firstName = "Dallas";
                                                        gender = ViasNameGenderEnum.FEMALE;
                                                        infix = "numquam";
                                                        lastName = "Russel";
                                                    }};
                                                    personalData = new ViasPersonalData() {{
                                                        dateOfBirth = "explicabo";
                                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                expirationDate = "aut";
                                                                issuerCountry = "dignissimos";
                                                                issuerState = "dicta";
                                                                number = "maiores";
                                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                            }}),
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                expirationDate = "voluptatibus";
                                                                issuerCountry = "voluptas";
                                                                issuerState = "asperiores";
                                                                number = "aperiam";
                                                                type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                            }}),
                                                        }};
                                                        nationality = "consequuntur";
                                                    }};
                                                }};
                                                legalArrangementEntityCode = "repellendus";
                                                legalArrangementEntityReference = "officia";
                                                legalArrangementMembers = new org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalArrangementMembersEnum[]{{
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.PROTECTOR),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.SETTLOR),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.TRUSTEE),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.PARTNER),
                                                }};
                                                legalEntityType = LegalArrangementEntityDetailLegalEntityTypeEnum.BUSINESS;
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "quaerat";
                                                    phoneNumber = "porro";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                }};
                                                webAddress = "labore";
                                            }}),
                                        }};
                                        legalArrangementReference = "ab";
                                        legalForm = LegalArrangementDetailLegalFormEnum.DISCRETIONARY_SERVICES_MANAGEMENT_TRUST;
                                        name = "Orlando Homenick";
                                        registrationNumber = "est";
                                        taxNumber = "recusandae";
                                        type = LegalArrangementDetailTypeEnum.SOLE_PROPRIETORSHIP;
                                    }}),
                                    add(new LegalArrangementDetail(                new ViasAddress() {{
                                                        city = "Cullenfort";
                                                        country = "Central African Republic";
                                                        houseNumberOrName = "soluta";
                                                        postalCode = "72441-4275";
                                                        stateOrProvince = "quibusdam";
                                                        street = "1943 Block Square";
                                                    }};, "libero", LegalArrangementDetailTypeEnum.ASSOCIATION) {{
                                        address = new ViasAddress() {{
                                            city = "Fort Rasheed";
                                            country = "El Salvador";
                                            houseNumberOrName = "doloribus";
                                            postalCode = "96982";
                                            stateOrProvince = "sunt";
                                            street = "222 Jena Villages";
                                        }};
                                        legalArrangementCode = "debitis";
                                        legalArrangementEntities = new org.openapis.openapi.models.shared.LegalArrangementEntityDetail[]{{
                                            add(new LegalArrangementEntityDetail() {{
                                                address = new ViasAddress() {{
                                                    city = "Lake Germaine";
                                                    country = "Azerbaijan";
                                                    houseNumberOrName = "voluptates";
                                                    postalCode = "18621-3333";
                                                    stateOrProvince = "nobis";
                                                    street = "271 Kirlin Forks";
                                                }};
                                                businessDetails = new BusinessDetails() {{
                                                    doingBusinessAs = "aliquam";
                                                    legalBusinessName = "officiis";
                                                    listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "East Myron";
                                                                country = "Libyan Arab Jamahiriya";
                                                                houseNumberOrName = "quas";
                                                                postalCode = "26585-9370";
                                                                stateOrProvince = "rerum";
                                                                street = "91974 Bernier Parkways";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "dolore";
                                                                registrationNumber = "laborum";
                                                                stockExchange = "sed";
                                                                stockNumber = "in";
                                                                stockTicker = "commodi";
                                                            }};
                                                            ultimateParentCompanyCode = "quidem";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "South Leilaniland";
                                                                country = "Holy See (Vatican City State)";
                                                                houseNumberOrName = "sapiente";
                                                                postalCode = "09059-2152";
                                                                stateOrProvince = "necessitatibus";
                                                                street = "45592 Jacklyn Walks";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "ex";
                                                                registrationNumber = "sit";
                                                                stockExchange = "non";
                                                                stockNumber = "officiis";
                                                                stockTicker = "praesentium";
                                                            }};
                                                            ultimateParentCompanyCode = "facilis";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "West Gail";
                                                                country = "Tokelau";
                                                                houseNumberOrName = "rem";
                                                                postalCode = "76339";
                                                                stateOrProvince = "reiciendis";
                                                                street = "109 Ernesto Knolls";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "officiis";
                                                                registrationNumber = "beatae";
                                                                stockExchange = "laudantium";
                                                                stockNumber = "exercitationem";
                                                                stockTicker = "praesentium";
                                                            }};
                                                            ultimateParentCompanyCode = "cum";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "Lake Justice";
                                                                country = "Nepal";
                                                                houseNumberOrName = "hic";
                                                                postalCode = "82636-6582";
                                                                stateOrProvince = "atque";
                                                                street = "28067 Adan Land";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "ipsam";
                                                                registrationNumber = "sit";
                                                                stockExchange = "voluptatum";
                                                                stockNumber = "quas";
                                                                stockTicker = "repudiandae";
                                                            }};
                                                            ultimateParentCompanyCode = "corporis";
                                                        }}),
                                                    }};
                                                    registrationNumber = "et";
                                                    shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Candidatown";
                                                                country = "Isle of Man";
                                                                houseNumberOrName = "nostrum";
                                                                postalCode = "60292-6105";
                                                                stateOrProvince = "labore";
                                                                street = "567 Howell Alley";
                                                            }};
                                                            email = "Luther_Klocko@gmail.com";
                                                            fullPhoneNumber = "provident";
                                                            jobTitle = "Internal Usability Agent";
                                                            name = new ViasName() {{
                                                                firstName = "Agustin";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "quidem";
                                                                lastName = "Kiehn";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "facere";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "praesentium";
                                                                        issuerCountry = "mollitia";
                                                                        issuerState = "veniam";
                                                                        number = "voluptatem";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "quasi";
                                                                        issuerCountry = "atque";
                                                                        issuerState = "reprehenderit";
                                                                        number = "asperiores";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "quidem";
                                                                        issuerCountry = "maxime";
                                                                        issuerState = "et";
                                                                        number = "esse";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                }};
                                                                nationality = "ea";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "atque";
                                                                phoneNumber = "error";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                            }};
                                                            shareholderCode = "officiis";
                                                            shareholderReference = "accusamus";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                            webAddress = "minima";
                                                        }}),
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "South Willstad";
                                                                country = "Taiwan";
                                                                houseNumberOrName = "error";
                                                                postalCode = "39551-9682";
                                                                stateOrProvince = "reiciendis";
                                                                street = "91011 Gillian Fields";
                                                            }};
                                                            email = "Kelton.Gusikowski58@hotmail.com";
                                                            fullPhoneNumber = "officiis";
                                                            jobTitle = "Customer Division Manager";
                                                            name = new ViasName() {{
                                                                firstName = "Sydni";
                                                                gender = ViasNameGenderEnum.FEMALE;
                                                                infix = "consequuntur";
                                                                lastName = "Considine";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "id";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "reprehenderit";
                                                                        issuerCountry = "error";
                                                                        issuerState = "illo";
                                                                        number = "corporis";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "non";
                                                                        issuerCountry = "vero";
                                                                        issuerState = "doloremque";
                                                                        number = "iure";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                }};
                                                                nationality = "quae";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "molestiae";
                                                                phoneNumber = "eveniet";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                            }};
                                                            shareholderCode = "cum";
                                                            shareholderReference = "iure";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                            webAddress = "ratione";
                                                        }}),
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Raustad";
                                                                country = "Macedonia";
                                                                houseNumberOrName = "aliquam";
                                                                postalCode = "90354";
                                                                stateOrProvince = "mollitia";
                                                                street = "0991 Harber Forks";
                                                            }};
                                                            email = "Cole_Berge30@hotmail.com";
                                                            fullPhoneNumber = "molestiae";
                                                            jobTitle = "Regional Response Orchestrator";
                                                            name = new ViasName() {{
                                                                firstName = "Davion";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "laudantium";
                                                                lastName = "Kemmer";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "nemo";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "esse";
                                                                        issuerCountry = "provident";
                                                                        issuerState = "quis";
                                                                        number = "eum";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "aspernatur";
                                                                        issuerCountry = "ullam";
                                                                        issuerState = "quasi";
                                                                        number = "animi";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "provident";
                                                                        issuerCountry = "possimus";
                                                                        issuerState = "animi";
                                                                        number = "ex";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "repellat";
                                                                        issuerCountry = "doloribus";
                                                                        issuerState = "ullam";
                                                                        number = "in";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                }};
                                                                nationality = "officia";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "laborum";
                                                                phoneNumber = "placeat";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                            }};
                                                            shareholderCode = "voluptatibus";
                                                            shareholderReference = "molestias";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                            webAddress = "sapiente";
                                                        }}),
                                                    }};
                                                    signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Lake Donnieborough";
                                                                country = "Belgium";
                                                                houseNumberOrName = "fugit";
                                                                postalCode = "00214-2587";
                                                                stateOrProvince = "eos";
                                                                street = "413 Krystal Oval";
                                                            }};
                                                            email = "Nathanial.Weimann93@hotmail.com";
                                                            fullPhoneNumber = "perspiciatis";
                                                            jobTitle = "Principal Accountability Coordinator";
                                                            name = new ViasName() {{
                                                                firstName = "Oscar";
                                                                gender = ViasNameGenderEnum.FEMALE;
                                                                infix = "dolorem";
                                                                lastName = "Corkery";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "cumque";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "ratione";
                                                                        issuerCountry = "animi";
                                                                        issuerState = "necessitatibus";
                                                                        number = "nulla";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "et";
                                                                        issuerCountry = "ducimus";
                                                                        issuerState = "natus";
                                                                        number = "occaecati";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "quasi";
                                                                        issuerCountry = "magni";
                                                                        issuerState = "doloribus";
                                                                        number = "nulla";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                }};
                                                                nationality = "tempora";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "nihil";
                                                                phoneNumber = "molestiae";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                            }};
                                                            signatoryCode = "iusto";
                                                            signatoryReference = "esse";
                                                            webAddress = "praesentium";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "West New York";
                                                                country = "Isle of Man";
                                                                houseNumberOrName = "architecto";
                                                                postalCode = "01424-4230";
                                                                stateOrProvince = "laborum";
                                                                street = "38736 Green Brook";
                                                            }};
                                                            email = "Garnett.Morar@yahoo.com";
                                                            fullPhoneNumber = "error";
                                                            jobTitle = "Internal Interactions Technician";
                                                            name = new ViasName() {{
                                                                firstName = "Margarete";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "ad";
                                                                lastName = "Leuschke";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "enim";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "repellendus";
                                                                        issuerCountry = "ex";
                                                                        issuerState = "quo";
                                                                        number = "ex";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                }};
                                                                nationality = "expedita";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "voluptatem";
                                                                phoneNumber = "molestias";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                            }};
                                                            signatoryCode = "aliquid";
                                                            signatoryReference = "beatae";
                                                            webAddress = "voluptatum";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Bogancester";
                                                                country = "Norway";
                                                                houseNumberOrName = "culpa";
                                                                postalCode = "98168";
                                                                stateOrProvince = "debitis";
                                                                street = "05949 Schinner Haven";
                                                            }};
                                                            email = "Clarissa84@hotmail.com";
                                                            fullPhoneNumber = "totam";
                                                            jobTitle = "Forward Configuration Producer";
                                                            name = new ViasName() {{
                                                                firstName = "Gardner";
                                                                gender = ViasNameGenderEnum.FEMALE;
                                                                infix = "dolor";
                                                                lastName = "Hackett";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "inventore";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "veritatis";
                                                                        issuerCountry = "tempora";
                                                                        issuerState = "dolor";
                                                                        number = "consequatur";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "modi";
                                                                        issuerCountry = "fugit";
                                                                        issuerState = "ab";
                                                                        number = "laudantium";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "fugiat";
                                                                        issuerCountry = "ipsam";
                                                                        issuerState = "consequuntur";
                                                                        number = "ipsa";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                }};
                                                                nationality = "impedit";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "officiis";
                                                                phoneNumber = "esse";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                            }};
                                                            signatoryCode = "sed";
                                                            signatoryReference = "veniam";
                                                            webAddress = "nesciunt";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Kemmerview";
                                                                country = "Madagascar";
                                                                houseNumberOrName = "magnam";
                                                                postalCode = "07473";
                                                                stateOrProvince = "recusandae";
                                                                street = "03803 Thiel Point";
                                                            }};
                                                            email = "Clay_Yundt57@hotmail.com";
                                                            fullPhoneNumber = "nemo";
                                                            jobTitle = "District Optimization Technician";
                                                            name = new ViasName() {{
                                                                firstName = "Garry";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "nemo";
                                                                lastName = "Lubowitz";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "eius";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "ducimus";
                                                                        issuerCountry = "nesciunt";
                                                                        issuerState = "fuga";
                                                                        number = "laudantium";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                }};
                                                                nationality = "rem";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "fugiat";
                                                                phoneNumber = "dicta";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                            }};
                                                            signatoryCode = "consequuntur";
                                                            signatoryReference = "consectetur";
                                                            webAddress = "aperiam";
                                                        }}),
                                                    }};
                                                    stockExchange = "cupiditate";
                                                    stockNumber = "reiciendis";
                                                    stockTicker = "soluta";
                                                    taxId = "alias";
                                                }};
                                                email = "Chauncey.Mayert@yahoo.com";
                                                fullPhoneNumber = "inventore";
                                                individualDetails = new IndividualDetails() {{
                                                    name = new ViasName() {{
                                                        firstName = "Marques";
                                                        gender = ViasNameGenderEnum.UNKNOWN;
                                                        infix = "voluptatibus";
                                                        lastName = "Reichel";
                                                    }};
                                                    personalData = new ViasPersonalData() {{
                                                        dateOfBirth = "omnis";
                                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                expirationDate = "minima";
                                                                issuerCountry = "praesentium";
                                                                issuerState = "maxime";
                                                                number = "magnam";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }}),
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                expirationDate = "commodi";
                                                                issuerCountry = "itaque";
                                                                issuerState = "commodi";
                                                                number = "totam";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }}),
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "nam";
                                                                issuerCountry = "vero";
                                                                issuerState = "voluptatem";
                                                                number = "ipsam";
                                                                type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                            }}),
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                expirationDate = "quasi";
                                                                issuerCountry = "non";
                                                                issuerState = "maiores";
                                                                number = "enim";
                                                                type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                            }}),
                                                        }};
                                                        nationality = "deserunt";
                                                    }};
                                                }};
                                                legalArrangementEntityCode = "esse";
                                                legalArrangementEntityReference = "nemo";
                                                legalArrangementMembers = new org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalArrangementMembersEnum[]{{
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.SETTLOR),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.PARTNER),
                                                }};
                                                legalEntityType = LegalArrangementEntityDetailLegalEntityTypeEnum.NON_PROFIT;
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "accusamus";
                                                    phoneNumber = "impedit";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                }};
                                                webAddress = "necessitatibus";
                                            }}),
                                        }};
                                        legalArrangementReference = "asperiores";
                                        legalForm = LegalArrangementDetailLegalFormEnum.FIXED_TRUST;
                                        name = "Miss Alyssa Wintheiser";
                                        registrationNumber = "laborum";
                                        taxNumber = "consectetur";
                                        type = LegalArrangementDetailTypeEnum.ASSOCIATION;
                                    }}),
                                    add(new LegalArrangementDetail(                new ViasAddress() {{
                                                        city = "Sawaynfort";
                                                        country = "Hungary";
                                                        houseNumberOrName = "cumque";
                                                        postalCode = "83739-2885";
                                                        stateOrProvince = "voluptatem";
                                                        street = "2039 Cole Key";
                                                    }};, "cum", LegalArrangementDetailTypeEnum.SOLE_PROPRIETORSHIP) {{
                                        address = new ViasAddress() {{
                                            city = "Cedar Park";
                                            country = "Sao Tome and Principe";
                                            houseNumberOrName = "aliquam";
                                            postalCode = "00441";
                                            stateOrProvince = "vero";
                                            street = "4225 Carroll Shoal";
                                        }};
                                        legalArrangementCode = "voluptatibus";
                                        legalArrangementEntities = new org.openapis.openapi.models.shared.LegalArrangementEntityDetail[]{{
                                            add(new LegalArrangementEntityDetail() {{
                                                address = new ViasAddress() {{
                                                    city = "Alafaya";
                                                    country = "Hong Kong";
                                                    houseNumberOrName = "itaque";
                                                    postalCode = "62240";
                                                    stateOrProvince = "doloremque";
                                                    street = "69463 Schowalter Park";
                                                }};
                                                businessDetails = new BusinessDetails() {{
                                                    doingBusinessAs = "expedita";
                                                    legalBusinessName = "deleniti";
                                                    listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "Felipestead";
                                                                country = "Tonga";
                                                                houseNumberOrName = "animi";
                                                                postalCode = "33664-2082";
                                                                stateOrProvince = "vitae";
                                                                street = "23164 Nathanial Ridge";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "rem";
                                                                registrationNumber = "dolorum";
                                                                stockExchange = "odio";
                                                                stockNumber = "fugit";
                                                                stockTicker = "alias";
                                                            }};
                                                            ultimateParentCompanyCode = "magni";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "Anitaton";
                                                                country = "Eritrea";
                                                                houseNumberOrName = "neque";
                                                                postalCode = "90268";
                                                                stateOrProvince = "distinctio";
                                                                street = "113 Reinger Corners";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "id";
                                                                registrationNumber = "libero";
                                                                stockExchange = "fugiat";
                                                                stockNumber = "officia";
                                                                stockTicker = "quos";
                                                            }};
                                                            ultimateParentCompanyCode = "placeat";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "South Anastacioshire";
                                                                country = "Belarus";
                                                                houseNumberOrName = "aperiam";
                                                                postalCode = "27704-4181";
                                                                stateOrProvince = "est";
                                                                street = "545 Treutel Ridges";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "sint";
                                                                registrationNumber = "ea";
                                                                stockExchange = "autem";
                                                                stockNumber = "ipsam";
                                                                stockTicker = "rerum";
                                                            }};
                                                            ultimateParentCompanyCode = "laudantium";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "Fort Watson";
                                                                country = "Russian Federation";
                                                                houseNumberOrName = "at";
                                                                postalCode = "16690";
                                                                stateOrProvince = "expedita";
                                                                street = "184 Connelly Court";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "corporis";
                                                                registrationNumber = "error";
                                                                stockExchange = "earum";
                                                                stockNumber = "adipisci";
                                                                stockTicker = "recusandae";
                                                            }};
                                                            ultimateParentCompanyCode = "similique";
                                                        }}),
                                                    }};
                                                    registrationNumber = "ut";
                                                    shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "North Layla";
                                                                country = "Kyrgyz Republic";
                                                                houseNumberOrName = "delectus";
                                                                postalCode = "12228-6478";
                                                                stateOrProvince = "corporis";
                                                                street = "75538 Connie Lake";
                                                            }};
                                                            email = "Horace.Gleichner@hotmail.com";
                                                            fullPhoneNumber = "voluptates";
                                                            jobTitle = "Principal Mobility Associate";
                                                            name = new ViasName() {{
                                                                firstName = "Monique";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "labore";
                                                                lastName = "Lebsack";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "occaecati";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "quo";
                                                                        issuerCountry = "velit";
                                                                        issuerState = "minus";
                                                                        number = "fuga";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "impedit";
                                                                        issuerCountry = "delectus";
                                                                        issuerState = "tempore";
                                                                        number = "vero";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                }};
                                                                nationality = "pariatur";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "nemo";
                                                                phoneNumber = "reprehenderit";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                            }};
                                                            shareholderCode = "odio";
                                                            shareholderReference = "minima";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                            webAddress = "ducimus";
                                                        }}),
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Celiafurt";
                                                                country = "Belgium";
                                                                houseNumberOrName = "ducimus";
                                                                postalCode = "89674";
                                                                stateOrProvince = "quaerat";
                                                                street = "8863 Cory Ford";
                                                            }};
                                                            email = "Kip91@gmail.com";
                                                            fullPhoneNumber = "cum";
                                                            jobTitle = "Direct Factors Director";
                                                            name = new ViasName() {{
                                                                firstName = "Magdalen";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "nam";
                                                                lastName = "Buckridge";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "consequuntur";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "nobis";
                                                                        issuerCountry = "ipsa";
                                                                        issuerState = "ducimus";
                                                                        number = "maiores";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "laboriosam";
                                                                        issuerCountry = "pariatur";
                                                                        issuerState = "libero";
                                                                        number = "excepturi";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "aliquam";
                                                                        issuerCountry = "nostrum";
                                                                        issuerState = "doloribus";
                                                                        number = "eligendi";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "hic";
                                                                        issuerCountry = "animi";
                                                                        issuerState = "quas";
                                                                        number = "totam";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                }};
                                                                nationality = "eaque";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "saepe";
                                                                phoneNumber = "architecto";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                            }};
                                                            shareholderCode = "iste";
                                                            shareholderReference = "assumenda";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                            webAddress = "libero";
                                                        }}),
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "North Vinnie";
                                                                country = "Samoa";
                                                                houseNumberOrName = "cum";
                                                                postalCode = "29603";
                                                                stateOrProvince = "veniam";
                                                                street = "054 Schuppe Flat";
                                                            }};
                                                            email = "Tony.Corwin16@gmail.com";
                                                            fullPhoneNumber = "facere";
                                                            jobTitle = "Central Marketing Facilitator";
                                                            name = new ViasName() {{
                                                                firstName = "Danika";
                                                                gender = ViasNameGenderEnum.FEMALE;
                                                                infix = "ab";
                                                                lastName = "Flatley";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "facilis";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "nisi";
                                                                        issuerCountry = "voluptatibus";
                                                                        issuerState = "quaerat";
                                                                        number = "blanditiis";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "quis";
                                                                        issuerCountry = "nisi";
                                                                        issuerState = "libero";
                                                                        number = "minus";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "ipsum";
                                                                        issuerCountry = "ad";
                                                                        issuerState = "voluptatibus";
                                                                        number = "voluptatibus";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                }};
                                                                nationality = "labore";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "rerum";
                                                                phoneNumber = "eos";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                            }};
                                                            shareholderCode = "nostrum";
                                                            shareholderReference = "neque";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                            webAddress = "est";
                                                        }}),
                                                    }};
                                                    signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Stehrstead";
                                                                country = "Togo";
                                                                houseNumberOrName = "ducimus";
                                                                postalCode = "16714";
                                                                stateOrProvince = "esse";
                                                                street = "313 Kub Lock";
                                                            }};
                                                            email = "Antonina87@hotmail.com";
                                                            fullPhoneNumber = "saepe";
                                                            jobTitle = "Legacy Tactics Officer";
                                                            name = new ViasName() {{
                                                                firstName = "Waldo";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "reprehenderit";
                                                                lastName = "Lakin";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "nemo";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "quisquam";
                                                                        issuerCountry = "sequi";
                                                                        issuerState = "nihil";
                                                                        number = "deleniti";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "assumenda";
                                                                        issuerCountry = "aliquam";
                                                                        issuerState = "quisquam";
                                                                        number = "provident";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "consequatur";
                                                                        issuerCountry = "maxime";
                                                                        issuerState = "aspernatur";
                                                                        number = "nam";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "provident";
                                                                        issuerCountry = "repudiandae";
                                                                        issuerState = "rerum";
                                                                        number = "dignissimos";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                }};
                                                                nationality = "similique";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "repellendus";
                                                                phoneNumber = "iure";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                            }};
                                                            signatoryCode = "commodi";
                                                            signatoryReference = "impedit";
                                                            webAddress = "commodi";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "North Enochton";
                                                                country = "Denmark";
                                                                houseNumberOrName = "illum";
                                                                postalCode = "67201-5094";
                                                                stateOrProvince = "amet";
                                                                street = "6859 Frederic Light";
                                                            }};
                                                            email = "Melody57@hotmail.com";
                                                            fullPhoneNumber = "accusamus";
                                                            jobTitle = "Corporate Operations Executive";
                                                            name = new ViasName() {{
                                                                firstName = "Alexandra";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "dolor";
                                                                lastName = "Casper";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "a";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "occaecati";
                                                                        issuerCountry = "atque";
                                                                        issuerState = "beatae";
                                                                        number = "at";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                }};
                                                                nationality = "esse";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "voluptatem";
                                                                phoneNumber = "perferendis";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                            }};
                                                            signatoryCode = "ea";
                                                            signatoryReference = "aperiam";
                                                            webAddress = "dignissimos";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Denver";
                                                                country = "Saudi Arabia";
                                                                houseNumberOrName = "provident";
                                                                postalCode = "74276";
                                                                stateOrProvince = "temporibus";
                                                                street = "2917 Stanton Point";
                                                            }};
                                                            email = "Selina99@yahoo.com";
                                                            fullPhoneNumber = "explicabo";
                                                            jobTitle = "Direct Tactics Architect";
                                                            name = new ViasName() {{
                                                                firstName = "Denis";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "illo";
                                                                lastName = "Welch";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "deserunt";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "non";
                                                                        issuerCountry = "distinctio";
                                                                        issuerState = "in";
                                                                        number = "exercitationem";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "repudiandae";
                                                                        issuerCountry = "modi";
                                                                        issuerState = "in";
                                                                        number = "explicabo";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "aperiam";
                                                                        issuerCountry = "odit";
                                                                        issuerState = "deleniti";
                                                                        number = "enim";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "minima";
                                                                        issuerCountry = "libero";
                                                                        issuerState = "magnam";
                                                                        number = "sit";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                }};
                                                                nationality = "nesciunt";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "mollitia";
                                                                phoneNumber = "dignissimos";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                            }};
                                                            signatoryCode = "nostrum";
                                                            signatoryReference = "molestiae";
                                                            webAddress = "veniam";
                                                        }}),
                                                    }};
                                                    stockExchange = "reiciendis";
                                                    stockNumber = "ab";
                                                    stockTicker = "modi";
                                                    taxId = "aut";
                                                }};
                                                email = "Tania.Kub@gmail.com";
                                                fullPhoneNumber = "dolorum";
                                                individualDetails = new IndividualDetails() {{
                                                    name = new ViasName() {{
                                                        firstName = "Reta";
                                                        gender = ViasNameGenderEnum.FEMALE;
                                                        infix = "consectetur";
                                                        lastName = "Dooley";
                                                    }};
                                                    personalData = new ViasPersonalData() {{
                                                        dateOfBirth = "quaerat";
                                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "minus";
                                                                issuerCountry = "sunt";
                                                                issuerState = "distinctio";
                                                                number = "iusto";
                                                                type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                            }}),
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                expirationDate = "facilis";
                                                                issuerCountry = "amet";
                                                                issuerState = "autem";
                                                                number = "fuga";
                                                                type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                            }}),
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "aut";
                                                                issuerCountry = "quos";
                                                                issuerState = "laudantium";
                                                                number = "repellendus";
                                                                type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                            }}),
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                expirationDate = "eaque";
                                                                issuerCountry = "saepe";
                                                                issuerState = "delectus";
                                                                number = "mollitia";
                                                                type = PersonalDocumentDataTypeEnum.VISA;
                                                            }}),
                                                        }};
                                                        nationality = "sed";
                                                    }};
                                                }};
                                                legalArrangementEntityCode = "voluptatem";
                                                legalArrangementEntityReference = "alias";
                                                legalArrangementMembers = new org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalArrangementMembersEnum[]{{
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.TRUSTEE),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.BENEFICIARY),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.CONTROLLING_PERSON),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.CONTROLLING_PERSON),
                                                }};
                                                legalEntityType = LegalArrangementEntityDetailLegalEntityTypeEnum.BUSINESS;
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "necessitatibus";
                                                    phoneNumber = "harum";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                }};
                                                webAddress = "beatae";
                                            }}),
                                            add(new LegalArrangementEntityDetail() {{
                                                address = new ViasAddress() {{
                                                    city = "West Noel";
                                                    country = "Virgin Islands, British";
                                                    houseNumberOrName = "molestias";
                                                    postalCode = "75134-7412";
                                                    stateOrProvince = "reiciendis";
                                                    street = "866 Baumbach Hollow";
                                                }};
                                                businessDetails = new BusinessDetails() {{
                                                    doingBusinessAs = "rerum";
                                                    legalBusinessName = "recusandae";
                                                    listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "New Carmel";
                                                                country = "Guatemala";
                                                                houseNumberOrName = "quisquam";
                                                                postalCode = "97081";
                                                                stateOrProvince = "architecto";
                                                                street = "75079 Morar Corners";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "quos";
                                                                registrationNumber = "ullam";
                                                                stockExchange = "dolore";
                                                                stockNumber = "modi";
                                                                stockTicker = "itaque";
                                                            }};
                                                            ultimateParentCompanyCode = "maxime";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "East Rhianna";
                                                                country = "Tajikistan";
                                                                houseNumberOrName = "doloribus";
                                                                postalCode = "78590-5444";
                                                                stateOrProvince = "odio";
                                                                street = "84233 Lucio Knolls";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "distinctio";
                                                                registrationNumber = "eius";
                                                                stockExchange = "ipsa";
                                                                stockNumber = "rem";
                                                                stockTicker = "maiores";
                                                            }};
                                                            ultimateParentCompanyCode = "accusantium";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "Fort Consuelo";
                                                                country = "Solomon Islands";
                                                                houseNumberOrName = "aliquam";
                                                                postalCode = "98692-1260";
                                                                stateOrProvince = "repellat";
                                                                street = "9862 Freeman Orchard";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "optio";
                                                                registrationNumber = "alias";
                                                                stockExchange = "quidem";
                                                                stockNumber = "nesciunt";
                                                                stockTicker = "commodi";
                                                            }};
                                                            ultimateParentCompanyCode = "sapiente";
                                                        }}),
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "West Skylafurt";
                                                                country = "Micronesia";
                                                                houseNumberOrName = "ut";
                                                                postalCode = "92743";
                                                                stateOrProvince = "ex";
                                                                street = "019 Pansy Extensions";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "ducimus";
                                                                registrationNumber = "fuga";
                                                                stockExchange = "minima";
                                                                stockNumber = "architecto";
                                                                stockTicker = "qui";
                                                            }};
                                                            ultimateParentCompanyCode = "aliquid";
                                                        }}),
                                                    }};
                                                    registrationNumber = "magni";
                                                    shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "New Dakota";
                                                                country = "Guam";
                                                                houseNumberOrName = "expedita";
                                                                postalCode = "70361-2623";
                                                                stateOrProvince = "quod";
                                                                street = "973 Shields Tunnel";
                                                            }};
                                                            email = "Abigayle75@gmail.com";
                                                            fullPhoneNumber = "necessitatibus";
                                                            jobTitle = "Corporate Research Administrator";
                                                            name = new ViasName() {{
                                                                firstName = "Laurie";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "ullam";
                                                                lastName = "Brakus";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "accusantium";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "veritatis";
                                                                        issuerCountry = "provident";
                                                                        issuerState = "cumque";
                                                                        number = "iure";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                }};
                                                                nationality = "nemo";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "recusandae";
                                                                phoneNumber = "velit";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                            }};
                                                            shareholderCode = "dignissimos";
                                                            shareholderReference = "laboriosam";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.CONTROLLER;
                                                            webAddress = "odio";
                                                        }}),
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "McKenziefort";
                                                                country = "Western Sahara";
                                                                houseNumberOrName = "facilis";
                                                                postalCode = "93625-9717";
                                                                stateOrProvince = "nam";
                                                                street = "97694 Dooley Streets";
                                                            }};
                                                            email = "Rosie64@yahoo.com";
                                                            fullPhoneNumber = "assumenda";
                                                            jobTitle = "Chief Assurance Facilitator";
                                                            name = new ViasName() {{
                                                                firstName = "Enola";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "laborum";
                                                                lastName = "Veum";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "laborum";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "maxime";
                                                                        issuerCountry = "ipsam";
                                                                        issuerState = "alias";
                                                                        number = "suscipit";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "laborum";
                                                                        issuerCountry = "est";
                                                                        issuerState = "occaecati";
                                                                        number = "labore";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                }};
                                                                nationality = "fugit";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "aliquid";
                                                                phoneNumber = "magnam";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                            }};
                                                            shareholderCode = "eligendi";
                                                            shareholderReference = "hic";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                            webAddress = "officiis";
                                                        }}),
                                                    }};
                                                    signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "North Miami";
                                                                country = "Niue";
                                                                houseNumberOrName = "magnam";
                                                                postalCode = "45687";
                                                                stateOrProvince = "quasi";
                                                                street = "8300 Turcotte Spur";
                                                            }};
                                                            email = "Amelia_Brakus@gmail.com";
                                                            fullPhoneNumber = "blanditiis";
                                                            jobTitle = "Senior Directives Agent";
                                                            name = new ViasName() {{
                                                                firstName = "Caleigh";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "impedit";
                                                                lastName = "Bednar";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "excepturi";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "maiores";
                                                                        issuerCountry = "laudantium";
                                                                        issuerState = "maiores";
                                                                        number = "alias";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "dicta";
                                                                        issuerCountry = "suscipit";
                                                                        issuerState = "earum";
                                                                        number = "doloribus";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "esse";
                                                                        issuerCountry = "in";
                                                                        issuerState = "eligendi";
                                                                        number = "quasi";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "excepturi";
                                                                        issuerCountry = "accusantium";
                                                                        issuerState = "qui";
                                                                        number = "impedit";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                }};
                                                                nationality = "dicta";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "odit";
                                                                phoneNumber = "corporis";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                            }};
                                                            signatoryCode = "alias";
                                                            signatoryReference = "error";
                                                            webAddress = "vel";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Lake Gilbertoview";
                                                                country = "Martinique";
                                                                houseNumberOrName = "veritatis";
                                                                postalCode = "06241";
                                                                stateOrProvince = "deserunt";
                                                                street = "612 Hauck Oval";
                                                            }};
                                                            email = "Keven.Wuckert@gmail.com";
                                                            fullPhoneNumber = "reiciendis";
                                                            jobTitle = "Dynamic Identity Associate";
                                                            name = new ViasName() {{
                                                                firstName = "Parker";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "quas";
                                                                lastName = "Kreiger";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "aliquid";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "a";
                                                                        issuerCountry = "nobis";
                                                                        issuerState = "perspiciatis";
                                                                        number = "accusantium";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "commodi";
                                                                        issuerCountry = "eveniet";
                                                                        issuerState = "porro";
                                                                        number = "tempore";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "voluptates";
                                                                        issuerCountry = "fugit";
                                                                        issuerState = "eius";
                                                                        number = "sequi";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "esse";
                                                                        issuerCountry = "blanditiis";
                                                                        issuerState = "sint";
                                                                        number = "repellat";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                }};
                                                                nationality = "maiores";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "itaque";
                                                                phoneNumber = "nulla";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                            }};
                                                            signatoryCode = "corporis";
                                                            signatoryReference = "velit";
                                                            webAddress = "officiis";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Lake Stevie";
                                                                country = "Israel";
                                                                houseNumberOrName = "repudiandae";
                                                                postalCode = "67052";
                                                                stateOrProvince = "quisquam";
                                                                street = "76713 Presley Mission";
                                                            }};
                                                            email = "Dannie67@yahoo.com";
                                                            fullPhoneNumber = "modi";
                                                            jobTitle = "Lead Interactions Executive";
                                                            name = new ViasName() {{
                                                                firstName = "Kendrick";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "sunt";
                                                                lastName = "Wunsch";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "neque";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "earum";
                                                                        issuerCountry = "veniam";
                                                                        issuerState = "ipsam";
                                                                        number = "eaque";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                }};
                                                                nationality = "nihil";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "ad";
                                                                phoneNumber = "nisi";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                            }};
                                                            signatoryCode = "quis";
                                                            signatoryReference = "quibusdam";
                                                            webAddress = "nemo";
                                                        }}),
                                                    }};
                                                    stockExchange = "suscipit";
                                                    stockNumber = "pariatur";
                                                    stockTicker = "sit";
                                                    taxId = "quidem";
                                                }};
                                                email = "Ahmed.Olson82@hotmail.com";
                                                fullPhoneNumber = "repellat";
                                                individualDetails = new IndividualDetails() {{
                                                    name = new ViasName() {{
                                                        firstName = "Thea";
                                                        gender = ViasNameGenderEnum.MALE;
                                                        infix = "adipisci";
                                                        lastName = "Stroman";
                                                    }};
                                                    personalData = new ViasPersonalData() {{
                                                        dateOfBirth = "harum";
                                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                expirationDate = "voluptatibus";
                                                                issuerCountry = "iure";
                                                                issuerState = "explicabo";
                                                                number = "minus";
                                                                type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                            }}),
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                expirationDate = "velit";
                                                                issuerCountry = "earum";
                                                                issuerState = "praesentium";
                                                                number = "error";
                                                                type = PersonalDocumentDataTypeEnum.ID;
                                                            }}),
                                                        }};
                                                        nationality = "mollitia";
                                                    }};
                                                }};
                                                legalArrangementEntityCode = "accusamus";
                                                legalArrangementEntityReference = "harum";
                                                legalArrangementMembers = new org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalArrangementMembersEnum[]{{
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.BENEFICIARY),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.SETTLOR),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.PROTECTOR),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.BENEFICIARY),
                                                }};
                                                legalEntityType = LegalArrangementEntityDetailLegalEntityTypeEnum.PARTNERSHIP;
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "aliquid";
                                                    phoneNumber = "excepturi";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                }};
                                                webAddress = "tempora";
                                            }}),
                                            add(new LegalArrangementEntityDetail() {{
                                                address = new ViasAddress() {{
                                                    city = "Cypress";
                                                    country = "Peru";
                                                    houseNumberOrName = "sed";
                                                    postalCode = "79775-9563";
                                                    stateOrProvince = "accusantium";
                                                    street = "09388 Sammie Junctions";
                                                }};
                                                businessDetails = new BusinessDetails() {{
                                                    doingBusinessAs = "sapiente";
                                                    legalBusinessName = "mollitia";
                                                    listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                                                        add(new UltimateParentCompany() {{
                                                            address = new ViasAddress() {{
                                                                city = "Alvahburgh";
                                                                country = "Turkey";
                                                                houseNumberOrName = "ad";
                                                                postalCode = "75190";
                                                                stateOrProvince = "aliquid";
                                                                street = "6242 Leffler Meadow";
                                                            }};
                                                            businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                                legalBusinessName = "ducimus";
                                                                registrationNumber = "adipisci";
                                                                stockExchange = "recusandae";
                                                                stockNumber = "tempora";
                                                                stockTicker = "blanditiis";
                                                            }};
                                                            ultimateParentCompanyCode = "numquam";
                                                        }}),
                                                    }};
                                                    registrationNumber = "sequi";
                                                    shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Lake Artshire";
                                                                country = "Ireland";
                                                                houseNumberOrName = "quidem";
                                                                postalCode = "76143-6406";
                                                                stateOrProvince = "aut";
                                                                street = "83637 Hodkiewicz Neck";
                                                            }};
                                                            email = "Arch72@yahoo.com";
                                                            fullPhoneNumber = "ipsam";
                                                            jobTitle = "Direct Accounts Executive";
                                                            name = new ViasName() {{
                                                                firstName = "Martine";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "facilis";
                                                                lastName = "Braun";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "cumque";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "labore";
                                                                        issuerCountry = "expedita";
                                                                        issuerState = "corrupti";
                                                                        number = "rem";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "cum";
                                                                        issuerCountry = "pariatur";
                                                                        issuerState = "sapiente";
                                                                        number = "quo";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "minus";
                                                                        issuerCountry = "porro";
                                                                        issuerState = "id";
                                                                        number = "excepturi";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "quo";
                                                                        issuerCountry = "esse";
                                                                        issuerState = "hic";
                                                                        number = "maxime";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                }};
                                                                nationality = "fugit";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "pariatur";
                                                                phoneNumber = "eligendi";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                            }};
                                                            shareholderCode = "veritatis";
                                                            shareholderReference = "aut";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                            webAddress = "iusto";
                                                        }}),
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Fort Dorothea";
                                                                country = "Chad";
                                                                houseNumberOrName = "rerum";
                                                                postalCode = "04844";
                                                                stateOrProvince = "voluptatum";
                                                                street = "4566 Hegmann Mill";
                                                            }};
                                                            email = "Mara.Hamill@gmail.com";
                                                            fullPhoneNumber = "quae";
                                                            jobTitle = "Global Creative Specialist";
                                                            name = new ViasName() {{
                                                                firstName = "Edison";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "saepe";
                                                                lastName = "Wintheiser";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "officia";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "cumque";
                                                                        issuerCountry = "natus";
                                                                        issuerState = "quaerat";
                                                                        number = "doloribus";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "mollitia";
                                                                        issuerCountry = "cumque";
                                                                        issuerState = "quis";
                                                                        number = "enim";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "illum";
                                                                        issuerCountry = "nesciunt";
                                                                        issuerState = "sit";
                                                                        number = "odio";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                }};
                                                                nationality = "recusandae";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "voluptates";
                                                                phoneNumber = "praesentium";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                            }};
                                                            shareholderCode = "fugit";
                                                            shareholderReference = "sit";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                            webAddress = "necessitatibus";
                                                        }}),
                                                        add(new ShareholderContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "New Borisberg";
                                                                country = "Venezuela";
                                                                houseNumberOrName = "laborum";
                                                                postalCode = "62172";
                                                                stateOrProvince = "voluptatum";
                                                                street = "82910 Bryon Ports";
                                                            }};
                                                            email = "Amara4@hotmail.com";
                                                            fullPhoneNumber = "aspernatur";
                                                            jobTitle = "Human Paradigm Associate";
                                                            name = new ViasName() {{
                                                                firstName = "Elias";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "numquam";
                                                                lastName = "Rowe";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "nobis";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                        expirationDate = "repellat";
                                                                        issuerCountry = "quae";
                                                                        issuerState = "deleniti";
                                                                        number = "expedita";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "aliquid";
                                                                        issuerCountry = "sed";
                                                                        issuerState = "beatae";
                                                                        number = "similique";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                }};
                                                                nationality = "dolore";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "tenetur";
                                                                phoneNumber = "dignissimos";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                            }};
                                                            shareholderCode = "animi";
                                                            shareholderReference = "laudantium";
                                                            shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                            webAddress = "eveniet";
                                                        }}),
                                                    }};
                                                    signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Fort Diamond";
                                                                country = "Philippines";
                                                                houseNumberOrName = "itaque";
                                                                postalCode = "31733";
                                                                stateOrProvince = "facilis";
                                                                street = "23159 Melvin Ridges";
                                                            }};
                                                            email = "Aracely_Schiller@yahoo.com";
                                                            fullPhoneNumber = "sint";
                                                            jobTitle = "Central Paradigm Agent";
                                                            name = new ViasName() {{
                                                                firstName = "Alvah";
                                                                gender = ViasNameGenderEnum.UNKNOWN;
                                                                infix = "laudantium";
                                                                lastName = "Goldner";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "quae";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "illum";
                                                                        issuerCountry = "rem";
                                                                        issuerState = "tenetur";
                                                                        number = "deleniti";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "architecto";
                                                                        issuerCountry = "aliquam";
                                                                        issuerState = "labore";
                                                                        number = "maiores";
                                                                        type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "consequatur";
                                                                        issuerCountry = "esse";
                                                                        issuerState = "debitis";
                                                                        number = "facere";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                }};
                                                                nationality = "aliquam";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "dolorum";
                                                                phoneNumber = "deserunt";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                            }};
                                                            signatoryCode = "reiciendis";
                                                            signatoryReference = "sequi";
                                                            webAddress = "porro";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Rohanhaven";
                                                                country = "Myanmar";
                                                                houseNumberOrName = "aut";
                                                                postalCode = "65418";
                                                                stateOrProvince = "accusantium";
                                                                street = "34151 Jayce Rapids";
                                                            }};
                                                            email = "Rick57@gmail.com";
                                                            fullPhoneNumber = "dolore";
                                                            jobTitle = "District Program Developer";
                                                            name = new ViasName() {{
                                                                firstName = "Vern";
                                                                gender = ViasNameGenderEnum.FEMALE;
                                                                infix = "est";
                                                                lastName = "Hackett";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "delectus";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "voluptatum";
                                                                        issuerCountry = "iusto";
                                                                        issuerState = "quod";
                                                                        number = "voluptatibus";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "ullam";
                                                                        issuerCountry = "laborum";
                                                                        issuerState = "voluptas";
                                                                        number = "doloribus";
                                                                        type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                                        expirationDate = "corporis";
                                                                        issuerCountry = "non";
                                                                        issuerState = "necessitatibus";
                                                                        number = "distinctio";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                }};
                                                                nationality = "voluptatem";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "optio";
                                                                phoneNumber = "sequi";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                            }};
                                                            signatoryCode = "vitae";
                                                            signatoryReference = "voluptatibus";
                                                            webAddress = "doloremque";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "East Maximusport";
                                                                country = "Guadeloupe";
                                                                houseNumberOrName = "temporibus";
                                                                postalCode = "23499";
                                                                stateOrProvince = "vitae";
                                                                street = "077 Schuppe Way";
                                                            }};
                                                            email = "Lafayette62@yahoo.com";
                                                            fullPhoneNumber = "nesciunt";
                                                            jobTitle = "Customer Markets Assistant";
                                                            name = new ViasName() {{
                                                                firstName = "Lea";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "impedit";
                                                                lastName = "Donnelly";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "commodi";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                                        expirationDate = "expedita";
                                                                        issuerCountry = "in";
                                                                        issuerState = "quisquam";
                                                                        number = "sunt";
                                                                        type = PersonalDocumentDataTypeEnum.ID;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "maiores";
                                                                        issuerCountry = "distinctio";
                                                                        issuerState = "mollitia";
                                                                        number = "impedit";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                }};
                                                                nationality = "quas";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "blanditiis";
                                                                phoneNumber = "cum";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                            }};
                                                            signatoryCode = "impedit";
                                                            signatoryReference = "tempora";
                                                            webAddress = "eveniet";
                                                        }}),
                                                        add(new SignatoryContact() {{
                                                            address = new ViasAddress() {{
                                                                city = "Castro Valley";
                                                                country = "Samoa";
                                                                houseNumberOrName = "quas";
                                                                postalCode = "47941-0998";
                                                                stateOrProvince = "quidem";
                                                                street = "74778 Homenick Union";
                                                            }};
                                                            email = "Polly21@hotmail.com";
                                                            fullPhoneNumber = "ducimus";
                                                            jobTitle = "Central Quality Technician";
                                                            name = new ViasName() {{
                                                                firstName = "Brittany";
                                                                gender = ViasNameGenderEnum.MALE;
                                                                infix = "sequi";
                                                                lastName = "Breitenberg";
                                                            }};
                                                            personalData = new ViasPersonalData() {{
                                                                dateOfBirth = "iusto";
                                                                documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                                        expirationDate = "magnam";
                                                                        issuerCountry = "odio";
                                                                        issuerState = "nulla";
                                                                        number = "impedit";
                                                                        type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                                    }}),
                                                                    add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                                                        expirationDate = "exercitationem";
                                                                        issuerCountry = "laborum";
                                                                        issuerState = "illum";
                                                                        number = "fugit";
                                                                        type = PersonalDocumentDataTypeEnum.VISA;
                                                                    }}),
                                                                }};
                                                                nationality = "repellat";
                                                            }};
                                                            phoneNumber = new ViasPhoneNumber() {{
                                                                phoneCountryCode = "nostrum";
                                                                phoneNumber = "illum";
                                                                phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                                            }};
                                                            signatoryCode = "commodi";
                                                            signatoryReference = "esse";
                                                            webAddress = "explicabo";
                                                        }}),
                                                    }};
                                                    stockExchange = "consectetur";
                                                    stockNumber = "temporibus";
                                                    stockTicker = "optio";
                                                    taxId = "ipsa";
                                                }};
                                                email = "Federico.Nader96@hotmail.com";
                                                fullPhoneNumber = "neque";
                                                individualDetails = new IndividualDetails() {{
                                                    name = new ViasName() {{
                                                        firstName = "Lucile";
                                                        gender = ViasNameGenderEnum.FEMALE;
                                                        infix = "harum";
                                                        lastName = "Kunze";
                                                    }};
                                                    personalData = new ViasPersonalData() {{
                                                        dateOfBirth = "doloremque";
                                                        documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                            add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                                expirationDate = "laudantium";
                                                                issuerCountry = "iusto";
                                                                issuerState = "corrupti";
                                                                number = "molestiae";
                                                                type = PersonalDocumentDataTypeEnum.ID;
                                                            }}),
                                                        }};
                                                        nationality = "ab";
                                                    }};
                                                }};
                                                legalArrangementEntityCode = "quaerat";
                                                legalArrangementEntityReference = "amet";
                                                legalArrangementMembers = new org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalArrangementMembersEnum[]{{
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.PARTNER),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.SETTLOR),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.PROTECTOR),
                                                    add(LegalArrangementEntityDetailLegalArrangementMembersEnum.SHAREHOLDER),
                                                }};
                                                legalEntityType = LegalArrangementEntityDetailLegalEntityTypeEnum.NON_PROFIT;
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "laudantium";
                                                    phoneNumber = "nam";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                }};
                                                webAddress = "enim";
                                            }}),
                                        }};
                                        legalArrangementReference = "ipsam";
                                        legalForm = LegalArrangementDetailLegalFormEnum.DISCRETIONARY_TRADING_TRUST;
                                        name = "Dr. Dorothy Lockman";
                                        registrationNumber = "doloremque";
                                        taxNumber = "cum";
                                        type = LegalArrangementDetailTypeEnum.TRUST;
                                    }}),
                                }};
                                merchantCategoryCode = "possimus";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "nostrum");
                                }};
                                payoutMethods = new org.openapis.openapi.models.shared.PayoutMethod[]{{
                                    add(new PayoutMethod("voluptate", "eius", "expedita") {{
                                        merchantAccount = "voluptatum";
                                        payoutMethodCode = "quasi";
                                        payoutMethodReference = "error";
                                        recurringDetailReference = "nobis";
                                        shopperReference = "tempora";
                                    }}),
                                }};
                                principalBusinessAddress = new ViasAddress() {{
                                    city = "Fort Reneville";
                                    country = "Anguilla";
                                    houseNumberOrName = "repudiandae";
                                    postalCode = "41359";
                                    stateOrProvince = "maiores";
                                    street = "415 McLaughlin Common";
                                }};;
                                storeDetails = new org.openapis.openapi.models.shared.StoreDetail[]{{
                                    add(new StoreDetail(                new ViasAddress() {{
                                                        city = "Rosannatown";
                                                        country = "San Marino";
                                                        houseNumberOrName = "veniam";
                                                        postalCode = "58902";
                                                        stateOrProvince = "alias";
                                                        street = "25456 Barry Villages";
                                                    }};, "laborum", "veritatis") {{
                                        address = new ViasAddress() {{
                                            city = "Reicherthaven";
                                            country = "San Marino";
                                            houseNumberOrName = "fuga";
                                            postalCode = "41343-3538";
                                            stateOrProvince = "ab";
                                            street = "700 Carter Corner";
                                        }};
                                        fullPhoneNumber = "quidem";
                                        logo = "sequi";
                                        merchantAccount = "amet";
                                        merchantCategoryCode = "exercitationem";
                                        merchantHouseNumber = "illum";
                                        phoneNumber = new ViasPhoneNumber() {{
                                            phoneCountryCode = "praesentium";
                                            phoneNumber = "unde";
                                            phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                        }};
                                        shopperInteraction = StoreDetailShopperInteractionEnum.POS;
                                        splitConfigurationUUID = "tempore";
                                        status = StoreDetailStatusEnum.CLOSED;
                                        store = "debitis";
                                        storeName = "nobis";
                                        storeReference = "asperiores";
                                        virtualAccount = "temporibus";
                                        webAddress = "id";
                                    }}),
                                }};
                                webAddress = "quod";
                            }};, CreateAccountHolderRequestLegalEntityEnum.PUBLIC_COMPANY) {{
                createDefaultAccount = false;
                description = "qui";
                primaryCurrency = "accusantium";
                processingTier = 415125;
                verificationProfile = "atque";
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
                accountCode = "totam";
                accountHolderCode = "tenetur";
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

            org.openapis.openapi.models.shared.GetTaxFormRequest req = new GetTaxFormRequest("voluptate", "quam", 799830);            

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

            org.openapis.openapi.models.shared.SuspendAccountHolderRequest req = new SuspendAccountHolderRequest("vitae");            

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

            org.openapis.openapi.models.shared.UnSuspendAccountHolderRequest req = new UnSuspendAccountHolderRequest("sapiente");            

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
import org.openapis.openapi.models.shared.LegalArrangementDetail;
import org.openapis.openapi.models.shared.LegalArrangementDetailLegalFormEnum;
import org.openapis.openapi.models.shared.LegalArrangementDetailTypeEnum;
import org.openapis.openapi.models.shared.LegalArrangementEntityDetail;
import org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalArrangementMembersEnum;
import org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalEntityTypeEnum;
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

            org.openapis.openapi.models.shared.UpdateAccountHolderRequest req = new UpdateAccountHolderRequest("reiciendis") {{
                accountHolderDetails = new AccountHolderDetails() {{
                    address = new ViasAddress() {{
                        city = "Kleinton";
                        country = "Solomon Islands";
                        houseNumberOrName = "maxime";
                        postalCode = "04291-6175";
                        stateOrProvince = "perferendis";
                        street = "649 Flatley Ferry";
                    }};;
                    bankAccountDetails = new org.openapis.openapi.models.shared.BankAccountDetail[]{{
                        add(new BankAccountDetail() {{
                            accountNumber = "optio";
                            accountType = "illum";
                            bankAccountName = "at";
                            bankAccountReference = "tenetur";
                            bankAccountUUID = "molestias";
                            bankBicSwift = "ipsam";
                            bankCity = "esse";
                            bankCode = "laborum";
                            bankName = "perspiciatis";
                            branchCode = "voluptates";
                            checkCode = "eum";
                            countryCode = "BI";
                            currencyCode = "quas";
                            iban = "odio";
                            ownerCity = "commodi";
                            ownerCountryCode = "porro";
                            ownerDateOfBirth = "aliquid";
                            ownerHouseNumberOrName = "mollitia";
                            ownerName = "quidem";
                            ownerNationality = "explicabo";
                            ownerPostalCode = "et";
                            ownerState = "nulla";
                            ownerStreet = "magni";
                            primaryAccount = false;
                            taxId = "natus";
                            urlForVerification = "illum";
                        }}),
                        add(new BankAccountDetail() {{
                            accountNumber = "a";
                            accountType = "impedit";
                            bankAccountName = "unde";
                            bankAccountReference = "ut";
                            bankAccountUUID = "facere";
                            bankBicSwift = "voluptas";
                            bankCity = "doloribus";
                            bankCode = "recusandae";
                            bankName = "quisquam";
                            branchCode = "facere";
                            checkCode = "dignissimos";
                            countryCode = "MT";
                            currencyCode = "provident";
                            iban = "dolor";
                            ownerCity = "sint";
                            ownerCountryCode = "aperiam";
                            ownerDateOfBirth = "eaque";
                            ownerHouseNumberOrName = "eum";
                            ownerName = "laboriosam";
                            ownerNationality = "laborum";
                            ownerPostalCode = "autem";
                            ownerState = "assumenda";
                            ownerStreet = "explicabo";
                            primaryAccount = false;
                            taxId = "fugiat";
                            urlForVerification = "doloremque";
                        }}),
                    }};
                    bankAggregatorDataReference = "voluptatem";
                    businessDetails = new BusinessDetails() {{
                        doingBusinessAs = "alias";
                        legalBusinessName = "velit";
                        listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                            add(new UltimateParentCompany() {{
                                address = new ViasAddress() {{
                                    city = "East Clair";
                                    country = "Martinique";
                                    houseNumberOrName = "maxime";
                                    postalCode = "70549-6108";
                                    stateOrProvince = "iste";
                                    street = "31762 Braden Mountain";
                                }};
                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                    legalBusinessName = "beatae";
                                    registrationNumber = "autem";
                                    stockExchange = "ducimus";
                                    stockNumber = "libero";
                                    stockTicker = "molestias";
                                }};
                                ultimateParentCompanyCode = "necessitatibus";
                            }}),
                            add(new UltimateParentCompany() {{
                                address = new ViasAddress() {{
                                    city = "Port Kathryne";
                                    country = "Svalbard & Jan Mayen Islands";
                                    houseNumberOrName = "distinctio";
                                    postalCode = "23058";
                                    stateOrProvince = "commodi";
                                    street = "233 West Station";
                                }};
                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                    legalBusinessName = "dolore";
                                    registrationNumber = "enim";
                                    stockExchange = "ullam";
                                    stockNumber = "perspiciatis";
                                    stockTicker = "alias";
                                }};
                                ultimateParentCompanyCode = "ex";
                            }}),
                        }};
                        registrationNumber = "quibusdam";
                        shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                            add(new ShareholderContact() {{
                                address = new ViasAddress() {{
                                    city = "South Conniehaven";
                                    country = "El Salvador";
                                    houseNumberOrName = "rem";
                                    postalCode = "62371-8595";
                                    stateOrProvince = "dicta";
                                    street = "207 Dietrich Via";
                                }};
                                email = "Dayna17@gmail.com";
                                fullPhoneNumber = "illum";
                                jobTitle = "Central Directives Executive";
                                name = new ViasName() {{
                                    firstName = "Graciela";
                                    gender = ViasNameGenderEnum.MALE;
                                    infix = "voluptate";
                                    lastName = "Kautzer";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "minima";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                            expirationDate = "vel";
                                            issuerCountry = "laboriosam";
                                            issuerState = "quaerat";
                                            number = "quasi";
                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                        }}),
                                    }};
                                    nationality = "doloremque";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "assumenda";
                                    phoneNumber = "provident";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                                }};
                                shareholderCode = "sed";
                                shareholderReference = "inventore";
                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                webAddress = "unde";
                            }}),
                        }};
                        signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                            add(new SignatoryContact() {{
                                address = new ViasAddress() {{
                                    city = "Alhambra";
                                    country = "Dominica";
                                    houseNumberOrName = "doloremque";
                                    postalCode = "28780-1605";
                                    stateOrProvince = "ratione";
                                    street = "2160 Jon Ranch";
                                }};
                                email = "Fermin64@yahoo.com";
                                fullPhoneNumber = "quaerat";
                                jobTitle = "National Accountability Analyst";
                                name = new ViasName() {{
                                    firstName = "Verona";
                                    gender = ViasNameGenderEnum.FEMALE;
                                    infix = "neque";
                                    lastName = "Predovic";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "quisquam";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                            expirationDate = "tempora";
                                            issuerCountry = "ipsam";
                                            issuerState = "officiis";
                                            number = "sequi";
                                            type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                            expirationDate = "est";
                                            issuerCountry = "amet";
                                            issuerState = "veritatis";
                                            number = "error";
                                            type = PersonalDocumentDataTypeEnum.VISA;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                            expirationDate = "rerum";
                                            issuerCountry = "dolorum";
                                            issuerState = "quibusdam";
                                            number = "earum";
                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                        }}),
                                    }};
                                    nationality = "molestiae";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "impedit";
                                    phoneNumber = "error";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                }};
                                signatoryCode = "voluptatum";
                                signatoryReference = "aliquid";
                                webAddress = "nihil";
                            }}),
                            add(new SignatoryContact() {{
                                address = new ViasAddress() {{
                                    city = "Roweboro";
                                    country = "China";
                                    houseNumberOrName = "magnam";
                                    postalCode = "44435";
                                    stateOrProvince = "illo";
                                    street = "8876 Volkman Wall";
                                }};
                                email = "Antonio_Wyman26@yahoo.com";
                                fullPhoneNumber = "cumque";
                                jobTitle = "National Intranet Manager";
                                name = new ViasName() {{
                                    firstName = "Shana";
                                    gender = ViasNameGenderEnum.UNKNOWN;
                                    infix = "quasi";
                                    lastName = "Considine";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "quo";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                            expirationDate = "mollitia";
                                            issuerCountry = "id";
                                            issuerState = "quibusdam";
                                            number = "ipsa";
                                            type = PersonalDocumentDataTypeEnum.VISA;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.SOCIALSECURITY) {{
                                            expirationDate = "quam";
                                            issuerCountry = "similique";
                                            issuerState = "delectus";
                                            number = "saepe";
                                            type = PersonalDocumentDataTypeEnum.VISA;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                            expirationDate = "at";
                                            issuerCountry = "molestias";
                                            issuerState = "aut";
                                            number = "temporibus";
                                            type = PersonalDocumentDataTypeEnum.VISA;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                            expirationDate = "numquam";
                                            issuerCountry = "corrupti";
                                            issuerState = "similique";
                                            number = "dolore";
                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                        }}),
                                    }};
                                    nationality = "iste";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "amet";
                                    phoneNumber = "occaecati";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                }};
                                signatoryCode = "impedit";
                                signatoryReference = "minima";
                                webAddress = "quos";
                            }}),
                            add(new SignatoryContact() {{
                                address = new ViasAddress() {{
                                    city = "Keiratown";
                                    country = "Montenegro";
                                    houseNumberOrName = "quas";
                                    postalCode = "86796";
                                    stateOrProvince = "recusandae";
                                    street = "299 Simonis Parkway";
                                }};
                                email = "Jeff46@hotmail.com";
                                fullPhoneNumber = "omnis";
                                jobTitle = "Investor Metrics Engineer";
                                name = new ViasName() {{
                                    firstName = "Rebecca";
                                    gender = ViasNameGenderEnum.MALE;
                                    infix = "quis";
                                    lastName = "Kirlin";
                                }};
                                personalData = new ViasPersonalData() {{
                                    dateOfBirth = "sed";
                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                            expirationDate = "porro";
                                            issuerCountry = "fugiat";
                                            issuerState = "soluta";
                                            number = "ipsa";
                                            type = PersonalDocumentDataTypeEnum.VISA;
                                        }}),
                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                            expirationDate = "vero";
                                            issuerCountry = "eos";
                                            issuerState = "quas";
                                            number = "quasi";
                                            type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                        }}),
                                    }};
                                    nationality = "iusto";
                                }};
                                phoneNumber = new ViasPhoneNumber() {{
                                    phoneCountryCode = "fugiat";
                                    phoneNumber = "enim";
                                    phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                }};
                                signatoryCode = "laudantium";
                                signatoryReference = "modi";
                                webAddress = "magnam";
                            }}),
                        }};
                        stockExchange = "accusamus";
                        stockNumber = "nulla";
                        stockTicker = "repudiandae";
                        taxId = "quibusdam";
                    }};;
                    email = "Emerald.Okuneva@yahoo.com";
                    fullPhoneNumber = "eum";
                    individualDetails = new IndividualDetails() {{
                        name = new ViasName() {{
                            firstName = "Evan";
                            gender = ViasNameGenderEnum.UNKNOWN;
                            infix = "laboriosam";
                            lastName = "Dibbert";
                        }};;
                        personalData = new ViasPersonalData() {{
                            dateOfBirth = "blanditiis";
                            documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                    expirationDate = "illum";
                                    issuerCountry = "reiciendis";
                                    issuerState = "placeat";
                                    number = "dolores";
                                    type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                }}),
                                add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                    expirationDate = "quia";
                                    issuerCountry = "quidem";
                                    issuerState = "voluptas";
                                    number = "quo";
                                    type = PersonalDocumentDataTypeEnum.PASSPORT;
                                }}),
                                add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                    expirationDate = "omnis";
                                    issuerCountry = "omnis";
                                    issuerState = "fugit";
                                    number = "dolorem";
                                    type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                }}),
                            }};
                            nationality = "debitis";
                        }};;
                    }};;
                    lastReviewDate = "vitae";
                    legalArrangements = new org.openapis.openapi.models.shared.LegalArrangementDetail[]{{
                        add(new LegalArrangementDetail(                new ViasAddress() {{
                                            city = "Springfield";
                                            country = "Liechtenstein";
                                            houseNumberOrName = "sint";
                                            postalCode = "75789";
                                            stateOrProvince = "dolores";
                                            street = "87536 Lafayette Fall";
                                        }};, "dolor", LegalArrangementDetailTypeEnum.PARTNERSHIP) {{
                            address = new ViasAddress() {{
                                city = "New Edd";
                                country = "Yemen";
                                houseNumberOrName = "reprehenderit";
                                postalCode = "90174-5619";
                                stateOrProvince = "laudantium";
                                street = "79103 Arno Lakes";
                            }};
                            legalArrangementCode = "sed";
                            legalArrangementEntities = new org.openapis.openapi.models.shared.LegalArrangementEntityDetail[]{{
                                add(new LegalArrangementEntityDetail() {{
                                    address = new ViasAddress() {{
                                        city = "West Danialport";
                                        country = "Kazakhstan";
                                        houseNumberOrName = "pariatur";
                                        postalCode = "96558-9643";
                                        stateOrProvince = "voluptates";
                                        street = "34453 Lavada Creek";
                                    }};
                                    businessDetails = new BusinessDetails() {{
                                        doingBusinessAs = "itaque";
                                        legalBusinessName = "unde";
                                        listedUltimateParentCompany = new org.openapis.openapi.models.shared.UltimateParentCompany[]{{
                                            add(new UltimateParentCompany() {{
                                                address = new ViasAddress() {{
                                                    city = "Port Rodolfo";
                                                    country = "Serbia";
                                                    houseNumberOrName = "minima";
                                                    postalCode = "11089-6101";
                                                    stateOrProvince = "aliquid";
                                                    street = "321 Hagenes Square";
                                                }};
                                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                    legalBusinessName = "vitae";
                                                    registrationNumber = "omnis";
                                                    stockExchange = "alias";
                                                    stockNumber = "sapiente";
                                                    stockTicker = "officiis";
                                                }};
                                                ultimateParentCompanyCode = "expedita";
                                            }}),
                                            add(new UltimateParentCompany() {{
                                                address = new ViasAddress() {{
                                                    city = "North Jeffstad";
                                                    country = "Austria";
                                                    houseNumberOrName = "distinctio";
                                                    postalCode = "87087-7887";
                                                    stateOrProvince = "magnam";
                                                    street = "2405 Purdy Freeway";
                                                }};
                                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                    legalBusinessName = "repudiandae";
                                                    registrationNumber = "amet";
                                                    stockExchange = "natus";
                                                    stockNumber = "ab";
                                                    stockTicker = "officiis";
                                                }};
                                                ultimateParentCompanyCode = "eum";
                                            }}),
                                            add(new UltimateParentCompany() {{
                                                address = new ViasAddress() {{
                                                    city = "Schowalterton";
                                                    country = "Georgia";
                                                    houseNumberOrName = "blanditiis";
                                                    postalCode = "27293-2355";
                                                    stateOrProvince = "itaque";
                                                    street = "221 Geoffrey Cape";
                                                }};
                                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                    legalBusinessName = "eveniet";
                                                    registrationNumber = "sint";
                                                    stockExchange = "nobis";
                                                    stockNumber = "qui";
                                                    stockTicker = "accusantium";
                                                }};
                                                ultimateParentCompanyCode = "consequatur";
                                            }}),
                                            add(new UltimateParentCompany() {{
                                                address = new ViasAddress() {{
                                                    city = "Walterport";
                                                    country = "Maldives";
                                                    houseNumberOrName = "est";
                                                    postalCode = "78596";
                                                    stateOrProvince = "in";
                                                    street = "0611 Niko Trail";
                                                }};
                                                businessDetails = new UltimateParentCompanyBusinessDetails() {{
                                                    legalBusinessName = "dignissimos";
                                                    registrationNumber = "fugit";
                                                    stockExchange = "ratione";
                                                    stockNumber = "possimus";
                                                    stockTicker = "quaerat";
                                                }};
                                                ultimateParentCompanyCode = "aut";
                                            }}),
                                        }};
                                        registrationNumber = "natus";
                                        shareholders = new org.openapis.openapi.models.shared.ShareholderContact[]{{
                                            add(new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Orange";
                                                    country = "Cocos (Keeling) Islands";
                                                    houseNumberOrName = "ipsa";
                                                    postalCode = "66941-3716";
                                                    stateOrProvince = "dicta";
                                                    street = "10208 Frami Views";
                                                }};
                                                email = "Luisa.Waters49@yahoo.com";
                                                fullPhoneNumber = "provident";
                                                jobTitle = "Customer Creative Liaison";
                                                name = new ViasName() {{
                                                    firstName = "Bryon";
                                                    gender = ViasNameGenderEnum.UNKNOWN;
                                                    infix = "deleniti";
                                                    lastName = "Rowe";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "quasi";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                            expirationDate = "atque";
                                                            issuerCountry = "magnam";
                                                            issuerState = "perspiciatis";
                                                            number = "amet";
                                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                        }}),
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                            expirationDate = "nemo";
                                                            issuerCountry = "delectus";
                                                            issuerState = "illum";
                                                            number = "porro";
                                                            type = PersonalDocumentDataTypeEnum.ID;
                                                        }}),
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                            expirationDate = "cumque";
                                                            issuerCountry = "quos";
                                                            issuerState = "in";
                                                            number = "commodi";
                                                            type = PersonalDocumentDataTypeEnum.VISA;
                                                        }}),
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.ID) {{
                                                            expirationDate = "minus";
                                                            issuerCountry = "consequuntur";
                                                            issuerState = "possimus";
                                                            number = "delectus";
                                                            type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                        }}),
                                                    }};
                                                    nationality = "eligendi";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "hic";
                                                    phoneNumber = "quo";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                }};
                                                shareholderCode = "nobis";
                                                shareholderReference = "esse";
                                                shareholderType = ShareholderContactShareholderTypeEnum.OWNER;
                                                webAddress = "explicabo";
                                            }}),
                                            add(new ShareholderContact() {{
                                                address = new ViasAddress() {{
                                                    city = "North Waldostad";
                                                    country = "El Salvador";
                                                    houseNumberOrName = "vitae";
                                                    postalCode = "71681-2987";
                                                    stateOrProvince = "ab";
                                                    street = "87479 Ludie Highway";
                                                }};
                                                email = "Flossie_Mante@yahoo.com";
                                                fullPhoneNumber = "necessitatibus";
                                                jobTitle = "Direct Directives Technician";
                                                name = new ViasName() {{
                                                    firstName = "Sean";
                                                    gender = ViasNameGenderEnum.MALE;
                                                    infix = "voluptatem";
                                                    lastName = "Smitham";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "id";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                            expirationDate = "commodi";
                                                            issuerCountry = "a";
                                                            issuerState = "minus";
                                                            number = "sed";
                                                            type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                        }}),
                                                    }};
                                                    nationality = "iusto";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "ab";
                                                    phoneNumber = "deserunt";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                                }};
                                                shareholderCode = "blanditiis";
                                                shareholderReference = "sint";
                                                shareholderType = ShareholderContactShareholderTypeEnum.SIGNATORY;
                                                webAddress = "ullam";
                                            }}),
                                        }};
                                        signatories = new org.openapis.openapi.models.shared.SignatoryContact[]{{
                                            add(new SignatoryContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Malden";
                                                    country = "Guinea-Bissau";
                                                    houseNumberOrName = "non";
                                                    postalCode = "60325-8111";
                                                    stateOrProvince = "eius";
                                                    street = "3452 Brenden Fords";
                                                }};
                                                email = "Jedediah.Bailey@gmail.com";
                                                fullPhoneNumber = "delectus";
                                                jobTitle = "District Quality Producer";
                                                name = new ViasName() {{
                                                    firstName = "Claudie";
                                                    gender = ViasNameGenderEnum.FEMALE;
                                                    infix = "optio";
                                                    lastName = "Turner";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "maiores";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.PASSPORT) {{
                                                            expirationDate = "sed";
                                                            issuerCountry = "eos";
                                                            issuerState = "consequuntur";
                                                            number = "quis";
                                                            type = PersonalDocumentDataTypeEnum.DRIVINGLICENSE;
                                                        }}),
                                                    }};
                                                    nationality = "labore";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "fugiat";
                                                    phoneNumber = "quidem";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.LANDLINE;
                                                }};
                                                signatoryCode = "veniam";
                                                signatoryReference = "modi";
                                                webAddress = "quasi";
                                            }}),
                                            add(new SignatoryContact() {{
                                                address = new ViasAddress() {{
                                                    city = "Lake Reillyfort";
                                                    country = "Heard Island and McDonald Islands";
                                                    houseNumberOrName = "ex";
                                                    postalCode = "69506-1474";
                                                    stateOrProvince = "maxime";
                                                    street = "755 Wilfred Brooks";
                                                }};
                                                email = "Johnpaul.Mills@yahoo.com";
                                                fullPhoneNumber = "facere";
                                                jobTitle = "Regional Mobility Producer";
                                                name = new ViasName() {{
                                                    firstName = "D'angelo";
                                                    gender = ViasNameGenderEnum.MALE;
                                                    infix = "minus";
                                                    lastName = "Welch";
                                                }};
                                                personalData = new ViasPersonalData() {{
                                                    dateOfBirth = "similique";
                                                    documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                            expirationDate = "consectetur";
                                                            issuerCountry = "labore";
                                                            issuerState = "laudantium";
                                                            number = "cumque";
                                                            type = PersonalDocumentDataTypeEnum.ID;
                                                        }}),
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.VISA) {{
                                                            expirationDate = "nam";
                                                            issuerCountry = "voluptatibus";
                                                            issuerState = "magnam";
                                                            number = "aperiam";
                                                            type = PersonalDocumentDataTypeEnum.PASSPORT;
                                                        }}),
                                                        add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                            expirationDate = "necessitatibus";
                                                            issuerCountry = "numquam";
                                                            issuerState = "doloribus";
                                                            number = "eligendi";
                                                            type = PersonalDocumentDataTypeEnum.VISA;
                                                        }}),
                                                    }};
                                                    nationality = "impedit";
                                                }};
                                                phoneNumber = new ViasPhoneNumber() {{
                                                    phoneCountryCode = "numquam";
                                                    phoneNumber = "aspernatur";
                                                    phoneType = ViasPhoneNumberPhoneTypeEnum.MOBILE;
                                                }};
                                                signatoryCode = "nihil";
                                                signatoryReference = "voluptatum";
                                                webAddress = "reiciendis";
                                            }}),
                                        }};
                                        stockExchange = "vitae";
                                        stockNumber = "ullam";
                                        stockTicker = "nisi";
                                        taxId = "consequuntur";
                                    }};
                                    email = "Claud_Mante@yahoo.com";
                                    fullPhoneNumber = "perferendis";
                                    individualDetails = new IndividualDetails() {{
                                        name = new ViasName() {{
                                            firstName = "Romaine";
                                            gender = ViasNameGenderEnum.UNKNOWN;
                                            infix = "ducimus";
                                            lastName = "Huel";
                                        }};
                                        personalData = new ViasPersonalData() {{
                                            dateOfBirth = "nisi";
                                            documentData = new org.openapis.openapi.models.shared.PersonalDocumentData[]{{
                                                add(new PersonalDocumentData(PersonalDocumentDataTypeEnum.DRIVINGLICENSE) {{
                                                    expirationDate = "fugit";
                                                    issuerCountry = "dolore";
                                                    issuerState = "maxime";
                                                    number = "maxime";
                                                    type = PersonalDocumentDataTypeEnum.SOCIALSECURITY;
                                                }}),
                                            }};
                                            nationality = "ea";
                                        }};
                                    }};
                                    legalArrangementEntityCode = "impedit";
                                    legalArrangementEntityReference = "totam";
                                    legalArrangementMembers = new org.openapis.openapi.models.shared.LegalArrangementEntityDetailLegalArrangementMembersEnum[]{{
                                        add(LegalArrangementEntityDetailLegalArrangementMembersEnum.SETTLOR),
                                        add(LegalArrangementEntityDetailLegalArrangementMembersEnum.BENEFICIARY),
                                        add(LegalArrangementEntityDetailLegalArrangementMembersEnum.CONTROLLING_PERSON),
                                        add(LegalArrangementEntityDetailLegalArrangementMembersEnum.SHAREHOLDER),
                                    }};
                                    legalEntityType = LegalArrangementEntityDetailLegalEntityTypeEnum.BUSINESS;
                                    phoneNumber = new ViasPhoneNumber() {{
                                        phoneCountryCode = "dolores";
                                        phoneNumber = "enim";
                                        phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                                    }};
                                    webAddress = "perspiciatis";
                                }}),
                            }};
                            legalArrangementReference = "magni";
                            legalForm = LegalArrangementDetailLegalFormEnum.FIXED_UNIT_TRUST;
                            name = "Alison Lesch";
                            registrationNumber = "odio";
                            taxNumber = "fugit";
                            type = LegalArrangementDetailTypeEnum.ASSOCIATION;
                        }}),
                    }};
                    merchantCategoryCode = "qui";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("molestiae", "dolore");
                        put("ullam", "velit");
                        put("adipisci", "cupiditate");
                        put("occaecati", "numquam");
                    }};
                    payoutMethods = new org.openapis.openapi.models.shared.PayoutMethod[]{{
                        add(new PayoutMethod("distinctio", "vel", "necessitatibus") {{
                            merchantAccount = "molestiae";
                            payoutMethodCode = "quas";
                            payoutMethodReference = "repellendus";
                            recurringDetailReference = "saepe";
                            shopperReference = "amet";
                        }}),
                        add(new PayoutMethod("ullam", "dolorum", "soluta") {{
                            merchantAccount = "iste";
                            payoutMethodCode = "nesciunt";
                            payoutMethodReference = "corrupti";
                            recurringDetailReference = "cupiditate";
                            shopperReference = "voluptatibus";
                        }}),
                        add(new PayoutMethod("fugit", "ullam", "ullam") {{
                            merchantAccount = "cum";
                            payoutMethodCode = "in";
                            payoutMethodReference = "delectus";
                            recurringDetailReference = "commodi";
                            shopperReference = "commodi";
                        }}),
                        add(new PayoutMethod("totam", "qui", "deserunt") {{
                            merchantAccount = "doloremque";
                            payoutMethodCode = "est";
                            payoutMethodReference = "qui";
                            recurringDetailReference = "praesentium";
                            shopperReference = "adipisci";
                        }}),
                    }};
                    principalBusinessAddress = new ViasAddress() {{
                        city = "Gorczanystad";
                        country = "Cuba";
                        houseNumberOrName = "est";
                        postalCode = "81203-7763";
                        stateOrProvince = "ipsam";
                        street = "04290 Yasmine Glens";
                    }};;
                    storeDetails = new org.openapis.openapi.models.shared.StoreDetail[]{{
                        add(new StoreDetail(                new ViasAddress() {{
                                            city = "Kertzmannstad";
                                            country = "New Zealand";
                                            houseNumberOrName = "sint";
                                            postalCode = "23805-3739";
                                            stateOrProvince = "ea";
                                            street = "9890 Alexie Valley";
                                        }};, "provident", "maiores") {{
                            address = new ViasAddress() {{
                                city = "Johnson City";
                                country = "Niger";
                                houseNumberOrName = "repudiandae";
                                postalCode = "51775";
                                stateOrProvince = "facilis";
                                street = "992 Betsy Creek";
                            }};
                            fullPhoneNumber = "nam";
                            logo = "ex";
                            merchantAccount = "neque";
                            merchantCategoryCode = "quod";
                            merchantHouseNumber = "eos";
                            phoneNumber = new ViasPhoneNumber() {{
                                phoneCountryCode = "alias";
                                phoneNumber = "ad";
                                phoneType = ViasPhoneNumberPhoneTypeEnum.SIP;
                            }};
                            shopperInteraction = StoreDetailShopperInteractionEnum.POS;
                            splitConfigurationUUID = "id";
                            status = StoreDetailStatusEnum.INACTIVE;
                            store = "quaerat";
                            storeName = "aperiam";
                            storeReference = "dignissimos";
                            virtualAccount = "quam";
                            webAddress = "modi";
                        }}),
                        add(new StoreDetail(                new ViasAddress() {{
                                            city = "Mooreside";
                                            country = "Qatar";
                                            houseNumberOrName = "animi";
                                            postalCode = "49482";
                                            stateOrProvince = "voluptates";
                                            street = "035 Eleanora Brooks";
                                        }};, "illum", "laboriosam") {{
                            address = new ViasAddress() {{
                                city = "West Delmer";
                                country = "Rwanda";
                                houseNumberOrName = "incidunt";
                                postalCode = "34765";
                                stateOrProvince = "eos";
                                street = "587 Orn Isle";
                            }};
                            fullPhoneNumber = "similique";
                            logo = "autem";
                            merchantAccount = "dicta";
                            merchantCategoryCode = "recusandae";
                            merchantHouseNumber = "sapiente";
                            phoneNumber = new ViasPhoneNumber() {{
                                phoneCountryCode = "id";
                                phoneNumber = "odit";
                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                            }};
                            shopperInteraction = StoreDetailShopperInteractionEnum.POS;
                            splitConfigurationUUID = "atque";
                            status = StoreDetailStatusEnum.ACTIVE;
                            store = "ullam";
                            storeName = "atque";
                            storeReference = "doloribus";
                            virtualAccount = "pariatur";
                            webAddress = "aut";
                        }}),
                        add(new StoreDetail(                new ViasAddress() {{
                                            city = "Gerrymouth";
                                            country = "Malawi";
                                            houseNumberOrName = "sapiente";
                                            postalCode = "29454-6506";
                                            stateOrProvince = "a";
                                            street = "55890 Helena Corner";
                                        }};, "numquam", "incidunt") {{
                            address = new ViasAddress() {{
                                city = "Carrollstad";
                                country = "Colombia";
                                houseNumberOrName = "vitae";
                                postalCode = "54689-3539";
                                stateOrProvince = "repellendus";
                                street = "068 DuBuque Landing";
                            }};
                            fullPhoneNumber = "animi";
                            logo = "debitis";
                            merchantAccount = "voluptatum";
                            merchantCategoryCode = "voluptatem";
                            merchantHouseNumber = "quisquam";
                            phoneNumber = new ViasPhoneNumber() {{
                                phoneCountryCode = "vitae";
                                phoneNumber = "cumque";
                                phoneType = ViasPhoneNumberPhoneTypeEnum.FAX;
                            }};
                            shopperInteraction = StoreDetailShopperInteractionEnum.POS;
                            splitConfigurationUUID = "eligendi";
                            status = StoreDetailStatusEnum.INACTIVE;
                            store = "quis";
                            storeName = "tempore";
                            storeReference = "officia";
                            virtualAccount = "iste";
                            webAddress = "unde";
                        }}),
                    }};
                    webAddress = "modi";
                }};;
                description = "quos";
                legalEntity = UpdateAccountHolderRequestLegalEntityEnum.PARTNERSHIP;
                primaryCurrency = "voluptate";
                processingTier = 623867;
                verificationProfile = "reprehenderit";
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

            org.openapis.openapi.models.shared.UpdateAccountHolderStateRequest req = new UpdateAccountHolderStateRequest("reprehenderit", false, UpdateAccountHolderStateRequestStateTypeEnum.LIMITLESS_PROCESSING) {{
                reason = "consequatur";
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
