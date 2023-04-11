import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourcesXAmzTargetEnum {
    CloudApiServiceListResources = "CloudApiService.ListResources"
}
export declare class ListResourcesRequest extends SpeakeasyBase {
    listResourcesInput: shared.ListResourcesInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourcesXAmzTargetEnum;
}
export declare class ListResourcesResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * GeneralServiceException
     */
    generalServiceException?: any;
    /**
     * HandlerFailureException
     */
    handlerFailureException?: any;
    /**
     * HandlerInternalFailureException
     */
    handlerInternalFailureException?: any;
    /**
     * InvalidCredentialsException
     */
    invalidCredentialsException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listResourcesOutput?: shared.ListResourcesOutput;
    /**
     * NetworkFailureException
     */
    networkFailureException?: any;
    /**
     * NotStabilizedException
     */
    notStabilizedException?: any;
    /**
     * NotUpdatableException
     */
    notUpdatableException?: any;
    /**
     * PrivateTypeException
     */
    privateTypeException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceInternalErrorException
     */
    serviceInternalErrorException?: any;
    /**
     * ServiceLimitExceededException
     */
    serviceLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * TypeNotFoundException
     */
    typeNotFoundException?: any;
    /**
     * UnsupportedActionException
     */
    unsupportedActionException?: any;
}
