import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAppBlockXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteAppBlock = "PhotonAdminProxyService.DeleteAppBlock"
}
export declare class DeleteAppBlockRequest extends SpeakeasyBase {
    deleteAppBlockRequest: shared.DeleteAppBlockRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppBlockXAmzTargetEnum;
}
export declare class DeleteAppBlockResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteAppBlockResult?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
}
