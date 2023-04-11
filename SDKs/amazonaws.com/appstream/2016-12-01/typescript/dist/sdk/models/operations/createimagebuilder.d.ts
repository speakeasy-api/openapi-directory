import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceCreateImageBuilder = "PhotonAdminProxyService.CreateImageBuilder"
}
export declare class CreateImageBuilderRequest extends SpeakeasyBase {
    createImageBuilderRequest: shared.CreateImageBuilderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImageBuilderXAmzTargetEnum;
}
export declare class CreateImageBuilderResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createImageBuilderResult?: shared.CreateImageBuilderResult;
    /**
     * IncompatibleImageException
     */
    incompatibleImageException?: any;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceNotAvailableException
     */
    resourceNotAvailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestLimitExceededException
     */
    requestLimitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
