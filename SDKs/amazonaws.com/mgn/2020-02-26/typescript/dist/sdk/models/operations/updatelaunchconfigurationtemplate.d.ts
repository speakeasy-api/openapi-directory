import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Launch configuration template boot mode.
 */
export declare enum UpdateLaunchConfigurationTemplateRequestBodyBootModeEnum {
    LegacyBios = "LEGACY_BIOS",
    Uefi = "UEFI"
}
/**
 * Launch template disk configuration.
 */
export declare class UpdateLaunchConfigurationTemplateRequestBodyLargeVolumeConf extends SpeakeasyBase {
    iops?: number;
    throughput?: number;
    volumeType?: shared.VolumeTypeEnum;
}
/**
 * Launch disposition.
 */
export declare enum UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum {
    Stopped = "STOPPED",
    Started = "STARTED"
}
/**
 * Configure Licensing.
 */
export declare class UpdateLaunchConfigurationTemplateRequestBodyLicensing extends SpeakeasyBase {
    osByol?: boolean;
}
/**
 * Post Launch Actions to executed on the Test or Cutover instance.
 */
export declare class UpdateLaunchConfigurationTemplateRequestBodyPostLaunchActions extends SpeakeasyBase {
    cloudWatchLogGroupName?: string;
    deployment?: shared.PostLaunchActionsDeploymentTypeEnum;
    s3LogBucket?: string;
    s3OutputKeyPrefix?: string;
    ssmDocuments?: shared.SsmDocument[];
}
/**
 * Launch template disk configuration.
 */
export declare class UpdateLaunchConfigurationTemplateRequestBodySmallVolumeConf extends SpeakeasyBase {
    iops?: number;
    throughput?: number;
    volumeType?: shared.VolumeTypeEnum;
}
/**
 * Target instance type right-sizing method.
 */
export declare enum UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum {
    None = "NONE",
    Basic = "BASIC"
}
export declare class UpdateLaunchConfigurationTemplateRequestBody extends SpeakeasyBase {
    /**
     * Associate public Ip address.
     */
    associatePublicIpAddress?: boolean;
    /**
     * Launch configuration template boot mode.
     */
    bootMode?: UpdateLaunchConfigurationTemplateRequestBodyBootModeEnum;
    /**
     * Copy private Ip.
     */
    copyPrivateIp?: boolean;
    /**
     * Copy tags.
     */
    copyTags?: boolean;
    /**
     * Enable map auto tagging.
     */
    enableMapAutoTagging?: boolean;
    /**
     * Launch template disk configuration.
     */
    largeVolumeConf?: UpdateLaunchConfigurationTemplateRequestBodyLargeVolumeConf;
    /**
     * Launch Configuration Template ID.
     */
    launchConfigurationTemplateID: string;
    /**
     * Launch disposition.
     */
    launchDisposition?: UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
    /**
     * Configure Licensing.
     */
    licensing?: UpdateLaunchConfigurationTemplateRequestBodyLicensing;
    /**
     * Launch configuration template map auto tagging MPE ID.
     */
    mapAutoTaggingMpeID?: string;
    /**
     * Post Launch Actions to executed on the Test or Cutover instance.
     */
    postLaunchActions?: UpdateLaunchConfigurationTemplateRequestBodyPostLaunchActions;
    /**
     * Launch template disk configuration.
     */
    smallVolumeConf?: UpdateLaunchConfigurationTemplateRequestBodySmallVolumeConf;
    /**
     * Small volume maximum size.
     */
    smallVolumeMaxSize?: number;
    /**
     * Target instance type right-sizing method.
     */
    targetInstanceTypeRightSizingMethod?: UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;
}
export declare class UpdateLaunchConfigurationTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateLaunchConfigurationTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLaunchConfigurationTemplateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    launchConfigurationTemplate?: shared.LaunchConfigurationTemplate;
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
