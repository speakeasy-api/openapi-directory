import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3AccessAddRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 access
     */
    agentNum: number;
    /**
     * SNMPv3 access context match
     */
    contextMatch: string;
    /**
     * SNMPv3 access name
     */
    groupName: string;
    /**
     * SNMPv3 access notify view
     */
    notifyView: string;
    /**
     * SNMPv3 prefix
     */
    prefix: string;
    /**
     * SNMPv3 access read view
     */
    readView: string;
    /**
     * SNMPv3 access security level
     */
    securityLevel: string;
    /**
     * SNMPv3 access security model
     */
    securityModel: string;
    /**
     * SNMPv3 access write view
     */
    writeView: string;
}
export declare class ProtocolSnmpv3AccessAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3AccessAdd200ApplicationJSONString?: string;
}
