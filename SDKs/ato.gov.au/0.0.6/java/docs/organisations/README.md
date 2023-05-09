# organisations

## Overview

An organisation usually consists of a number of individuals or groups bound by a common purpose about whom the
registry wishes to maintain information.

  For example, the organisation's legal entity type (e.g., Incorporated Entity, Unincorporated Entity,
  Partnership or Joint Venture).


### Available Operations

* [deleteOrganisationsPartyId](#deleteorganisationspartyid) - Delete an organisation
* [getOrganisations](#getorganisations) - Retrieve a list of organisations
* [getOrganisationsPartyId](#getorganisationspartyid) - Retrieve an organisation
* [postOrganisations](#postorganisations) - Create an organisation
* [putOrganisationsPartyId](#putorganisationspartyid) - Update an organisation

## deleteOrganisationsPartyId

Delete an organisation with the specified identifier


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdRequest;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOrganisationsPartyIdRequest req = new DeleteOrganisationsPartyIdRequest("labore", "modi");            

            DeleteOrganisationsPartyIdResponse res = sdk.organisations.deleteOrganisationsPartyId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisations

Retrieve a list of organisations


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsRequest;
import org.openapis.openapi.models.operations.GetOrganisationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsRequest req = new GetOrganisationsRequest("qui") {{
                identifier = "aliquid";
                registeredIdentifier = "cupiditate";
            }};            

            GetOrganisationsResponse res = sdk.organisations.getOrganisations(req);

            if (res.organisations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyId

Retrieve an organisation with the specified identifier


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdRequest req = new GetOrganisationsPartyIdRequest("quos", "perferendis");            

            GetOrganisationsPartyIdResponse res = sdk.organisations.getOrganisationsPartyId(req);

            if (res.organisation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrganisations

Create an organisation


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrganisationsRequest;
import org.openapis.openapi.models.operations.PostOrganisationsResponse;
import org.openapis.openapi.models.shared.ElectronicAddressElectronicAddressTypeEnum;
import org.openapis.openapi.models.shared.ElectronicAddressInput;
import org.openapis.openapi.models.shared.OrganisationAddressAddressTypeEnum;
import org.openapis.openapi.models.shared.OrganisationAddressInput;
import org.openapis.openapi.models.shared.OrganisationInput;
import org.openapis.openapi.models.shared.OrganisationLegalEntityTypeEnum;
import org.openapis.openapi.models.shared.OrganisationNameInput;
import org.openapis.openapi.models.shared.RegisteredIdentifierIdentifierTypeEnum;
import org.openapis.openapi.models.shared.RegisteredIdentifierInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrganisationsRequest req = new PostOrganisationsRequest("magni",                 new OrganisationInput(LocalDate.parse("1928-03-03"), OrganisationLegalEntityTypeEnum.JOINT_VENTURE) {{
                                addresses = new org.openapis.openapi.models.shared.OrganisationAddressInput[]{{
                                    add(new OrganisationAddressInput() {{
                                        addressType = OrganisationAddressAddressTypeEnum.MAILING;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "fugit";
                                        name = "Kembery Building";
                                        postalCode = "2601";
                                        suburb = "Civic";
                                    }}),
                                    add(new OrganisationAddressInput() {{
                                        addressType = OrganisationAddressAddressTypeEnum.PRINCIPAL_PLACE_OF_BUSINESS;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "excepturi";
                                        name = "Kembery Building";
                                        postalCode = "2601";
                                        suburb = "Civic";
                                    }}),
                                }};
                                electronicAddresses = new org.openapis.openapi.models.shared.ElectronicAddressInput[]{{
                                    add(new ElectronicAddressInput() {{
                                        areaCode = "02";
                                        countryPrefix = "61";
                                        electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.MOBILE;
                                        email = "Edwardo.Windler@hotmail.com";
                                        extension = "eligendi";
                                        number = "62164453";
                                        url = "sint";
                                    }}),
                                    add(new ElectronicAddressInput() {{
                                        areaCode = "02";
                                        countryPrefix = "61";
                                        electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.FAX;
                                        email = "Sonya.Marquardt@yahoo.com";
                                        extension = "debitis";
                                        number = "62164453";
                                        url = "a";
                                    }}),
                                }};
                                names = new org.openapis.openapi.models.shared.OrganisationNameInput[]{{
                                    add(new OrganisationNameInput() {{
                                        name = "321 Technology Ventures";
                                    }}),
                                    add(new OrganisationNameInput() {{
                                        name = "321 Technology Ventures";
                                    }}),
                                    add(new OrganisationNameInput() {{
                                        name = "321 Technology Ventures";
                                    }}),
                                }};
                                registeredIdentifiers = new org.openapis.openapi.models.shared.RegisteredIdentifierInput[]{{
                                    add(new RegisteredIdentifierInput() {{
                                        identifier = "123456789";
                                        identifierType = RegisteredIdentifierIdentifierTypeEnum.ACN;
                                    }}),
                                    add(new RegisteredIdentifierInput() {{
                                        identifier = "123456789";
                                        identifierType = RegisteredIdentifierIdentifierTypeEnum.ABN;
                                    }}),
                                }};
                            }};);            

            PostOrganisationsResponse res = sdk.organisations.postOrganisations(req);

            if (res.organisation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrganisationsPartyId

Update an organisation


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdRequest;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdResponse;
import org.openapis.openapi.models.shared.ElectronicAddressElectronicAddressTypeEnum;
import org.openapis.openapi.models.shared.ElectronicAddressInput;
import org.openapis.openapi.models.shared.OrganisationAddressAddressTypeEnum;
import org.openapis.openapi.models.shared.OrganisationAddressInput;
import org.openapis.openapi.models.shared.OrganisationInput;
import org.openapis.openapi.models.shared.OrganisationLegalEntityTypeEnum;
import org.openapis.openapi.models.shared.OrganisationNameInput;
import org.openapis.openapi.models.shared.RegisteredIdentifierIdentifierTypeEnum;
import org.openapis.openapi.models.shared.RegisteredIdentifierInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrganisationsPartyIdRequest req = new PutOrganisationsPartyIdRequest("maiores",                 new OrganisationInput(LocalDate.parse("1928-03-03"), OrganisationLegalEntityTypeEnum.TRUST) {{
                                addresses = new org.openapis.openapi.models.shared.OrganisationAddressInput[]{{
                                    add(new OrganisationAddressInput() {{
                                        addressType = OrganisationAddressAddressTypeEnum.MAILING;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "cumque";
                                        name = "Kembery Building";
                                        postalCode = "2601";
                                        suburb = "Civic";
                                    }}),
                                }};
                                electronicAddresses = new org.openapis.openapi.models.shared.ElectronicAddressInput[]{{
                                    add(new ElectronicAddressInput() {{
                                        areaCode = "02";
                                        countryPrefix = "61";
                                        electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.LANDLINE;
                                        email = "Mariah58@yahoo.com";
                                        extension = "enim";
                                        number = "62164453";
                                        url = "accusamus";
                                    }}),
                                    add(new ElectronicAddressInput() {{
                                        areaCode = "02";
                                        countryPrefix = "61";
                                        electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.WEBSITE;
                                        email = "Lafayette_Reinger@hotmail.com";
                                        extension = "deleniti";
                                        number = "62164453";
                                        url = "sapiente";
                                    }}),
                                    add(new ElectronicAddressInput() {{
                                        areaCode = "02";
                                        countryPrefix = "61";
                                        electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.FAX;
                                        email = "Golda_Kassulke@yahoo.com";
                                        extension = "molestiae";
                                        number = "62164453";
                                        url = "perferendis";
                                    }}),
                                    add(new ElectronicAddressInput() {{
                                        areaCode = "02";
                                        countryPrefix = "61";
                                        electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.LANDLINE;
                                        email = "Michele29@gmail.com";
                                        extension = "suscipit";
                                        number = "62164453";
                                        url = "natus";
                                    }}),
                                }};
                                names = new org.openapis.openapi.models.shared.OrganisationNameInput[]{{
                                    add(new OrganisationNameInput() {{
                                        name = "321 Technology Ventures";
                                    }}),
                                    add(new OrganisationNameInput() {{
                                        name = "321 Technology Ventures";
                                    }}),
                                    add(new OrganisationNameInput() {{
                                        name = "321 Technology Ventures";
                                    }}),
                                }};
                                registeredIdentifiers = new org.openapis.openapi.models.shared.RegisteredIdentifierInput[]{{
                                    add(new RegisteredIdentifierInput() {{
                                        identifier = "123456789";
                                        identifierType = RegisteredIdentifierIdentifierTypeEnum.ABN;
                                    }}),
                                    add(new RegisteredIdentifierInput() {{
                                        identifier = "123456789";
                                        identifierType = RegisteredIdentifierIdentifierTypeEnum.ACN;
                                    }}),
                                }};
                            }};, "architecto");            

            PutOrganisationsPartyIdResponse res = sdk.organisations.putOrganisationsPartyId(req);

            if (res.organisation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
