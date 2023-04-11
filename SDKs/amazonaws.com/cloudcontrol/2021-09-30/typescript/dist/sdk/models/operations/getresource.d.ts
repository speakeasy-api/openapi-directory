import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourceXAmzTargetEnum {
    CloudApiServiceGetResource = "CloudApiService.GetResource"
}
export declare class GetResourceRequest extends SpeakeasyBase {
    getResourceInput: shared.GetResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceXAmzTargetEnum;
}
export declare class GetResourceResponse extends SpeakeasyBase {
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
     * Success
     */
    getResourceOutput?: shared.GetResourceOutput;
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
