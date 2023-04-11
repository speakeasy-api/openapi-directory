import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap extends SpeakeasyBase {
    size: number;
    url: string;
}
/**
 * The release method is unknown if unspecified
 */
export declare enum CodePushDeploymentsCreateRequestBodyLatestReleaseReleaseMethodEnum {
    Upload = "Upload",
    Promote = "Promote",
    Rollback = "Rollback"
}
export declare class CodePushDeploymentsCreateRequestBodyLatestRelease extends SpeakeasyBase {
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<string, CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap>;
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
    releaseMethod?: CodePushDeploymentsCreateRequestBodyLatestReleaseReleaseMethodEnum;
    releasedBy?: string;
    rollout?: number;
    size?: number;
    targetBinaryRange?: string;
    uploadTime?: number;
}
/**
 * Deployment to be created
 */
export declare class CodePushDeploymentsCreateRequestBody extends SpeakeasyBase {
    key?: string;
    latestRelease?: CodePushDeploymentsCreateRequestBodyLatestRelease;
    name: string;
}
export declare class CodePushDeploymentsCreateRequest extends SpeakeasyBase {
    /**
     * Deployment to be created
     */
    requestBody: CodePushDeploymentsCreateRequestBody;
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
export declare class CodePushDeploymentsCreateDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentsCreate201ApplicationJSONLatestReleaseDiffPackageMap extends SpeakeasyBase {
    size: number;
    url: string;
}
/**
 * The release method is unknown if unspecified
 */
export declare enum CodePushDeploymentsCreate201ApplicationJSONLatestReleaseReleaseMethodEnum {
    Upload = "Upload",
    Promote = "Promote",
    Rollback = "Rollback"
}
export declare class CodePushDeploymentsCreate201ApplicationJSONLatestRelease extends SpeakeasyBase {
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<string, CodePushDeploymentsCreate201ApplicationJSONLatestReleaseDiffPackageMap>;
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
    releaseMethod?: CodePushDeploymentsCreate201ApplicationJSONLatestReleaseReleaseMethodEnum;
    releasedBy?: string;
    rollout?: number;
    size?: number;
    targetBinaryRange?: string;
    uploadTime?: number;
}
/**
 * Success
 */
export declare class CodePushDeploymentsCreate201ApplicationJSON extends SpeakeasyBase {
    key?: string;
    latestRelease?: CodePushDeploymentsCreate201ApplicationJSONLatestRelease;
    name: string;
}
export declare class CodePushDeploymentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushDeploymentsCreate201ApplicationJSONObject?: CodePushDeploymentsCreate201ApplicationJSON;
    /**
     * Error
     */
    codePushDeploymentsCreateDefaultApplicationJSONObject?: CodePushDeploymentsCreateDefaultApplicationJSON;
}
