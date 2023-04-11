import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourcesXAmzTargetEnum {
    ResourceGroupsTaggingAPI20170126GetResources = "ResourceGroupsTaggingAPI_20170126.GetResources"
}
export declare class GetResourcesRequest extends SpeakeasyBase {
    getResourcesInput: shared.GetResourcesInput;
    /**
     * Pagination token
     */
    paginationToken?: string;
    /**
     * Pagination limit
     */
    resourcesPerPage?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcesXAmzTargetEnum;
}
export declare class GetResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourcesOutput?: shared.GetResourcesOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * PaginationTokenExpiredException
     */
    paginationTokenExpiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
