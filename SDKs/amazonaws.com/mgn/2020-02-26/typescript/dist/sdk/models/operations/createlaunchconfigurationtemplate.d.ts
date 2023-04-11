import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Launch configuration template boot mode.
 */
export declare enum CreateLaunchConfigurationTemplateRequestBodyBootModeEnum {
    LegacyBios = "LEGACY_BIOS",
    Uefi = "UEFI"
}
/**
 * Launch template disk configuration.
 */
export declare class CreateLaunchConfigurationTemplateRequestBodyLargeVolumeConf extends SpeakeasyBase {
    iops?: number;
    throughput?: number;
    volumeType?: shared.VolumeTypeEnum;
}
/**
 * Launch disposition.
 */
export declare enum CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum {
    Stopped = "STOPPED",
    Started = "STARTED"
}
/**
 * Configure Licensing.
 */
export declare class CreateLaunchConfigurationTemplateRequestBodyLicensing extends SpeakeasyBase {
    osByol?: boolean;
}
/**
 * Post Launch Actions to executed on the Test or Cutover instance.
 */
export declare class CreateLaunchConfigurationTemplateRequestBodyPostLaunchActions extends SpeakeasyBase {
    cloudWatchLogGroupName?: string;
    deployment?: shared.PostLaunchActionsDeploymentTypeEnum;
    s3LogBucket?: string;
    s3OutputKeyPrefix?: string;
    ssmDocuments?: shared.SsmDocument[];
}
/**
 * Launch template disk configuration.
 */
export declare class CreateLaunchConfigurationTemplateRequestBodySmallVolumeConf extends SpeakeasyBase {
    iops?: number;
    throughput?: number;
    volumeType?: shared.VolumeTypeEnum;
}
/**
 * Target instance type right-sizing method.
 */
export declare enum CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum {
    None = "NONE",
    Basic = "BASIC"
}
export declare class CreateLaunchConfigurationTemplateRequestBody extends SpeakeasyBase {
    /**
     * Associate public Ip address.
     */
    associatePublicIpAddress?: boolean;
    /**
     * Launch configuration template boot mode.
     */
    bootMode?: CreateLaunchConfigurationTemplateRequestBodyBootModeEnum;
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
    largeVolumeConf?: CreateLaunchConfigurationTemplateRequestBodyLargeVolumeConf;
    /**
     * Launch disposition.
     */
    launchDisposition?: CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnum;
    /**
     * Configure Licensing.
     */
    licensing?: CreateLaunchConfigurationTemplateRequestBodyLicensing;
    /**
     * Launch configuration template map auto tagging MPE ID.
     */
    mapAutoTaggingMpeID?: string;
    /**
     * Post Launch Actions to executed on the Test or Cutover instance.
     */
    postLaunchActions?: CreateLaunchConfigurationTemplateRequestBodyPostLaunchActions;
    /**
     * Launch template disk configuration.
     */
    smallVolumeConf?: CreateLaunchConfigurationTemplateRequestBodySmallVolumeConf;
    /**
     * Small volume maximum size.
     */
    smallVolumeMaxSize?: number;
    /**
     * Request to associate tags during creation of a Launch Configuration Template.
     */
    tags?: Record<string, string>;
    /**
     * Target instance type right-sizing method.
     */
    targetInstanceTypeRightSizingMethod?: CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnum;
}
export declare class CreateLaunchConfigurationTemplateRequest extends SpeakeasyBase {
    requestBody: CreateLaunchConfigurationTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateLaunchConfigurationTemplateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    launchConfigurationTemplate?: shared.LaunchConfigurationTemplate;
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
