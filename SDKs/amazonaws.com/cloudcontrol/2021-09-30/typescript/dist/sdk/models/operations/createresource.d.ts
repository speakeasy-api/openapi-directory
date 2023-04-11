import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateResourceXAmzTargetEnum {
    CloudApiServiceCreateResource = "CloudApiService.CreateResource"
}
export declare class CreateResourceRequest extends SpeakeasyBase {
    createResourceInput: shared.CreateResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResourceXAmzTargetEnum;
}
export declare class CreateResourceResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    /**
     * ClientTokenConflictException
     */
    clientTokenConflictException?: any;
    /**
     * ConcurrentOperationException
     */
    concurrentOperationException?: any;
    contentType: string;
    /**
     * Success
     */
    createResourceOutput?: shared.CreateResourceOutput;
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
