import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CrashesGetStacktraceSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetStacktraceRequest extends SpeakeasyBase {
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
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CrashesGetStacktraceDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesGetStacktraceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    stacktrace?: shared.Stacktrace;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    crashesGetStacktraceDefaultApplicationJSONObject?: CrashesGetStacktraceDefaultApplicationJSON;
}
