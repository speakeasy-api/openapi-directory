import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CrashesListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum CrashesListErrorTypeEnum {
    CrashingErrors = "CrashingErrors",
    HandledErrors = "HandledErrors"
}
export declare class CrashesListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * version
     */
    appVersion?: string;
    /**
     * id of a specific group
     */
    crashGroupId: string;
    dateFrom?: Date;
    dateTo?: Date;
    errorType?: CrashesListErrorTypeEnum;
    /**
     * true if the crash should include the custom log report. Default is false
     */
    includeLog?: boolean;
    /**
     * true if the crash should include the raw crash report. Default is false
     */
    includeReport?: boolean;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CrashesListDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    crashes?: shared.Crash[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    crashesListDefaultApplicationJSONObject?: CrashesListDefaultApplicationJSON;
}
