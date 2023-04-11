import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Include connector properties to update here
 */
export declare class PatchConnectorRequestBody extends SpeakeasyBase {
    chargestation?: string;
    format?: string;
    power?: number;
    powerType?: string;
    rate?: string;
    type?: string;
}
export declare class PatchConnectorRequest extends SpeakeasyBase {
    /**
     * Include connector properties to update here
     */
    requestBody: PatchConnectorRequestBody;
    /**
     * ID of connector that needs to be updated
     */
    id: string;
}
/**
 * Returns the updated connector object
 */
export declare class PatchConnector201ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PatchConnectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the updated connector object
     */
    patchConnector201ApplicationJSONObject?: PatchConnector201ApplicationJSON;
}
