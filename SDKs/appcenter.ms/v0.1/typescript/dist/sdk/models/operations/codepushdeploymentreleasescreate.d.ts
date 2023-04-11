import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentReleasesCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The upload metadata from the release initialization step.
 */
export declare class CodePushDeploymentReleasesCreateRequestBodyReleaseUpload extends SpeakeasyBase {
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
/**
 * The necessary information required to download the bundle and being the release process.
 */
export declare class CodePushDeploymentReleasesCreateRequestBody extends SpeakeasyBase {
    /**
     * This specifies which deployment you want to release the update to. Default is Staging.
     */
    deploymentName?: string;
    /**
     * This provides an optional "change log" for the deployment.
     */
    description?: string;
    /**
     * This specifies whether an update should be downloadable by end users or not.
     */
    disabled?: boolean;
    /**
     * This specifies whether the update should be considered mandatory or not (e.g. it includes a critical security fix).
     */
    mandatory?: boolean;
    /**
     * This specifies that if the update is identical to the latest release on the deployment, the CLI should generate a warning instead of an error.
     */
    noDuplicateReleaseError?: boolean;
    /**
     * The upload metadata from the release initialization step.
     */
    releaseUpload: CodePushDeploymentReleasesCreateRequestBodyReleaseUpload;
    /**
     * This specifies the percentage of users (as an integer between 1 and 100) that should be eligible to receive this update.
     */
    rollout?: number;
    /**
     * the binary version of the application
     */
    targetBinaryVersion: string;
}
export declare class CodePushDeploymentReleasesCreateRequest extends SpeakeasyBase {
    /**
     * The necessary information required to download the bundle and being the release process.
     */
    requestBody: CodePushDeploymentReleasesCreateRequestBody;
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
export declare class CodePushDeploymentReleasesCreateDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentReleasesCreate201ApplicationJSONDiffPackageMap extends SpeakeasyBase {
    size: number;
    url: string;
}
/**
 * The release method is unknown if unspecified
 */
export declare enum CodePushDeploymentReleasesCreate201ApplicationJSONReleaseMethodEnum {
    Upload = "Upload",
    Promote = "Promote",
    Rollback = "Rollback"
}
/**
 * Success
 */
export declare class CodePushDeploymentReleasesCreate201ApplicationJSON extends SpeakeasyBase {
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<string, CodePushDeploymentReleasesCreate201ApplicationJSONDiffPackageMap>;
    isDisabled?: boolean;
    isMandatory?: boolean;
    label?: string;
    /**
     * Set on 'Promote'
     */
    originalDeployment?: string;
    /**
     * Set on 'Promote' and 'Rollback'
     */
    originalLabel?: string;
    packageHash?: string;
    /**
     * The release method is unknown if unspecified
     */
    releaseMethod?: CodePushDeploymentReleasesCreate201ApplicationJSONReleaseMethodEnum;
    releasedBy?: string;
    rollout?: number;
    size?: number;
    targetBinaryRange?: string;
    uploadTime?: number;
}
export declare class CodePushDeploymentReleasesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushDeploymentReleasesCreate201ApplicationJSONObject?: CodePushDeploymentReleasesCreate201ApplicationJSON;
    /**
     * Error
     */
    codePushDeploymentReleasesCreateDefaultApplicationJSONObject?: CodePushDeploymentReleasesCreateDefaultApplicationJSON;
}
