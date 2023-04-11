import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The configuration of the studio component, based on component type.
 */
export declare class UpdateStudioComponentRequestBodyConfiguration extends SpeakeasyBase {
    activeDirectoryConfiguration?: shared.ActiveDirectoryConfiguration;
    computeFarmConfiguration?: shared.ComputeFarmConfiguration;
    licenseServiceConfiguration?: shared.LicenseServiceConfiguration;
    sharedFileSystemConfiguration?: shared.SharedFileSystemConfiguration;
}
/**
 * The specific subtype of a studio component.
 */
export declare enum UpdateStudioComponentRequestBodySubtypeEnum {
    AwsManagedMicrosoftAd = "AWS_MANAGED_MICROSOFT_AD",
    AmazonFsxForWindows = "AMAZON_FSX_FOR_WINDOWS",
    AmazonFsxForLustre = "AMAZON_FSX_FOR_LUSTRE",
    Custom = "CUSTOM"
}
/**
 * The type of the studio component.
 */
export declare enum UpdateStudioComponentRequestBodyTypeEnum {
    ActiveDirectory = "ACTIVE_DIRECTORY",
    SharedFileSystem = "SHARED_FILE_SYSTEM",
    ComputeFarm = "COMPUTE_FARM",
    LicenseService = "LICENSE_SERVICE",
    Custom = "CUSTOM"
}
export declare class UpdateStudioComponentRequestBody extends SpeakeasyBase {
    /**
     * The configuration of the studio component, based on component type.
     */
    configuration?: UpdateStudioComponentRequestBodyConfiguration;
    /**
     * The description.
     */
    description?: string;
    /**
     * The EC2 security groups that control access to the studio component.
     */
    ec2SecurityGroupIds?: string[];
    /**
     * Initialization scripts for studio components.
     */
    initializationScripts?: shared.StudioComponentInitializationScript[];
    /**
     * The name for the studio component.
     */
    name?: string;
    /**
     * An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running.
     */
    runtimeRoleArn?: string;
    /**
     * Parameters for the studio component scripts.
     */
    scriptParameters?: shared.ScriptParameterKeyValue[];
    /**
     * An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.
     */
    secureInitializationRoleArn?: string;
    /**
     * The specific subtype of a studio component.
     */
    subtype?: UpdateStudioComponentRequestBodySubtypeEnum;
    /**
     * The type of the studio component.
     */
    type?: UpdateStudioComponentRequestBodyTypeEnum;
}
export declare class UpdateStudioComponentRequest extends SpeakeasyBase {
    requestBody: UpdateStudioComponentRequestBody;
    xAmzAlgorithm?: string;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.
     */
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The studio component ID.
     */
    studioComponentId: string;
    /**
     * The studio ID.
     */
    studioId: string;
}
export declare class UpdateStudioComponentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateStudioComponentResponse?: shared.UpdateStudioComponentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
