import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CrashesGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * id of a specific group
     */
    crashGroupId: string;
    /**
     * id of a specific crash
     */
    crashId: string;
    /**
     * true if the stacktrace should be only the relevant thread / exception. Default is false
     */
    groupingOnly?: boolean;
    /**
     * true if the crash should include in depth crash details
     */
    includeDetails?: boolean;
    /**
     * true if the crash should include the custom log report. Default is false
     */
    includeLog?: boolean;
    /**
     * true if the crash should include the raw crash report. Default is false
     */
    includeReport?: boolean;
    /**
     * true if the crash should include the stacktrace information
     */
    includeStacktrace?: boolean;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CrashesGetDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    crash?: shared.Crash;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    crashesGetDefaultApplicationJSONObject?: CrashesGetDefaultApplicationJSON;
}
