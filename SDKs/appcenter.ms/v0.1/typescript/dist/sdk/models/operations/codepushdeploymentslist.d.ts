import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CodePushDeploymentsListRequest extends SpeakeasyBase {
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
export declare class CodePushDeploymentsListDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentsList200ApplicationJSONLatestReleaseDiffPackageMap extends SpeakeasyBase {
    size: number;
    url: string;
}
/**
 * The release method is unknown if unspecified
 */
export declare enum CodePushDeploymentsList200ApplicationJSONLatestReleaseReleaseMethodEnum {
    Upload = "Upload",
    Promote = "Promote",
    Rollback = "Rollback"
}
export declare class CodePushDeploymentsList200ApplicationJSONLatestRelease extends SpeakeasyBase {
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<string, CodePushDeploymentsList200ApplicationJSONLatestReleaseDiffPackageMap>;
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
    releaseMethod?: CodePushDeploymentsList200ApplicationJSONLatestReleaseReleaseMethodEnum;
    releasedBy?: string;
    rollout?: number;
    size?: number;
    targetBinaryRange?: string;
    uploadTime?: number;
}
export declare class CodePushDeploymentsList200ApplicationJSON extends SpeakeasyBase {
    key?: string;
    latestRelease?: CodePushDeploymentsList200ApplicationJSONLatestRelease;
    name: string;
}
export declare class CodePushDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushDeploymentsList200ApplicationJSONObjects?: CodePushDeploymentsList200ApplicationJSON[];
    /**
     * Error
     */
    codePushDeploymentsListDefaultApplicationJSONObject?: CodePushDeploymentsListDefaultApplicationJSON;
}
