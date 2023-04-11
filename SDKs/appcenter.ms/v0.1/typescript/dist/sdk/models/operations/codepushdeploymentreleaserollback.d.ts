import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentReleaseRollbackSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The specific release label that you want to rollback to
 */
export declare class CodePushDeploymentReleaseRollbackRequestBody extends SpeakeasyBase {
    label?: string;
}
export declare class CodePushDeploymentReleaseRollbackRequest extends SpeakeasyBase {
    /**
     * The specific release label that you want to rollback to
     */
    requestBody?: CodePushDeploymentReleaseRollbackRequestBody;
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
export declare class CodePushDeploymentReleaseRollbackDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentReleaseRollback201ApplicationJSONDiffPackageMap extends SpeakeasyBase {
    size: number;
    url: string;
}
/**
 * The release method is unknown if unspecified
 */
export declare enum CodePushDeploymentReleaseRollback201ApplicationJSONReleaseMethodEnum {
    Upload = "Upload",
    Promote = "Promote",
    Rollback = "Rollback"
}
/**
 * Success
 */
export declare class CodePushDeploymentReleaseRollback201ApplicationJSON extends SpeakeasyBase {
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<string, CodePushDeploymentReleaseRollback201ApplicationJSONDiffPackageMap>;
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
    releaseMethod?: CodePushDeploymentReleaseRollback201ApplicationJSONReleaseMethodEnum;
    releasedBy?: string;
    rollout?: number;
    size?: number;
    targetBinaryRange?: string;
    uploadTime?: number;
}
export declare class CodePushDeploymentReleaseRollbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushDeploymentReleaseRollback201ApplicationJSONObject?: CodePushDeploymentReleaseRollback201ApplicationJSON;
    /**
     * Error
     */
    codePushDeploymentReleaseRollbackDefaultApplicationJSONObject?: CodePushDeploymentReleaseRollbackDefaultApplicationJSON;
}
