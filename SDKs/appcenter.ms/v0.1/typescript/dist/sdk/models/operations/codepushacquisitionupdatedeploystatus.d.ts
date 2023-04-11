import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Deployment status metric properties
 */
export declare class CodePushAcquisitionUpdateDeployStatusRequestBody extends SpeakeasyBase {
    appVersion?: string;
    clientUniqueId?: string;
    deploymentKey: string;
    label?: string;
    previousDeploymentKey?: string;
    previousLabelOrAppVersion?: string;
    status?: string;
}
/**
 * Error
 */
export declare class CodePushAcquisitionUpdateDeployStatusDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushAcquisitionUpdateDeployStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    codePushAcquisitionUpdateDeployStatusDefaultApplicationJSONObject?: CodePushAcquisitionUpdateDeployStatusDefaultApplicationJSON;
}
