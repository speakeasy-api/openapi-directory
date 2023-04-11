import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateResourceXAmzTargetEnum {
    CloudApiServiceUpdateResource = "CloudApiService.UpdateResource"
}
export declare class UpdateResourceRequest extends SpeakeasyBase {
    updateResourceInput: shared.UpdateResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResourceXAmzTargetEnum;
}
export declare class UpdateResourceResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
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
    /**
     * Success
     */
    updateResourceOutput?: shared.UpdateResourceOutput;
}
