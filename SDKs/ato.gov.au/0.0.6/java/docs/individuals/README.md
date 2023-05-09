# individuals

## Overview

An individual is a person about whom the registry wishes to maintain information.

  For example, the individual's date and place of birth (for the purposes of identification) and the individual's
  residential address (which is used for administrative purposes).


### Available Operations

* [deleteIndividualsPartyId](#deleteindividualspartyid) - Delete an individual
* [getIndividuals](#getindividuals) - Retrieve a list of individuals
* [getIndividualsPartyId](#getindividualspartyid) - Retrieve an individual
* [postIndividuals](#postindividuals) - Create an individual
* [putIndividualsPartyId](#putindividualspartyid) - Update an individual

## deleteIndividualsPartyId

Delete an individual with the specified identifier


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdRequest;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIndividualsPartyIdRequest req = new DeleteIndividualsPartyIdRequest("corrupti", "illum");            

            DeleteIndividualsPartyIdResponse res = sdk.individuals.deleteIndividualsPartyId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividuals

Retrieve a list of individuals


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsRequest;
import org.openapis.openapi.models.operations.GetIndividualsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsRequest req = new GetIndividualsRequest("vel") {{
                dateOfBirth = "error";
                placeOfBirth = "deserunt";
            }};            

            GetIndividualsResponse res = sdk.individuals.getIndividuals(req);

            if (res.individuals != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyId

Retrieve an individual with the specified identifier


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdRequest req = new GetIndividualsPartyIdRequest("suscipit", "iure");            

            GetIndividualsPartyIdResponse res = sdk.individuals.getIndividualsPartyId(req);

            if (res.individual != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIndividuals

Create an individual


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostIndividualsRequest;
import org.openapis.openapi.models.operations.PostIndividualsResponse;
import org.openapis.openapi.models.shared.ElectronicAddressElectronicAddressTypeEnum;
import org.openapis.openapi.models.shared.ElectronicAddressInput;
import org.openapis.openapi.models.shared.IndividualAddressAddressTypeEnum;
import org.openapis.openapi.models.shared.IndividualAddressInput;
import org.openapis.openapi.models.shared.IndividualGenderEnum;
import org.openapis.openapi.models.shared.IndividualInput;
import org.openapis.openapi.models.shared.IndividualNameDirectionEnum;
import org.openapis.openapi.models.shared.IndividualNameInput;
import org.openapis.openapi.models.shared.IndividualNameNamePrefixEnum;
import org.openapis.openapi.models.shared.IndividualNameNameTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostIndividualsRequest req = new PostIndividualsRequest("magnam",                 new IndividualInput(LocalDate.parse("1979-01-13"), "Tamworth") {{
                                addresses = new org.openapis.openapi.models.shared.IndividualAddressInput[]{{
                                    add(new IndividualAddressInput() {{
                                        addressType = IndividualAddressAddressTypeEnum.MAILING;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "delectus";
                                        name = "Kembery Building";
                                        postalCode = "2601";
                                        suburb = "Civic";
                                    }}),
                                    add(new IndividualAddressInput() {{
                                        addressType = IndividualAddressAddressTypeEnum.MAILING;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "suscipit";
                                        name = "Kembery Building";
                                        postalCode = "2601";
                                        suburb = "Civic";
                                    }}),
                                    add(new IndividualAddressInput() {{
                                        addressType = IndividualAddressAddressTypeEnum.PRINCIPAL_PLACE_OF_BUSINESS;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "minus";
                                        name = "Kembery Building";
                                        postalCode = "2601";
                                        suburb = "Civic";
                                    }}),
                                    add(new IndividualAddressInput() {{
                                        addressType = IndividualAddressAddressTypeEnum.PRINCIPAL_PLACE_OF_RESIDENCE;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "voluptatum";
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
                                        email = "Tianna33@yahoo.com";
                                        extension = "veritatis";
                                        number = "62164453";
                                        url = "deserunt";
                                    }}),
                                    add(new ElectronicAddressInput() {{
                                        areaCode = "02";
                                        countryPrefix = "61";
                                        electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.EMAIL;
                                        email = "Rita.Will87@yahoo.com";
                                        extension = "at";
                                        number = "62164453";
                                        url = "maiores";
                                    }}),
                                }};
                                gender = IndividualGenderEnum.MALE;
                                names = new org.openapis.openapi.models.shared.IndividualNameInput[]{{
                                    add(new IndividualNameInput() {{
                                        direction = IndividualNameDirectionEnum.RIGHT_TO_LEFT;
                                        familyName = "Ferguson";
                                        formalSalutation = "Mr Robert Ferguson";
                                        givenName = "Robert";
                                        informalSalutation = "Rob";
                                        middleName = "James";
                                        namePrefix = IndividualNameNamePrefixEnum.MR;
                                        nameSuffix = "totam";
                                        nameType = IndividualNameNameTypeEnum.PRINCIPAL_NAME;
                                    }}),
                                    add(new IndividualNameInput() {{
                                        direction = IndividualNameDirectionEnum.RIGHT_TO_LEFT;
                                        familyName = "Ferguson";
                                        formalSalutation = "Mr Robert Ferguson";
                                        givenName = "Robert";
                                        informalSalutation = "Rob";
                                        middleName = "James";
                                        namePrefix = IndividualNameNamePrefixEnum.MR;
                                        nameSuffix = "nam";
                                        nameType = IndividualNameNameTypeEnum.PRINCIPAL_NAME;
                                    }}),
                                    add(new IndividualNameInput() {{
                                        direction = IndividualNameDirectionEnum.RIGHT_TO_LEFT;
                                        familyName = "Ferguson";
                                        formalSalutation = "Mr Robert Ferguson";
                                        givenName = "Robert";
                                        informalSalutation = "Rob";
                                        middleName = "James";
                                        namePrefix = IndividualNameNamePrefixEnum.MR;
                                        nameSuffix = "deleniti";
                                        nameType = IndividualNameNameTypeEnum.PRINCIPAL_NAME;
                                    }}),
                                    add(new IndividualNameInput() {{
                                        direction = IndividualNameDirectionEnum.RIGHT_TO_LEFT;
                                        familyName = "Ferguson";
                                        formalSalutation = "Mr Robert Ferguson";
                                        givenName = "Robert";
                                        informalSalutation = "Rob";
                                        middleName = "James";
                                        namePrefix = IndividualNameNamePrefixEnum.MS;
                                        nameSuffix = "beatae";
                                        nameType = IndividualNameNameTypeEnum.ALIAS;
                                    }}),
                                }};
                            }};);            

            PostIndividualsResponse res = sdk.individuals.postIndividuals(req);

            if (res.individual != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putIndividualsPartyId

Update an individual


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdRequest;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdResponse;
import org.openapis.openapi.models.shared.ElectronicAddressElectronicAddressTypeEnum;
import org.openapis.openapi.models.shared.ElectronicAddressInput;
import org.openapis.openapi.models.shared.IndividualAddressAddressTypeEnum;
import org.openapis.openapi.models.shared.IndividualAddressInput;
import org.openapis.openapi.models.shared.IndividualGenderEnum;
import org.openapis.openapi.models.shared.IndividualInput;
import org.openapis.openapi.models.shared.IndividualNameDirectionEnum;
import org.openapis.openapi.models.shared.IndividualNameInput;
import org.openapis.openapi.models.shared.IndividualNameNamePrefixEnum;
import org.openapis.openapi.models.shared.IndividualNameNameTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutIndividualsPartyIdRequest req = new PutIndividualsPartyIdRequest("molestiae",                 new IndividualInput(LocalDate.parse("1979-01-13"), "Tamworth") {{
                                addresses = new org.openapis.openapi.models.shared.IndividualAddressInput[]{{
                                    add(new IndividualAddressInput() {{
                                        addressType = IndividualAddressAddressTypeEnum.MAILING;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "impedit";
                                        name = "Kembery Building";
                                        postalCode = "2601";
                                        suburb = "Civic";
                                    }}),
                                    add(new IndividualAddressInput() {{
                                        addressType = IndividualAddressAddressTypeEnum.PRINCIPAL_PLACE_OF_RESIDENCE;
                                        city = "Canberra";
                                        country = "Australia";
                                        line1 = "Level 7";
                                        line2 = "21 Genge Street";
                                        line3 = "esse";
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
                                        email = "Aiden.Hane@gmail.com";
                                        extension = "iste";
                                        number = "62164453";
                                        url = "dolor";
                                    }}),
                                }};
                                gender = IndividualGenderEnum.NOT_APPLICABLE;
                                names = new org.openapis.openapi.models.shared.IndividualNameInput[]{{
                                    add(new IndividualNameInput() {{
                                        direction = IndividualNameDirectionEnum.RIGHT_TO_LEFT;
                                        familyName = "Ferguson";
                                        formalSalutation = "Mr Robert Ferguson";
                                        givenName = "Robert";
                                        informalSalutation = "Rob";
                                        middleName = "James";
                                        namePrefix = IndividualNameNamePrefixEnum.MS;
                                        nameSuffix = "fuga";
                                        nameType = IndividualNameNameTypeEnum.ALIAS;
                                    }}),
                                    add(new IndividualNameInput() {{
                                        direction = IndividualNameDirectionEnum.LEFT_TO_RIGHT;
                                        familyName = "Ferguson";
                                        formalSalutation = "Mr Robert Ferguson";
                                        givenName = "Robert";
                                        informalSalutation = "Rob";
                                        middleName = "James";
                                        namePrefix = IndividualNameNamePrefixEnum.MS;
                                        nameSuffix = "iure";
                                        nameType = IndividualNameNameTypeEnum.PRINCIPAL_NAME;
                                    }}),
                                }};
                            }};, "quidem");            

            PutIndividualsPartyIdResponse res = sdk.individuals.putIndividualsPartyId(req);

            if (res.individual != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
