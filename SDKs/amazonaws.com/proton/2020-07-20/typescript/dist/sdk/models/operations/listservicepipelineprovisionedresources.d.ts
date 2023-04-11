import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServicePipelineProvisionedResourcesXAmzTargetEnum {
    AwsProton20200720ListServicePipelineProvisionedResources = "AwsProton20200720.ListServicePipelineProvisionedResources"
}
export declare class ListServicePipelineProvisionedResourcesRequest extends SpeakeasyBase {
    listServicePipelineProvisionedResourcesInput: shared.ListServicePipelineProvisionedResourcesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServicePipelineProvisionedResourcesXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListServicePipelineProvisionedResourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listServicePipelineProvisionedResourcesOutput?: shared.ListServicePipelineProvisionedResourcesOutput;
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
     * ValidationException
     */
    validationException?: any;
}
