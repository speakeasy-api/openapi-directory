import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the action that is to be applied to the findings that match the filter.
 */
export declare enum UpdateFilterRequestBodyActionEnum {
    None = "NONE",
    Suppress = "SUPPRESS"
}
/**
 * Details on the criteria used to define the filter.
 */
export declare class UpdateFilterRequestBodyFilterCriteria extends SpeakeasyBase {
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
export declare class UpdateFilterRequestBody extends SpeakeasyBase {
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    action?: UpdateFilterRequestBodyActionEnum;
    /**
     * A description of the filter.
     */
    description?: string;
    /**
     * The Amazon Resource Number (ARN) of the filter to update.
     */
    filterArn: string;
    /**
     * Details on the criteria used to define the filter.
     */
    filterCriteria?: UpdateFilterRequestBodyFilterCriteria;
    /**
     * The name of the filter.
     */
    name?: string;
    /**
     * The reason the filter was updated.
     */
    reason?: string;
}
export declare class UpdateFilterRequest extends SpeakeasyBase {
    requestBody: UpdateFilterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFilterResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateFilterResponse?: shared.UpdateFilterResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
