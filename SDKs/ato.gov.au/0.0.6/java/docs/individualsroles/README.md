# individualsRoles

## Overview

A role defines the characteristics of a relationship between parties.
An Individual can participate in a relationship with other individuals and organisations.

For example:

| Party         | Role           | Relationship     | Role          | Party                           |
| ------------- | -------------- | ---------------- | ------------- | ------------------------------- |
| Homer Simpson | Husband        | Marriage         | Wife          | Marge Simpson                   |
| Homer Simpson | Employee       | Employment       | Employer      | Springfield Nuclear Power Plant |
| Homer Simpson | Safety Officer | Colleague        | Supervisor    | Carl Carlson                    |
| Homer Simpson | Director       | Directorship     | Company       | Compu Global Hyper Mega Net     |
| Homer Simpson | Employee       | Employment       | Employer      | Compu Global Hyper Mega Net     |
| Homer Simpson | Member         | Membership       | Organisation  | The Stonecutters                |
| Homer Simpson | Partner        | Partnership      | Partnership   | The Be Sharps                   |
| Homer Simpson | Trustee        | Trusteeship      | Trust         | The Simpson Family Trust        |
| Homer Simpson | Member         | Membership       | Association   | Mensa International             |

You can use the API's **metadata services** to retrieve information about the classifcation schemes and
values used by the Registry.


### Available Operations

* [deleteIndividualsPartyIdRolesRoleId](#deleteindividualspartyidrolesroleid) - Delete a role
* [getIndividualsPartyIdRoles](#getindividualspartyidroles) - Retrieve a list of roles
* [getIndividualsPartyIdRolesRoleId](#getindividualspartyidrolesroleid) - Retrieve a role
* [postIndividualsPartyIdRoles](#postindividualspartyidroles) - Create a role
* [putIndividualsPartyIdRolesRoleId](#putindividualspartyidrolesroleid) - Update a role

## deleteIndividualsPartyIdRolesRoleId

Delete a role


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdRolesRoleIdRequest;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdRolesRoleIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIndividualsPartyIdRolesRoleIdRequest req = new DeleteIndividualsPartyIdRolesRoleIdRequest("commodi", "repudiandae", "quae");            

            DeleteIndividualsPartyIdRolesRoleIdResponse res = sdk.individualsRoles.deleteIndividualsPartyIdRolesRoleId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdRoles

Retrieve a list of roles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdRolesRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdRolesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdRolesRequest req = new GetIndividualsPartyIdRolesRequest("ipsum", "quidem");            

            GetIndividualsPartyIdRolesResponse res = sdk.individualsRoles.getIndividualsPartyIdRoles(req);

            if (res.partyRoles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdRolesRoleId

Retrieve a role


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdRolesRoleIdRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdRolesRoleIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdRolesRoleIdRequest req = new GetIndividualsPartyIdRolesRoleIdRequest("molestias", "excepturi", "pariatur");            

            GetIndividualsPartyIdRolesRoleIdResponse res = sdk.individualsRoles.getIndividualsPartyIdRolesRoleId(req);

            if (res.partyRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIndividualsPartyIdRoles

Create a role


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdRolesRequest;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdRolesResponse;
import org.openapis.openapi.models.shared.PartyRoleInput;
import org.openapis.openapi.models.shared.PartyRolePartyRoleTypeEnum;
import org.openapis.openapi.models.shared.PartyRoleRelatedPartyRoleTypeEnum;
import org.openapis.openapi.models.shared.PartyRoleRelationshipTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostIndividualsPartyIdRolesRequest req = new PostIndividualsPartyIdRolesRequest("modi",                 new PartyRoleInput("123e4567-e89b-12d3-a456-426655440000", PartyRoleRelationshipTypeEnum.MEMBERSHIP) {{
                                partyRoleType = PartyRolePartyRoleTypeEnum.MEMBER;
                                relatedPartyRoleType = PartyRoleRelatedPartyRoleTypeEnum.TRUST;
                            }};, "quasi");            

            PostIndividualsPartyIdRolesResponse res = sdk.individualsRoles.postIndividualsPartyIdRoles(req);

            if (res.partyRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putIndividualsPartyIdRolesRoleId

Update a role


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdRolesRoleIdRequest;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdRolesRoleIdResponse;
import org.openapis.openapi.models.shared.PartyRoleInput;
import org.openapis.openapi.models.shared.PartyRolePartyRoleTypeEnum;
import org.openapis.openapi.models.shared.PartyRoleRelatedPartyRoleTypeEnum;
import org.openapis.openapi.models.shared.PartyRoleRelationshipTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutIndividualsPartyIdRolesRoleIdRequest req = new PutIndividualsPartyIdRolesRoleIdRequest("repudiandae",                 new PartyRoleInput("123e4567-e89b-12d3-a456-426655440000", PartyRoleRelationshipTypeEnum.MEMBERSHIP) {{
                                partyRoleType = PartyRolePartyRoleTypeEnum.DIRECTOR;
                                relatedPartyRoleType = PartyRoleRelatedPartyRoleTypeEnum.TRUST;
                            }};, "incidunt", "enim");            

            PutIndividualsPartyIdRolesRoleIdResponse res = sdk.individualsRoles.putIndividualsPartyIdRolesRoleId(req);

            if (res.partyRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
