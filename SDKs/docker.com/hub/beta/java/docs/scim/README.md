# scim

## Overview

SCIM is a provisioning system that lets you manage users within your identity provider (IdP).
For more information, see [System for Cross-domain Identity management](https://docs.docker.com/docker-hub/scim/).


### Available Operations

* [getV2Scim20ResourceTypes](#getv2scim20resourcetypes) - List resource types
* [getV2Scim20ResourceTypesName](#getv2scim20resourcetypesname) - Get a resource type
* [getV2Scim20Schemas](#getv2scim20schemas) - List schemas
* [getV2Scim20SchemasId](#getv2scim20schemasid) - Get a schema
* [getV2Scim20ServiceProviderConfig](#getv2scim20serviceproviderconfig) - Get service provider config
* [getV2Scim20Users](#getv2scim20users) - List users
* [getV2Scim20UsersId](#getv2scim20usersid) - Get a user
* [postV2Scim20Users](#postv2scim20users) - Create user
* [putV2Scim20UsersId](#putv2scim20usersid) - Update a user

## getV2Scim20ResourceTypes

Returns all resource types supported for the SCIM configuration.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2Scim20ResourceTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2Scim20ResourceTypesResponse res = sdk.scim.getV2Scim20ResourceTypes();

            if (res.getV2Scim20ResourceTypes200ApplicationScimPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2Scim20ResourceTypesName

Returns a resource type by name.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2Scim20ResourceTypesNameRequest;
import org.openapis.openapi.models.operations.GetV2Scim20ResourceTypesNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2Scim20ResourceTypesNameRequest req = new GetV2Scim20ResourceTypesNameRequest("qui");            

            GetV2Scim20ResourceTypesNameResponse res = sdk.scim.getV2Scim20ResourceTypesName(req);

            if (res.scimResourceType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2Scim20Schemas

Returns all schemas supported for the SCIM configuration.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2Scim20SchemasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2Scim20SchemasResponse res = sdk.scim.getV2Scim20Schemas();

            if (res.getV2Scim20Schemas200ApplicationScimPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2Scim20SchemasId

Returns a schema by ID.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2Scim20SchemasIdRequest;
import org.openapis.openapi.models.operations.GetV2Scim20SchemasIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2Scim20SchemasIdRequest req = new GetV2Scim20SchemasIdRequest("impedit");            

            GetV2Scim20SchemasIdResponse res = sdk.scim.getV2Scim20SchemasId(req);

            if (res.scimSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2Scim20ServiceProviderConfig

Returns a service provider config for Docker's configuration.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2Scim20ServiceProviderConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2Scim20ServiceProviderConfigResponse res = sdk.scim.getV2Scim20ServiceProviderConfig();

            if (res.scimServiceProviderConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2Scim20Users

List users, returns paginated users for an organization. Use `startIndex`
and `count` query parameters to receive paginated results.

**Sorting:**<br>
Sorting lets you to specify the order of returned resources by specifying
a combination of `sortBy` and `sortOrder` query parameters.

The `sortBy` parameter specifies the attribute whose value will be used
to order the returned responses. The `sortOrder` parameter defines the
order in which the `sortBy` parameter is applied. Allowed values are
"ascending" and "descending".

**Filtering:**<br>
You can request a subset of resources by specifying the `filter` query
parameter containing a filter expression. Attribute names and attribute
operators used in filters are case insensitive. The filter parameter
must contain at least one valid expression. Each expression must contain
an attribute name followed by an attribute operator and an optional
value.

Supported operators are listed below.

- `eq` equal
- `ne` not equal
- `co` contains
- `sw` starts with
- `and` Logical "and"
- `or` Logical "or"
- `not` "Not" function
- `()` Precedence grouping


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2Scim20UsersRequest;
import org.openapis.openapi.models.operations.GetV2Scim20UsersResponse;
import org.openapis.openapi.models.operations.GetV2Scim20UsersSortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2Scim20UsersRequest req = new GetV2Scim20UsersRequest() {{
                attributes = "cum";
                count = 456150L;
                filter = "ipsum";
                sortBy = "excepturi";
                sortOrder = GetV2Scim20UsersSortOrderEnum.ASCENDING;
                startIndex = 18789L;
            }};            

            GetV2Scim20UsersResponse res = sdk.scim.getV2Scim20Users(req);

            if (res.getV2Scim20Users200ApplicationScimPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2Scim20UsersId

Returns a user by ID.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2Scim20UsersIdRequest;
import org.openapis.openapi.models.operations.GetV2Scim20UsersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2Scim20UsersIdRequest req = new GetV2Scim20UsersIdRequest("ad");            

            GetV2Scim20UsersIdResponse res = sdk.scim.getV2Scim20UsersId(req);

            if (res.scimUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2Scim20Users

Creates a user. If the user already exists by email, they are assigned
to the organization on the "company" team.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2Scim20UsersRequestBody;
import org.openapis.openapi.models.operations.PostV2Scim20UsersResponse;
import org.openapis.openapi.models.shared.ScimUserName;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2Scim20UsersRequestBody req = new PostV2Scim20UsersRequestBody(                new String[]{{
                                add("urn:ietf:params:scim:schemas:core:2.0:User"),
                                add("urn:ietf:params:scim:schemas:core:2.0:User"),
                                add("urn:ietf:params:scim:schemas:core:2.0:User"),
                            }}, "jon.snow@docker.com") {{
                name = new ScimUserName() {{
                    familyName = "Snow";
                    givenName = "Jon";
                }};;
            }};            

            PostV2Scim20UsersResponse res = sdk.scim.postV2Scim20Users(req);

            if (res.scimUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2Scim20UsersId

Updates a user. Use this route to change the user's name, activate,
and deactivate the user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2Scim20UsersIdRequest;
import org.openapis.openapi.models.operations.PutV2Scim20UsersIdRequestBody;
import org.openapis.openapi.models.operations.PutV2Scim20UsersIdResponse;
import org.openapis.openapi.models.shared.ScimUserName;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2Scim20UsersIdRequest req = new PutV2Scim20UsersIdRequest(                new PutV2Scim20UsersIdRequestBody(                new String[]{{
                                                add("urn:ietf:params:scim:schemas:core:2.0:User"),
                                            }}) {{
                                enabled = false;
                                name = new ScimUserName() {{
                                    familyName = "Snow";
                                    givenName = "Jon";
                                }};;
                            }};, "iste");            

            PutV2Scim20UsersIdResponse res = sdk.scim.putV2Scim20UsersId(req);

            if (res.scimUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
