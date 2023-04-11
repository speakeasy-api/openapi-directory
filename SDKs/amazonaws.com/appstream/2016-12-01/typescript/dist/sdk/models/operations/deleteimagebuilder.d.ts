import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteImageBuilder = "PhotonAdminProxyService.DeleteImageBuilder"
}
export declare class DeleteImageBuilderRequest extends SpeakeasyBase {
    deleteImageBuilderRequest: shared.DeleteImageBuilderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImageBuilderXAmzTargetEnum;
}
export declare class DeleteImageBuilderResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteImageBuilderResult?: shared.DeleteImageBuilderResult;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
