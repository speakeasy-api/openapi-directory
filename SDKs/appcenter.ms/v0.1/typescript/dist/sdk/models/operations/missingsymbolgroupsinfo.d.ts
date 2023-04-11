import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MissingSymbolGroupsInfoSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class MissingSymbolGroupsInfoRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * failure response object
 */
export declare class MissingSymbolGroupsInfoDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    message: string;
}
/**
 * missing symbol groups
 */
export declare class MissingSymbolGroupsInfo200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of crashes for all missing symbol groups
     */
    totalCrashCount: number;
}
export declare class MissingSymbolGroupsInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    missingSymbolGroupsInfo200ApplicationJSONObject?: MissingSymbolGroupsInfo200ApplicationJSON;
    /**
     * Error
     */
    missingSymbolGroupsInfoDefaultApplicationJSONObject?: MissingSymbolGroupsInfoDefaultApplicationJSON;
}
