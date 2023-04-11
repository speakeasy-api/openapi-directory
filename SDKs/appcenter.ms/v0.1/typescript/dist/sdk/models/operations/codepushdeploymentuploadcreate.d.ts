import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentUploadCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CodePushDeploymentUploadCreateRequest extends SpeakeasyBase {
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
export declare class CodePushDeploymentUploadCreateDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Success
 */
export declare class CodePushDeploymentUploadCreate200ApplicationJSON extends SpeakeasyBase {
    /**
     * The ID for the newly created upload. It is going to be required later in the process.
     */
    id: string;
    /**
     * The URL encoded token used for upload permissions.
     */
    token: string;
    /**
     * The URL domain used to upload the release.
     */
    uploadDomain: string;
}
export declare class CodePushDeploymentUploadCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushDeploymentUploadCreate200ApplicationJSONObject?: CodePushDeploymentUploadCreate200ApplicationJSON;
    /**
     * Error
     */
    codePushDeploymentUploadCreateDefaultApplicationJSONObject?: CodePushDeploymentUploadCreateDefaultApplicationJSON;
}
