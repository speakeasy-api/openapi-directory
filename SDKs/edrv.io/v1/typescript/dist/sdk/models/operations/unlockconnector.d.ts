import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnlockconnectorRequestBody extends SpeakeasyBase {
    chargestation?: string;
    connector?: string;
}
/**
 * A successful response
 */
export declare class Unlockconnector201ApplicationJSON extends SpeakeasyBase {
    command?: Record<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class UnlockconnectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    unlockconnector201ApplicationJSONObject?: Unlockconnector201ApplicationJSON;
}
