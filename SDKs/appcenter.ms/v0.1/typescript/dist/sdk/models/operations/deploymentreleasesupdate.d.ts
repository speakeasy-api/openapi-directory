import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeploymentReleasesUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Release modification. All fields are optional and only provided fields will get updated.
 */
export declare class DeploymentReleasesUpdateRequestBody extends SpeakeasyBase {
    description?: string;
    isDisabled?: boolean;
    isMandatory?: boolean;
    rollout?: number;
    targetBinaryRange?: string;
}
export declare class DeploymentReleasesUpdateRequest extends SpeakeasyBase {
    /**
     * Release modification. All fields are optional and only provided fields will get updated.
     */
    requestBody: DeploymentReleasesUpdateRequestBody;
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
    /**
     * release label
     */
    releaseLabel: string;
}
/**
 * Error
 */
export declare class DeploymentReleasesUpdateDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class DeploymentReleasesUpdate200ApplicationJSONDiffPackageMap extends SpeakeasyBase {
    size: number;
    url: string;
}
/**
 * The release method is unknown if unspecified
 */
export declare enum DeploymentReleasesUpdate200ApplicationJSONReleaseMethodEnum {
    Upload = "Upload",
    Promote = "Promote",
    Rollback = "Rollback"
}
/**
 * Success
 */
export declare class DeploymentReleasesUpdate200ApplicationJSON extends SpeakeasyBase {
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<string, DeploymentReleasesUpdate200ApplicationJSONDiffPackageMap>;
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
    releaseMethod?: DeploymentReleasesUpdate200ApplicationJSONReleaseMethodEnum;
    releasedBy?: string;
    rollout?: number;
    size?: number;
    targetBinaryRange?: string;
    uploadTime?: number;
}
export declare class DeploymentReleasesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    deploymentReleasesUpdate200ApplicationJSONObject?: DeploymentReleasesUpdate200ApplicationJSON;
    /**
     * Error
     */
    deploymentReleasesUpdateDefaultApplicationJSONObject?: DeploymentReleasesUpdateDefaultApplicationJSON;
}
