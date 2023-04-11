import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAppBlockXAmzTargetEnum {
    PhotonAdminProxyServiceCreateAppBlock = "PhotonAdminProxyService.CreateAppBlock"
}
export declare class CreateAppBlockRequest extends SpeakeasyBase {
    createAppBlockRequest: shared.CreateAppBlockRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAppBlockXAmzTargetEnum;
}
export declare class CreateAppBlockResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createAppBlockResult?: shared.CreateAppBlockResult;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
