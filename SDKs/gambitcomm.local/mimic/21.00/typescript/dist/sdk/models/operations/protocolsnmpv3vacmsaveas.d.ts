import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3VacmSaveasRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPv3 configuration
     */
    agentNum: number;
    /**
     * Filename to save
     */
    filename: string;
}
export declare class ProtocolSnmpv3VacmSaveasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3VacmSaveas200ApplicationJSONStrings?: string[];
}
