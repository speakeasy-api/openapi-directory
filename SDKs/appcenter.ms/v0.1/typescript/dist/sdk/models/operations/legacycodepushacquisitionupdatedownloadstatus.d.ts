import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LegacyCodePushAcquisitionUpdateDownloadStatusSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Deployment status metric properties
 */
export declare class LegacyCodePushAcquisitionUpdateDownloadStatusRequestBody extends SpeakeasyBase {
    appVersion?: string;
    clientUniqueId?: string;
    deploymentKey?: string;
    label?: string;
    previousDeploymentKey?: string;
    previousLabelOrAppVersion?: string;
    status?: string;
}
/**
 * Error
 */
export declare class LegacyCodePushAcquisitionUpdateDownloadStatusDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class LegacyCodePushAcquisitionUpdateDownloadStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    legacyCodePushAcquisitionUpdateDownloadStatusDefaultApplicationJSONObject?: LegacyCodePushAcquisitionUpdateDownloadStatusDefaultApplicationJSON;
}
