import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentsPromoteSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Release to be promoted, only needs to provide optional fields, description, label, disabled, mandatory, rollout, targetBinaryVersion
 */
export declare class CodePushDeploymentsPromoteRequestBody extends SpeakeasyBase {
    description?: string;
    isDisabled?: boolean;
    isMandatory?: boolean;
    label?: string;
    rollout?: number;
    targetBinaryRange?: string;
}
export declare class CodePushDeploymentsPromoteRequest extends SpeakeasyBase {
    /**
     * Release to be promoted, only needs to provide optional fields, description, label, disabled, mandatory, rollout, targetBinaryVersion
     */
    requestBody?: CodePushDeploymentsPromoteRequestBody;
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
     * deployment name
     */
    promoteDeploymentName: string;
}
/**
 * Error
 */
export declare class CodePushDeploymentsPromoteDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentsPromote200ApplicationJSONDiffPackageMap extends SpeakeasyBase {
    size: number;
    url: string;
}
/**
 * The release method is unknown if unspecified
 */
export declare enum CodePushDeploymentsPromote200ApplicationJSONReleaseMethodEnum {
    Upload = "Upload",
    Promote = "Promote",
    Rollback = "Rollback"
}
/**
 * Promote a new release to the target deployment, return this new release.
 */
export declare class CodePushDeploymentsPromote200ApplicationJSON extends SpeakeasyBase {
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<string, CodePushDeploymentsPromote200ApplicationJSONDiffPackageMap>;
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
    releaseMethod?: CodePushDeploymentsPromote200ApplicationJSONReleaseMethodEnum;
    releasedBy?: string;
    rollout?: number;
    size?: number;
    targetBinaryRange?: string;
    uploadTime?: number;
}
export declare class CodePushDeploymentsPromoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Promote a new release to the target deployment, return this new release.
     */
    codePushDeploymentsPromote200ApplicationJSONObject?: CodePushDeploymentsPromote200ApplicationJSON;
    /**
     * Error
     */
    codePushDeploymentsPromoteDefaultApplicationJSONObject?: CodePushDeploymentsPromoteDefaultApplicationJSON;
}
