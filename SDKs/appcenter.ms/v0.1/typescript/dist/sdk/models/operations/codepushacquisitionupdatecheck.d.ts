import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushAcquisitionUpdateCheckRequest extends SpeakeasyBase {
    appVersion: string;
    clientUniqueId?: string;
    deploymentKey: string;
    isCompanion?: boolean;
    label?: string;
    packageHash?: string;
    previousDeploymentKey?: string;
    previousLabelOrAppVersion?: string;
}
/**
 * Error
 */
export declare class CodePushAcquisitionUpdateCheckDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushAcquisitionUpdateCheck200ApplicationJSONUpdateInfo extends SpeakeasyBase {
    description?: string;
    downloadUrl?: string;
    isAvailable: boolean;
    isDisabled?: boolean;
    isMandatory?: boolean;
    label?: string;
    packageHash?: string;
    packageSize?: number;
    rollout?: number;
    shouldRunBinaryVersion?: boolean;
    targetBinaryRange?: string;
    updateAppVersion?: boolean;
}
/**
 * Success
 */
export declare class CodePushAcquisitionUpdateCheck200ApplicationJSON extends SpeakeasyBase {
    updateInfo: CodePushAcquisitionUpdateCheck200ApplicationJSONUpdateInfo;
}
export declare class CodePushAcquisitionUpdateCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushAcquisitionUpdateCheck200ApplicationJSONObject?: CodePushAcquisitionUpdateCheck200ApplicationJSON;
    /**
     * Error
     */
    codePushAcquisitionUpdateCheckDefaultApplicationJSONObject?: CodePushAcquisitionUpdateCheckDefaultApplicationJSON;
}
