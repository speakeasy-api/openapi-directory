import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3VacmSaveRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPv3 configuration
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3VacmSaveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3VacmSave200ApplicationJSONStrings?: string[];
}
