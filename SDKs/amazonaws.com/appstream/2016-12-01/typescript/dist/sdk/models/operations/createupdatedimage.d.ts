import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUpdatedImageXAmzTargetEnum {
    PhotonAdminProxyServiceCreateUpdatedImage = "PhotonAdminProxyService.CreateUpdatedImage"
}
export declare class CreateUpdatedImageRequest extends SpeakeasyBase {
    createUpdatedImageRequest: shared.CreateUpdatedImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUpdatedImageXAmzTargetEnum;
}
export declare class CreateUpdatedImageResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createUpdatedImageResult?: shared.CreateUpdatedImageResult;
    /**
     * IncompatibleImageException
     */
    incompatibleImageException?: any;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
