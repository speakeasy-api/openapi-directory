# valuespace

### Available Operations

* [add](#add) - Add an entry to a table.
* [evalValue](#evalvalue) - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
* [getInfo](#getinfo) - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
* [getInstances](#getinstances) - Display the MIB object instances for the specified object.
* [getMib](#getmib) - Return the MIB that defines the specified object.
* [getName](#getname) - Return the symbolic name of the specified object identifier.
* [getObjects](#getobjects) - Display the MIB objects below the current position
* [getOid](#getoid) - Return the numeric OID of the specified object.
* [getState](#getstate) - Get the state of a MIB object object.
* [getValue](#getvalue) - Get a variable in the Value Space.
* [getVariables](#getvariables) - Display the variables for the specified instance instance for the specified MIB object object
* [msetValue](#msetvalue) - Set multiple variables in the Value Space.
* [munsetValue](#munsetvalue) - Unset multiple variables in the Value Space
* [remove](#remove) - Remove an entry from a table.
* [setState](#setstate) - Set the state of a MIB object object
* [setValue](#setvalue) - Set a variable in the Value Space.
* [splitOid](#splitoid) - Split the numerical OID into the object OID and instance OID.
* [unsetValue](#unsetvalue) - Unset a variable in the Value Space in order to free its memory.

## add

The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddRequest;
import org.openapis.openapi.models.operations.AddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "voluptatum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AddRequest req = new AddRequest(523006, "aliquam", "ad");            

            AddResponse res = sdk.valuespace.add(req);

            if (res.add200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## evalValue

Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EvalValueRequest;
import org.openapis.openapi.models.operations.EvalValueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat", "alias") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            EvalValueRequest req = new EvalValueRequest(362189, "perspiciatis", "nihil");            

            EvalValueResponse res = sdk.valuespace.evalValue(req);

            if (res.evalValue200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInfo

Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInfoRequest;
import org.openapis.openapi.models.operations.GetInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "voluptas") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetInfoRequest req = new GetInfoRequest(5189, "maiores");            

            GetInfoResponse res = sdk.valuespace.getInfo(req);

            if (res.getInfo200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstances

This enables MIB browsing of the MIB on the current agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstancesRequest;
import org.openapis.openapi.models.operations.GetInstancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "dolores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetInstancesRequest req = new GetInstancesRequest(663866, "minima");            

            GetInstancesResponse res = sdk.valuespace.getInstances(req);

            if (res.getInstances200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMib

This will only return a MIB name if the object is unmistakeably defined in a MIB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMibRequest;
import org.openapis.openapi.models.operations.GetMibResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetMibRequest req = new GetMibRequest(200364, "quae");            

            GetMibResponse res = sdk.valuespace.getMib(req);

            if (res.getMib200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getName

Return the symbolic name of the specified object identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNameRequest;
import org.openapis.openapi.models.operations.GetNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "omnis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetNameRequest req = new GetNameRequest("quaerat", 477646);            

            GetNameResponse res = sdk.valuespace.getName(req);

            if (res.getName200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjects

This command is similar to the ls or dir operating system commands to list filesystem directories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetObjectsRequest;
import org.openapis.openapi.models.operations.GetObjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex", "ut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetObjectsRequest req = new GetObjectsRequest("culpa", 238413);            

            GetObjectsResponse res = sdk.valuespace.getObjects(req);

            if (res.getObjects200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOid

Return the numeric OID of the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOidRequest;
import org.openapis.openapi.models.operations.GetOidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "laudantium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetOidRequest req = new GetOidRequest(432606, "nemo");            

            GetOidResponse res = sdk.valuespace.getOid(req);

            if (res.getOid200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getState

To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStateRequest;
import org.openapis.openapi.models.operations.GetStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "esse") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStateRequest req = new GetStateRequest(592081, "quis");            

            GetStateResponse res = sdk.valuespace.getState(req);

            if (res.getState200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getValue

Get a variable in the Value Space.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetValueRequest;
import org.openapis.openapi.models.operations.GetValueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "reiciendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetValueRequest req = new GetValueRequest(592780, "aspernatur", "ullam", "quasi");            

            GetValueResponse res = sdk.valuespace.getValue(req);

            if (res.getValue200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariables

This enables variable browsing of the MIB on the current agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariablesRequest;
import org.openapis.openapi.models.operations.GetVariablesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi", "nostrum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetVariablesRequest req = new GetVariablesRequest(652309, "provident", "possimus");            

            GetVariablesResponse res = sdk.valuespace.getVariables(req);

            if (res.getVariables200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## msetValue

This is a performance optimization of the mimic value set command, to be used when many variables are to be set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MsetValueRequest;
import org.openapis.openapi.models.operations.MsetValueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi", "ex") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            MsetValueRequest req = new MsetValueRequest(397257) {{
                requestBody = new String[][]{{
                    add(new String[]{{
                        add("doloribus"),
                        add("ullam"),
                        add("in"),
                        add("nam"),
                    }}),
                }};
            }};            

            MsetValueResponse res = sdk.valuespace.msetValue(req);

            if (res.msetValue200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## munsetValue

This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MunsetValueRequest;
import org.openapis.openapi.models.operations.MunsetValueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum", "officia") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            MunsetValueRequest req = new MunsetValueRequest(672041) {{
                requestBody = new String[][]{{
                    add(new String[]{{
                        add("voluptatibus"),
                        add("molestias"),
                    }}),
                    add(new String[]{{
                        add("sapiente"),
                        add("cumque"),
                        add("vitae"),
                        add("rerum"),
                    }}),
                    add(new String[]{{
                        add("quis"),
                        add("inventore"),
                    }}),
                    add(new String[]{{
                        add("cumque"),
                    }}),
                }};
            }};            

            MunsetValueResponse res = sdk.valuespace.munsetValue(req);

            if (res.munsetValue200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remove

The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveRequest;
import org.openapis.openapi.models.operations.RemoveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae", "perferendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            RemoveRequest req = new RemoveRequest(241901, "aspernatur", "eum");            

            RemoveResponse res = sdk.valuespace.remove(req);

            if (res.remove200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setState

To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetStateRequest;
import org.openapis.openapi.models.operations.SetStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius", "rem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetStateRequest req = new SetStateRequest(871083, "impedit", 179410);            

            SetStateResponse res = sdk.valuespace.setState(req);

            if (res.setState200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setValue

NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetValueRequest;
import org.openapis.openapi.models.operations.SetValueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "eum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetValueRequest req = new SetValueRequest(117320, "minima", "beatae", "cupiditate") {{
                requestBody = "provident";
            }};            

            SetValueResponse res = sdk.valuespace.setValue(req);

            if (res.setValue200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## splitOid

This is useful if you have an OID which is a combination of object and instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SplitOidRequest;
import org.openapis.openapi.models.operations.SplitOidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum", "soluta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SplitOidRequest req = new SplitOidRequest("hic", 848151);            

            SplitOidResponse res = sdk.valuespace.splitOid(req);

            if (res.splitOid200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsetValue

Only variables that have previously been set can be unset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsetValueRequest;
import org.openapis.openapi.models.operations.UnsetValueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque", "earum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UnsetValueRequest req = new UnsetValueRequest(596211, "maiores", "debitis", "aliquid");            

            UnsetValueResponse res = sdk.valuespace.unsetValue(req);

            if (res.unsetValue200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
