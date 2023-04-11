import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of the Recovery Instance in EC2 after the recovery operation.
 */
export declare enum UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum {
    Stopped = "STOPPED",
    Started = "STARTED"
}
/**
 * Configuration of a machine's license.
 */
export declare class UpdateLaunchConfigurationRequestBodyLicensing extends SpeakeasyBase {
    osByol?: boolean;
}
/**
 * Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.
 */
export declare enum UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum {
    None = "NONE",
    Basic = "BASIC"
}
export declare class UpdateLaunchConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Whether we should copy the Private IP of the Source Server to the Recovery Instance.
     */
    copyPrivateIp?: boolean;
    /**
     * Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.
     */
    copyTags?: boolean;
    /**
     * The state of the Recovery Instance in EC2 after the recovery operation.
     */
    launchDisposition?: UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
    /**
     * Configuration of a machine's license.
     */
    licensing?: UpdateLaunchConfigurationRequestBodyLicensing;
    /**
     * The name of the launch configuration.
     */
    name?: string;
    /**
     * The ID of the Source Server that we want to retrieve a Launch Configuration for.
     */
    sourceServerID: string;
    /**
     * Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.
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
     * InternalServerException
     */
    internalServerException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
