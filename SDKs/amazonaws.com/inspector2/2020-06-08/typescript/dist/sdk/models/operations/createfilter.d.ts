import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines the action that is to be applied to the findings that match the filter.
 */
export declare enum CreateFilterRequestBodyActionEnum {
    None = "NONE",
    Suppress = "SUPPRESS"
}
/**
 * Details on the criteria used to define the filter.
 */
export declare class CreateFilterRequestBodyFilterCriteria extends SpeakeasyBase {
    awsAccountId?: shared.StringFilter[];
    componentId?: shared.StringFilter[];
    componentType?: shared.StringFilter[];
    ec2InstanceImageId?: shared.StringFilter[];
    ec2InstanceSubnetId?: shared.StringFilter[];
    ec2InstanceVpcId?: shared.StringFilter[];
    ecrImageArchitecture?: shared.StringFilter[];
    ecrImageHash?: shared.StringFilter[];
    ecrImagePushedAt?: shared.DateFilter[];
    ecrImageRegistry?: shared.StringFilter[];
    ecrImageRepositoryName?: shared.StringFilter[];
    ecrImageTags?: shared.StringFilter[];
    exploitAvailable?: shared.StringFilter[];
    findingArn?: shared.StringFilter[];
    findingStatus?: shared.StringFilter[];
    findingType?: shared.StringFilter[];
    firstObservedAt?: shared.DateFilter[];
    fixAvailable?: shared.StringFilter[];
    inspectorScore?: shared.NumberFilter[];
    lambdaFunctionExecutionRoleArn?: shared.StringFilter[];
    lambdaFunctionLastModifiedAt?: shared.DateFilter[];
    lambdaFunctionLayers?: shared.StringFilter[];
    lambdaFunctionName?: shared.StringFilter[];
    lambdaFunctionRuntime?: shared.StringFilter[];
    lastObservedAt?: shared.DateFilter[];
    networkProtocol?: shared.StringFilter[];
    portRange?: shared.PortRangeFilter[];
    relatedVulnerabilities?: shared.StringFilter[];
    resourceId?: shared.StringFilter[];
    resourceTags?: shared.MapFilter[];
    resourceType?: shared.StringFilter[];
    severity?: shared.StringFilter[];
    title?: shared.StringFilter[];
    updatedAt?: shared.DateFilter[];
    vendorSeverity?: shared.StringFilter[];
    vulnerabilityId?: shared.StringFilter[];
    vulnerabilitySource?: shared.StringFilter[];
    vulnerablePackages?: shared.PackageFilter[];
}
export declare class CreateFilterRequestBody extends SpeakeasyBase {
    /**
     * Defines the action that is to be applied to the findings that match the filter.
     */
    action: CreateFilterRequestBodyActionEnum;
    /**
     * A description of the filter.
     */
    description?: string;
    /**
     * Details on the criteria used to define the filter.
     */
    filterCriteria: CreateFilterRequestBodyFilterCriteria;
    /**
     * The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not allowed.
     */
    name: string;
    /**
     * The reason for creating the filter.
     */
    reason?: string;
    /**
     * A list of tags for the filter.
     */
    tags?: Record<string, string>;
}
export declare class CreateFilterRequest extends SpeakeasyBase {
    requestBody: CreateFilterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFilterResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createFilterResponse?: shared.CreateFilterResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
