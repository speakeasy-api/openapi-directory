import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourceXAmzTargetEnum {
    CloudApiServiceDeleteResource = "CloudApiService.DeleteResource"
}
export declare class DeleteResourceRequest extends SpeakeasyBase {
    deleteResourceInput: shared.DeleteResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceXAmzTargetEnum;
}
export declare class DeleteResourceResponse extends SpeakeasyBase {
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
    deleteResourceOutput?: shared.DeleteResourceOutput;
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
