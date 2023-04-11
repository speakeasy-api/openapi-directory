import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemotestartRequestBody extends SpeakeasyBase {
    chargestation?: string;
    connector?: string;
    driver?: string;
    token?: string;
}
/**
 * A successful response
 */
export declare class Remotestart201ApplicationJSON extends SpeakeasyBase {
    command?: Record<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class RemotestartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    remotestart201ApplicationJSONObject?: Remotestart201ApplicationJSON;
}
