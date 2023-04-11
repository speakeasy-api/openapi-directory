import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Update Launch configuration boot mode request.
 */
export declare enum UpdateLaunchConfigurationRequestBodyBootModeEnum {
    LegacyBios = "LEGACY_BIOS",
    Uefi = "UEFI"
}
/**
 * Update Launch configuration launch disposition request.
 */
export declare enum UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum {
    Stopped = "STOPPED",
    Started = "STARTED"
}
/**
 * Configure Licensing.
 */
export declare class UpdateLaunchConfigurationRequestBodyLicensing extends SpeakeasyBase {
    osByol?: boolean;
}
/**
 * Post Launch Actions to executed on the Test or Cutover instance.
 */
export declare class UpdateLaunchConfigurationRequestBodyPostLaunchActions extends SpeakeasyBase {
    cloudWatchLogGroupName?: string;
    deployment?: shared.PostLaunchActionsDeploymentTypeEnum;
    s3LogBucket?: string;
    s3OutputKeyPrefix?: string;
    ssmDocuments?: shared.SsmDocument[];
}
/**
 * Update Launch configuration Target instance right sizing request.
 */
export declare enum UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum {
    None = "NONE",
    Basic = "BASIC"
}
export declare class UpdateLaunchConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Update Launch configuration boot mode request.
     */
    bootMode?: UpdateLaunchConfigurationRequestBodyBootModeEnum;
    /**
     * Update Launch configuration copy Private IP request.
     */
    copyPrivateIp?: boolean;
    /**
     * Update Launch configuration copy Tags request.
     */
    copyTags?: boolean;
    /**
     * Enable map auto tagging.
     */
    enableMapAutoTagging?: boolean;
    /**
     * Update Launch configuration launch disposition request.
     */
    launchDisposition?: UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
    /**
     * Configure Licensing.
     */
    licensing?: UpdateLaunchConfigurationRequestBodyLicensing;
    /**
     * Launch configuration map auto tagging MPE ID.
     */
    mapAutoTaggingMpeID?: string;
    /**
     * Update Launch configuration name request.
     */
    name?: string;
    /**
     * Post Launch Actions to executed on the Test or Cutover instance.
     */
    postLaunchActions?: UpdateLaunchConfigurationRequestBodyPostLaunchActions;
    /**
     * Update Launch configuration by Source Server ID request.
     */
    sourceServerID: string;
    /**
     * Update Launch configuration Target instance right sizing request.
     */
    targetInstanceTypeRightSizingMethod?: UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;
}
export declare class UpdateLaunchConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateLaunchConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLaunchConfigurationResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    launchConfiguration?: shared.LaunchConfiguration;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
