import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Valuespace {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * add - Add an entry to a table.
     *
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    add(req: operations.AddRequest, config?: AxiosRequestConfig): Promise<operations.AddResponse>;
    /**
     * evalValue - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
     *
     * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
    **/
    evalValue(req: operations.EvalValueRequest, config?: AxiosRequestConfig): Promise<operations.EvalValueResponse>;
    /**
     * getInfo - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
     *
     * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
    **/
    getInfo(req: operations.GetInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetInfoResponse>;
    /**
     * getInstances - Display the MIB object instances for the specified object.
     *
     * This enables MIB browsing of the MIB on the current agent.
    **/
    getInstances(req: operations.GetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesResponse>;
    /**
     * getMib - Return the MIB that defines the specified object.
     *
     * This will only return a MIB name if the object is unmistakeably defined in a MIB.
    **/
    getMib(req: operations.GetMibRequest, config?: AxiosRequestConfig): Promise<operations.GetMibResponse>;
    /**
     * getName - Return the symbolic name of the specified object identifier.
     *
     * Return the symbolic name of the specified object identifier.
    **/
    getName(req: operations.GetNameRequest, config?: AxiosRequestConfig): Promise<operations.GetNameResponse>;
    /**
     * getObjects - Display the MIB objects below the current position
     *
     * This command is similar to the ls or dir operating system commands to list filesystem directories.
    **/
    getObjects(req: operations.GetObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsResponse>;
    /**
     * getOid - Return the numeric OID of the specified object.
     *
     * Return the numeric OID of the specified object.
    **/
    getOid(req: operations.GetOidRequest, config?: AxiosRequestConfig): Promise<operations.GetOidResponse>;
    /**
     * getState - Get the state of a MIB object object.
     *
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    getState(req: operations.GetStateRequest, config?: AxiosRequestConfig): Promise<operations.GetStateResponse>;
    /**
     * getValue - Get a variable in the Value Space.
     *
     * Get a variable in the Value Space.
    **/
    getValue(req: operations.GetValueRequest, config?: AxiosRequestConfig): Promise<operations.GetValueResponse>;
    /**
     * getVariables - Display the variables for the specified instance instance for the specified MIB object object
     *
     * This enables variable browsing of the MIB on the current agent.
    **/
    getVariables(req: operations.GetVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetVariablesResponse>;
    /**
     * msetValue - Set multiple variables in the Value Space.
     *
     * This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
    **/
    msetValue(req: operations.MsetValueRequest, config?: AxiosRequestConfig): Promise<operations.MsetValueResponse>;
    /**
     * munsetValue - Unset multiple variables in the Value Space
     *
     * This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
    **/
    munsetValue(req: operations.MunsetValueRequest, config?: AxiosRequestConfig): Promise<operations.MunsetValueResponse>;
    /**
     * remove - Remove an entry from a table.
     *
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    remove(req: operations.RemoveRequest, config?: AxiosRequestConfig): Promise<operations.RemoveResponse>;
    /**
     * setState - Set the state of a MIB object object
     *
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    setState(req: operations.SetStateRequest, config?: AxiosRequestConfig): Promise<operations.SetStateResponse>;
    /**
     * setValue - Set a variable in the Value Space.
     *
     * NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
    **/
    setValue(req: operations.SetValueRequest, config?: AxiosRequestConfig): Promise<operations.SetValueResponse>;
    /**
     * splitOid - Split the numerical OID into the object OID and instance OID.
     *
     * This is useful if you have an OID which is a combination of object and instance.
    **/
    splitOid(req: operations.SplitOidRequest, config?: AxiosRequestConfig): Promise<operations.SplitOidResponse>;
    /**
     * unsetValue - Unset a variable in the Value Space in order to free its memory.
     *
     * Only variables that have previously been set can be unset.
    **/
    unsetValue(req: operations.UnsetValueRequest, config?: AxiosRequestConfig): Promise<operations.UnsetValueResponse>;
}
