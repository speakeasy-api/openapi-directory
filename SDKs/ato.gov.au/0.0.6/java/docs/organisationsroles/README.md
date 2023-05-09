# organisationsRoles

## Overview

A role defines the characteristics of a relationship between parties.
An Organisation can participate in a relationship with other organisations and indiviuals.

For example:

| Party                           | Role     | Relationship | Role         | Party             |
| ------------------------------- | -------- | -------------| ------------ | ----------------- |
| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Homer Simpson     |
| Springfield Nuclear Power Plant | Company  | Directorship | Director     | Mr Burns          |
| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Mr Burns          |
| Springfield Nuclear Power Plant | Sponsor  | Sponsorship  | Organisation | The Stonecutters  |

You can use the API's **metadata services** to retrieve information about the classifcation schemes and
values used by the Registry.


### Available Operations

* [deleteOrganisationsPartyIdRolesRoleId](#deleteorganisationspartyidrolesroleid) - Delete a role
* [getOrganisationsPartyIdRoles](#getorganisationspartyidroles) - Retrieve a list of roles
* [getOrganisationsPartyIdRolesRoleId](#getorganisationspartyidrolesroleid) - Retrieve a role
* [postOrganisationsPartyIdRoles](#postorganisationspartyidroles) - Create a role
* [putOrganisationsPartyIdRolesRoleId](#putorganisationspartyidrolesroleid) - Update a role

## deleteOrganisationsPartyIdRolesRoleId

Delete a role


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdRolesRoleIdRequest;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdRolesRoleIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOrganisationsPartyIdRolesRoleIdRequest req = new DeleteOrganisationsPartyIdRolesRoleIdRequest("quis", "nesciunt", "eos");            

            DeleteOrganisationsPartyIdRolesRoleIdResponse res = sdk.organisationsRoles.deleteOrganisationsPartyIdRolesRoleId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdRoles

Retrieve a list of roles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdRolesRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdRolesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdRolesRequest req = new GetOrganisationsPartyIdRolesRequest("perferendis", "dolores");            

            GetOrganisationsPartyIdRolesResponse res = sdk.organisationsRoles.getOrganisationsPartyIdRoles(req);

            if (res.partyRoles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdRolesRoleId

Retrieve a role


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdRolesRoleIdRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdRolesRoleIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdRolesRoleIdRequest req = new GetOrganisationsPartyIdRolesRoleIdRequest("minus", "quam", "dolor");            

            GetOrganisationsPartyIdRolesRoleIdResponse res = sdk.organisationsRoles.getOrganisationsPartyIdRolesRoleId(req);

            if (res.partyRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrganisationsPartyIdRoles

Create a role


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdRolesRequest;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdRolesResponse;
import org.openapis.openapi.models.shared.PartyRoleInput;
import org.openapis.openapi.models.shared.PartyRolePartyRoleTypeEnum;
import org.openapis.openapi.models.shared.PartyRoleRelatedPartyRoleTypeEnum;
import org.openapis.openapi.models.shared.PartyRoleRelationshipTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrganisationsPartyIdRolesRequest req = new PostOrganisationsPartyIdRolesRequest("vero",                 new PartyRoleInput("123e4567-e89b-12d3-a456-426655440000", PartyRoleRelationshipTypeEnum.EMPLOYMENT) {{
                                partyRoleType = PartyRolePartyRoleTypeEnum.TRUSTEE;
                                relatedPartyRoleType = PartyRoleRelatedPartyRoleTypeEnum.TRUST;
                            }};, "omnis");            

            PostOrganisationsPartyIdRolesResponse res = sdk.organisationsRoles.postOrganisationsPartyIdRoles(req);

            if (res.partyRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrganisationsPartyIdRolesRoleId

Update a role


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdRolesRoleIdRequest;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdRolesRoleIdResponse;
import org.openapis.openapi.models.shared.PartyRoleInput;
import org.openapis.openapi.models.shared.PartyRolePartyRoleTypeEnum;
import org.openapis.openapi.models.shared.PartyRoleRelatedPartyRoleTypeEnum;
import org.openapis.openapi.models.shared.PartyRoleRelationshipTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrganisationsPartyIdRolesRoleIdRequest req = new PutOrganisationsPartyIdRolesRoleIdRequest("facilis",                 new PartyRoleInput("123e4567-e89b-12d3-a456-426655440000", PartyRoleRelationshipTypeEnum.MEMBERSHIP) {{
                                partyRoleType = PartyRolePartyRoleTypeEnum.DIRECTOR;
                                relatedPartyRoleType = PartyRoleRelatedPartyRoleTypeEnum.PARTNERSHIP;
                            }};, "consequuntur", "blanditiis");            

            PutOrganisationsPartyIdRolesRoleIdResponse res = sdk.organisationsRoles.putOrganisationsPartyIdRolesRoleId(req);

            if (res.partyRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
