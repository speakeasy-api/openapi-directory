# access

### Available Operations

* [accessAdd](#accessadd) - Adds/Overwrites the user entry in the access control database.
* [accessDel](#accessdel) - Clears a users entry from access control database.
* [accessGetAcldb](#accessgetacldb) - Returns the current access control database in use.
* [accessGetAdmindir](#accessgetadmindir) - Returns the current admin directory.
* [accessGetAdminuser](#accessgetadminuser) - Returns the current administrator.
* [accessGetEnabled](#accessgetenabled) - Returns the state of access control checking.
* [accessList](#accesslist) - Returns an array of entries.
* [accessLoad](#accessload) - Loads the specified file for access control data.
* [accessSave](#accesssave) - Saves current access control data in specified file.
* [accessSetAcldb](#accesssetacldb) - Allows setting the name of the current access control database.
* [accessSetEnabled](#accesssetenabled) - Allows the user to enable/disable the access control check.

## accessAdd

Adds/Overwrites the user entry in the access control database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessAddRequest;
import org.openapis.openapi.models.operations.AccessAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "corrupti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessAddRequest req = new AccessAddRequest("illum", "vel", "error");            

            AccessAddResponse res = sdk.access.accessAdd(req);

            if (res.accessAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessDel

Using '*' for user clears all the users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessDelRequest;
import org.openapis.openapi.models.operations.AccessDelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "suscipit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessDelRequest req = new AccessDelRequest("iure");            

            AccessDelResponse res = sdk.access.accessDel(req);

            if (res.accessDel200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessGetAcldb

If nothing is specified then this returns "".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessGetAcldbResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "debitis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessGetAcldbResponse res = sdk.access.accessGetAcldb();

            if (res.accessGetAcldb200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessGetAdmindir

If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessGetAdmindirResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "delectus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessGetAdmindirResponse res = sdk.access.accessGetAdmindir();

            if (res.accessGetAdmindir200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessGetAdminuser

If nothing is specified in admin/settings.cfg then returns "".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessGetAdminuserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora", "suscipit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessGetAdminuserResponse res = sdk.access.accessGetAdminuser();

            if (res.accessGetAdminuser200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessGetEnabled

0 indicates that it is disabled, 1 indicates it is enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessGetEnabledResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "minus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessGetEnabledResponse res = sdk.access.accessGetEnabled();

            if (res.accessGetEnabled200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessList

Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat", "voluptatum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessListResponse res = sdk.access.accessList();

            if (res.accessEntries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessLoad

If filename is not specified then the currently set 'acldb' parameter is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessLoadRequest;
import org.openapis.openapi.models.operations.AccessLoadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessLoadRequest req = new AccessLoadRequest("nisi");            

            AccessLoadResponse res = sdk.access.accessLoad(req);

            if (res.accessLoad200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessSave

If filename is not specified then the currently set 'acldb' parameter is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessSaveRequest;
import org.openapis.openapi.models.operations.AccessSaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "temporibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessSaveRequest req = new AccessSaveRequest("ab");            

            AccessSaveResponse res = sdk.access.accessSave(req);

            if (res.accessSave200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessSetAcldb

This will be used for subsequent load and save operations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessSetAcldbRequest;
import org.openapis.openapi.models.operations.AccessSetAcldbResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessSetAcldbRequest req = new AccessSetAcldbRequest("deserunt");            

            AccessSetAcldbResponse res = sdk.access.accessSetAcldb(req);

            if (res.accessSetAcldb200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessSetEnabled

0 indicates disabled, 1 indicates enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessSetEnabledRequest;
import org.openapis.openapi.models.operations.AccessSetEnabledResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "ipsam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AccessSetEnabledRequest req = new AccessSetEnabledRequest("repellendus");            

            AccessSetEnabledResponse res = sdk.access.accessSetEnabled(req);

            if (res.accessSetEnabled200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
