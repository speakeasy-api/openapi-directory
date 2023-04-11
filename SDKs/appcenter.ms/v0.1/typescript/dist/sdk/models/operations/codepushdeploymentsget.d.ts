import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CodePushDeploymentsGetRequest extends SpeakeasyBase {
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
export declare class CodePushDeploymentsGetDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentsGet200ApplicationJSONLatestReleaseDiffPackageMap extends SpeakeasyBase {
    size: number;
    url: string;
}
/**
 * The release method is unknown if unspecified
 */
export declare enum CodePushDeploymentsGet200ApplicationJSONLatestReleaseReleaseMethodEnum {
    Upload = "Upload",
    Promote = "Promote",
    Rollback = "Rollback"
}
export declare class CodePushDeploymentsGet200ApplicationJSONLatestRelease extends SpeakeasyBase {
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<string, CodePushDeploymentsGet200ApplicationJSONLatestReleaseDiffPackageMap>;
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
    releaseMethod?: CodePushDeploymentsGet200ApplicationJSONLatestReleaseReleaseMethodEnum;
    releasedBy?: string;
    rollout?: number;
    size?: number;
    targetBinaryRange?: string;
    uploadTime?: number;
}
/**
 * Success
 */
export declare class CodePushDeploymentsGet200ApplicationJSON extends SpeakeasyBase {
    key?: string;
    latestRelease?: CodePushDeploymentsGet200ApplicationJSONLatestRelease;
    name: string;
}
export declare class CodePushDeploymentsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushDeploymentsGet200ApplicationJSONObject?: CodePushDeploymentsGet200ApplicationJSON;
    /**
     * Error
     */
    codePushDeploymentsGetDefaultApplicationJSONObject?: CodePushDeploymentsGetDefaultApplicationJSON;
}
