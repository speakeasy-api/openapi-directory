import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServiceInstanceProvisionedResourcesXAmzTargetEnum {
    AwsProton20200720ListServiceInstanceProvisionedResources = "AwsProton20200720.ListServiceInstanceProvisionedResources"
}
export declare class ListServiceInstanceProvisionedResourcesRequest extends SpeakeasyBase {
    listServiceInstanceProvisionedResourcesInput: shared.ListServiceInstanceProvisionedResourcesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceInstanceProvisionedResourcesXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListServiceInstanceProvisionedResourcesResponse extends SpeakeasyBase {
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
    listServiceInstanceProvisionedResourcesOutput?: shared.ListServiceInstanceProvisionedResourcesOutput;
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
