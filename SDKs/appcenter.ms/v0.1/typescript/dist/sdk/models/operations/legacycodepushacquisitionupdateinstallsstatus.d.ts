import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LegacyCodePushAcquisitionUpdateInstallsStatusSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Deployment status metric properties
 */
export declare class LegacyCodePushAcquisitionUpdateInstallsStatusRequestBody extends SpeakeasyBase {
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
export declare class LegacyCodePushAcquisitionUpdateInstallsStatusDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class LegacyCodePushAcquisitionUpdateInstallsStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    legacyCodePushAcquisitionUpdateInstallsStatusDefaultApplicationJSONObject?: LegacyCodePushAcquisitionUpdateInstallsStatusDefaultApplicationJSON;
}
