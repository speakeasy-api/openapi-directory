import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletechargingscheduleRequestBody extends SpeakeasyBase {
    id?: string;
}
/**
 * A successful response
 */
export declare class Deletechargingschedule201ApplicationJSON extends SpeakeasyBase {
    command?: Record<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class DeletechargingscheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    deletechargingschedule201ApplicationJSONObject?: Deletechargingschedule201ApplicationJSON;
}
