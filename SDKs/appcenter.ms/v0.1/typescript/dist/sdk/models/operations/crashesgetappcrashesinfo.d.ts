import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashesGetAppCrashesInfoSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CrashesGetAppCrashesInfoRequest extends SpeakeasyBase {
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
 * Error
 */
export declare class CrashesGetAppCrashesInfoDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CrashesGetAppCrashesInfo200ApplicationJSONFeatures extends SpeakeasyBase {
    /**
     * App supports download of raw crashes
     */
    crashDownloadRaw?: boolean;
    /**
     * App supports the 'crash free user' metric
     */
    crashgroupAnalyticsCrashfreeusers?: boolean;
    /**
     * App supports the 'impacted users' metric
     */
    crashgroupAnalyticsImpactedusers?: boolean;
    /**
     * App supports modification of crashgroup annotation
     */
    crashgroupModifyAnnotation?: boolean;
    /**
     * App supports modification of crashgroup status
     */
    crashgroupModifyStatus?: boolean;
    /**
     * App supports search API
     */
    search?: boolean;
}
/**
 * Success
 */
export declare class CrashesGetAppCrashesInfo200ApplicationJSON extends SpeakeasyBase {
    features: CrashesGetAppCrashesInfo200ApplicationJSONFeatures;
    hasCrashes: boolean;
}
export declare class CrashesGetAppCrashesInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashesGetAppCrashesInfo200ApplicationJSONObject?: CrashesGetAppCrashesInfo200ApplicationJSON;
    /**
     * Error
     */
    crashesGetAppCrashesInfoDefaultApplicationJSONObject?: CrashesGetAppCrashesInfoDefaultApplicationJSON;
}
