import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CodePushDeploymentsDeleteRequest extends SpeakeasyBase {
    requestBody?: Record<string, any>;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * deployment name
     */
    deploymentName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CodePushDeploymentsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    codePushDeploymentsDeleteDefaultApplicationJSONObject?: CodePushDeploymentsDeleteDefaultApplicationJSON;
}
