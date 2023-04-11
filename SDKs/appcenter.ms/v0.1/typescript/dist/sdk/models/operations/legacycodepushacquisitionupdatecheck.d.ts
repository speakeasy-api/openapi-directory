import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LegacyCodePushAcquisitionUpdateCheckSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class LegacyCodePushAcquisitionUpdateCheckRequest extends SpeakeasyBase {
    appVersion?: string;
    clientUniqueId?: string;
    deploymentKey?: string;
    isCompanion?: string;
    label?: string;
    packageHash?: string;
}
/**
 * Error
 */
export declare class LegacyCodePushAcquisitionUpdateCheckDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class LegacyCodePushAcquisitionUpdateCheck200ApplicationJSONUpdateInfo extends SpeakeasyBase {
    appVersion?: string;
    description?: string;
    downloadURL?: string;
    isAvailable: boolean;
    isDisabled?: boolean;
    isMandatory?: boolean;
    label?: string;
    packageHash?: string;
    packageSize?: number;
    rollout?: number;
    shouldRunBinaryVersion?: boolean;
    updateAppVersion?: boolean;
}
/**
 * Success
 */
export declare class LegacyCodePushAcquisitionUpdateCheck200ApplicationJSON extends SpeakeasyBase {
    updateInfo: LegacyCodePushAcquisitionUpdateCheck200ApplicationJSONUpdateInfo;
}
export declare class LegacyCodePushAcquisitionUpdateCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    legacyCodePushAcquisitionUpdateCheck200ApplicationJSONObject?: LegacyCodePushAcquisitionUpdateCheck200ApplicationJSON;
    /**
     * Error
     */
    legacyCodePushAcquisitionUpdateCheckDefaultApplicationJSONObject?: LegacyCodePushAcquisitionUpdateCheckDefaultApplicationJSON;
}
