import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchChargeStationVariableRequestBodyVariableEnum {
    MeterValueSampleInterval = "MeterValueSampleInterval",
    HeartbeatInterval = "HeartbeatInterval",
    ConnectionTimeOut = "ConnectionTimeOut",
    WebSocketPingInterval = "WebSocketPingInterval",
    TransactionMessageRetryInterval = "TransactionMessageRetryInterval",
    TransactionMessageAttempts = "TransactionMessageAttempts"
}
/**
 * Charge Station Variable to set
 */
export declare class PatchChargeStationVariableRequestBody extends SpeakeasyBase {
    value?: string;
    variable?: PatchChargeStationVariableRequestBodyVariableEnum;
}
export declare class PatchChargeStationVariableRequest extends SpeakeasyBase {
    /**
     * Charge Station Variable to set
     */
    requestBody: PatchChargeStationVariableRequestBody;
    /**
     * ID of charge station
     */
    id: string;
}
/**
 * A successful response
 */
export declare class PatchChargeStationVariable201ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PatchChargeStationVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    patchChargeStationVariable201ApplicationJSONObject?: PatchChargeStationVariable201ApplicationJSON;
}
