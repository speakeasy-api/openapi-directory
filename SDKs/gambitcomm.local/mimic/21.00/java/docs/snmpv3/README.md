# snmPv3

### Available Operations

* [protocolSnmpv3AccessAdd](#protocolsnmpv3accessadd) - Adds a new access entry with the specified parameters.
* [protocolSnmpv3AccessClear](#protocolsnmpv3accessclear) - Clears all access entries.
* [protocolSnmpv3AccessDel](#protocolsnmpv3accessdel) - Deletes the specified access entry.
* [protocolSnmpv3AccessList](#protocolsnmpv3accesslist) - Returns the current acccess entries as an array of strings.
* [protocolSnmpv3GetConfig](#protocolsnmpv3getconfig) - Returns the SNMPv3 configuration.
* [protocolSnmpv3GetContextEngineid](#protocolsnmpv3getcontextengineid) - Retrieves the contextEngineID for the agent instance.
* [protocolSnmpv3GetEngineboots](#protocolsnmpv3getengineboots) - Retrieves the number of times the agent has been restarted.
* [protocolSnmpv3GetEngineid](#protocolsnmpv3getengineid) - For started agents, retrieves the current engineID in use by the snmpv3 module.
* [protocolSnmpv3GetEnginetime](#protocolsnmpv3getenginetime) - Retrieves the time in seconds for which the agent has been running.
* [protocolSnmpv3GroupAdd](#protocolsnmpv3groupadd) - Adds a new group entry with the specified parameters.
* [protocolSnmpv3GroupClear](#protocolsnmpv3groupclear) - Clears all group entries.
* [protocolSnmpv3GroupDel](#protocolsnmpv3groupdel) - Deletes the specified group entry.
* [protocolSnmpv3GroupList](#protocolsnmpv3grouplist) - Returns the current group entries as an array of strings.
* [protocolSnmpv3SetConfig](#protocolsnmpv3setconfig) - Changes the SNMPv3 configuration.
* [protocolSnmpv3UserAdd](#protocolsnmpv3useradd) - Adds a new user entry with the specified parameters.
* [protocolSnmpv3UserClear](#protocolsnmpv3userclear) - Clears all user entries.
* [protocolSnmpv3UserDel](#protocolsnmpv3userdel) - Deletes the specified user entry.
* [protocolSnmpv3UserList](#protocolsnmpv3userlist) - Returns the current user entries as a Tcl list.
* [protocolSnmpv3UsmSave](#protocolsnmpv3usmsave) - Saves current user settings in the currently loaded USM config file.
* [protocolSnmpv3UsmSaveas](#protocolsnmpv3usmsaveas) - Saves current user settings in the specified USM config file.
* [protocolSnmpv3VacmSave](#protocolsnmpv3vacmsave) - Saves current group, access, view settings in the currently loaded VACM config file.
* [protocolSnmpv3VacmSaveas](#protocolsnmpv3vacmsaveas) - Saves current group, access, view settings in the specified VACM config file.
* [protocolSnmpv3ViewAdd](#protocolsnmpv3viewadd) - Adds a new view entry with the specified parameters.
* [protocolSnmpv3ViewClear](#protocolsnmpv3viewclear) - Clears all view entries.
* [protocolSnmpv3ViewDel](#protocolsnmpv3viewdel) - Deletes the specified view entry.
* [protocolSnmpv3ViewList](#protocolsnmpv3viewlist) - Returns the current view entries as an array of strings.

## protocolSnmpv3AccessAdd

Adds a new access entry with the specified parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3AccessAddRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3AccessAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "dignissimos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3AccessAddRequest req = new ProtocolSnmpv3AccessAddRequest(115484, "maiores", "natus", "velit", "voluptatibus", "voluptas", "asperiores", "aperiam", "ea");            

            ProtocolSnmpv3AccessAddResponse res = sdk.snmPv3.protocolSnmpv3AccessAdd(req);

            if (res.protocolSnmpv3AccessAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3AccessClear

Clears all access entries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3AccessClearRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3AccessClearResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat", "consequuntur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3AccessClearRequest req = new ProtocolSnmpv3AccessClearRequest(831520);            

            ProtocolSnmpv3AccessClearResponse res = sdk.snmPv3.protocolSnmpv3AccessClear(req);

            if (res.protocolSnmpv3AccessClear200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3AccessDel

Deletes the specified access entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3AccessDelRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3AccessDelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia", "maxime") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3AccessDelRequest req = new ProtocolSnmpv3AccessDelRequest("dignissimos", 640024);            

            ProtocolSnmpv3AccessDelResponse res = sdk.snmPv3.protocolSnmpv3AccessDel(req);

            if (res.protocolSnmpv3AccessDel200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3AccessList

Returns the current acccess entries as an array of strings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3AccessListRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3AccessListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores", "nemo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3AccessListRequest req = new ProtocolSnmpv3AccessListRequest(65304);            

            ProtocolSnmpv3AccessListResponse res = sdk.snmPv3.protocolSnmpv3AccessList(req);

            if (res.protocolSnmpv3AccessList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GetConfig

Returns the SNMPv3 configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat", "porro") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GetConfigRequest req = new ProtocolSnmpv3GetConfigRequest(801836);            

            ProtocolSnmpv3GetConfigResponse res = sdk.snmPv3.protocolSnmpv3GetConfig(req);

            if (res.configSNMPv3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GetContextEngineid

Retrieves the contextEngineID for the agent instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetContextEngineidRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetContextEngineidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "ab") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GetContextEngineidRequest req = new ProtocolSnmpv3GetContextEngineidRequest(241418);            

            ProtocolSnmpv3GetContextEngineidResponse res = sdk.snmPv3.protocolSnmpv3GetContextEngineid(req);

            if (res.protocolSnmpv3GetContextEngineid200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GetEngineboots

Retrieves the number of times the agent has been restarted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetEnginebootsRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetEnginebootsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga", "id") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GetEnginebootsRequest req = new ProtocolSnmpv3GetEnginebootsRequest(380729);            

            ProtocolSnmpv3GetEnginebootsResponse res = sdk.snmPv3.protocolSnmpv3GetEngineboots(req);

            if (res.protocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GetEngineid

For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetEngineidRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetEngineidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit", "culpa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GetEngineidRequest req = new ProtocolSnmpv3GetEngineidRequest(665859);            

            ProtocolSnmpv3GetEngineidResponse res = sdk.snmPv3.protocolSnmpv3GetEngineid(req);

            if (res.protocolSnmpv3GetEngineid200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GetEnginetime

Retrieves the time in seconds for which the agent has been running.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetEnginetimeRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GetEnginetimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GetEnginetimeRequest req = new ProtocolSnmpv3GetEnginetimeRequest(853940);            

            ProtocolSnmpv3GetEnginetimeResponse res = sdk.snmPv3.protocolSnmpv3GetEnginetime(req);

            if (res.protocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GroupAdd

Adds a new group entry with the specified parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GroupAddRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GroupAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "ducimus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GroupAddRequest req = new ProtocolSnmpv3GroupAddRequest(554688, "vel", "labore", "possimus");            

            ProtocolSnmpv3GroupAddResponse res = sdk.snmPv3.protocolSnmpv3GroupAdd(req);

            if (res.protocolSnmpv3GroupAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GroupClear

Clears all group entries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GroupClearRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GroupClearResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "cum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GroupClearRequest req = new ProtocolSnmpv3GroupClearRequest(414857);            

            ProtocolSnmpv3GroupClearResponse res = sdk.snmPv3.protocolSnmpv3GroupClear(req);

            if (res.protocolSnmpv3GroupClear200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GroupDel

Deletes the specified group entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GroupDelRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GroupDelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "corporis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GroupDelRequest req = new ProtocolSnmpv3GroupDelRequest(968904, "assumenda");            

            ProtocolSnmpv3GroupDelResponse res = sdk.snmPv3.protocolSnmpv3GroupDel(req);

            if (res.protocolSnmpv3GroupDel200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3GroupList

Returns the current group entries as an array of strings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GroupListRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3GroupListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo", "recusandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3GroupListRequest req = new ProtocolSnmpv3GroupListRequest(397533);            

            ProtocolSnmpv3GroupListResponse res = sdk.snmPv3.protocolSnmpv3GroupList(req);

            if (res.protocolSnmpv3GroupList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3SetConfig

Changes the SNMPv3 configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3SetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3SetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam", "cum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3SetConfigRequest req = new ProtocolSnmpv3SetConfigRequest(232627, "in", "exercitationem");            

            ProtocolSnmpv3SetConfigResponse res = sdk.snmPv3.protocolSnmpv3SetConfig(req);

            if (res.protocolSnmpv3SetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3UserAdd

Adds a new user entry with the specified parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UserAddRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UserAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum", "facere") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3UserAddRequest req = new ProtocolSnmpv3UserAddRequest(257233, "doloribus", "suscipit", "reiciendis", "quidem", "saepe", "necessitatibus");            

            ProtocolSnmpv3UserAddResponse res = sdk.snmPv3.protocolSnmpv3UserAdd(req);

            if (res.protocolSnmpv3UserAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3UserClear

Clears all user entries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UserClearRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UserClearResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore", "sunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3UserClearRequest req = new ProtocolSnmpv3UserClearRequest(992012);            

            ProtocolSnmpv3UserClearResponse res = sdk.snmPv3.protocolSnmpv3UserClear(req);

            if (res.protocolSnmpv3UserClear200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3UserDel

Deletes the specified user entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UserDelRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UserDelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci", "non") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3UserDelRequest req = new ProtocolSnmpv3UserDelRequest(228263, "beatae");            

            ProtocolSnmpv3UserDelResponse res = sdk.snmPv3.protocolSnmpv3UserDel(req);

            if (res.protocolSnmpv3UserDel200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3UserList

Returns the current user entries as a Tcl list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UserListRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UserListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos", "a") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3UserListRequest req = new ProtocolSnmpv3UserListRequest(891523);            

            ProtocolSnmpv3UserListResponse res = sdk.snmPv3.protocolSnmpv3UserList(req);

            if (res.protocolSnmpv3UserList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3UsmSave

Saves current user settings in the currently loaded USM config file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UsmSaveRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UsmSaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur", "corporis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3UsmSaveRequest req = new ProtocolSnmpv3UsmSaveRequest(689768);            

            ProtocolSnmpv3UsmSaveResponse res = sdk.snmPv3.protocolSnmpv3UsmSave(req);

            if (res.protocolSnmpv3UsmSave200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3UsmSaveas

Saves current user settings in the specified USM config file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UsmSaveasRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3UsmSaveasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam", "ipsa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3UsmSaveasRequest req = new ProtocolSnmpv3UsmSaveasRequest(916727, "libero");            

            ProtocolSnmpv3UsmSaveasResponse res = sdk.snmPv3.protocolSnmpv3UsmSaveas(req);

            if (res.protocolSnmpv3UsmSaveas200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3VacmSave

Saves current group, access, view settings in the currently loaded VACM config file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3VacmSaveRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3VacmSaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae", "accusamus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3VacmSaveRequest req = new ProtocolSnmpv3VacmSaveRequest(631126);            

            ProtocolSnmpv3VacmSaveResponse res = sdk.snmPv3.protocolSnmpv3VacmSave(req);

            if (res.protocolSnmpv3VacmSave200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3VacmSaveas

Saves current group, access, view settings in the specified VACM config file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3VacmSaveasRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3VacmSaveasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora", "aspernatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3VacmSaveasRequest req = new ProtocolSnmpv3VacmSaveasRequest(379057, "voluptas");            

            ProtocolSnmpv3VacmSaveasResponse res = sdk.snmPv3.protocolSnmpv3VacmSaveas(req);

            if (res.protocolSnmpv3VacmSaveas200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3ViewAdd

Adds a new view entry with the specified parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3ViewAddRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3ViewAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas", "minima") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3ViewAddRequest req = new ProtocolSnmpv3ViewAddRequest(748789, "dolorum", "adipisci", "minus", "dolores");            

            ProtocolSnmpv3ViewAddResponse res = sdk.snmPv3.protocolSnmpv3ViewAdd(req);

            if (res.protocolSnmpv3ViewAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3ViewClear

Clears all view entries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3ViewClearRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3ViewClearResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis", "in") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3ViewClearRequest req = new ProtocolSnmpv3ViewClearRequest(296242);            

            ProtocolSnmpv3ViewClearResponse res = sdk.snmPv3.protocolSnmpv3ViewClear(req);

            if (res.protocolSnmpv3ViewClear200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3ViewDel

Deletes the specified view entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3ViewDelRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3ViewDelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam", "officiis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3ViewDelRequest req = new ProtocolSnmpv3ViewDelRequest(839189, "ullam");            

            ProtocolSnmpv3ViewDelResponse res = sdk.snmPv3.protocolSnmpv3ViewDel(req);

            if (res.protocolSnmpv3ViewDel200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmpv3ViewList

Returns the current view entries as an array of strings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmpv3ViewListRequest;
import org.openapis.openapi.models.operations.ProtocolSnmpv3ViewListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci", "cum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmpv3ViewListRequest req = new ProtocolSnmpv3ViewListRequest(502389);            

            ProtocolSnmpv3ViewListResponse res = sdk.snmPv3.protocolSnmpv3ViewList(req);

            if (res.protocolSnmpv3ViewList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
