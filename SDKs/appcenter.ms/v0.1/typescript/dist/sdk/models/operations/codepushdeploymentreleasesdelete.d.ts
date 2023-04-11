import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentReleasesDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CodePushDeploymentReleasesDeleteRequest extends SpeakeasyBase {
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
export declare class CodePushDeploymentReleasesDeleteDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentReleasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    codePushDeploymentReleasesDeleteDefaultApplicationJSONObject?: CodePushDeploymentReleasesDeleteDefaultApplicationJSON;
}
