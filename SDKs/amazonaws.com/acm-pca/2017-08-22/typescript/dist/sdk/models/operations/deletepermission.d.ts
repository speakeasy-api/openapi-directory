import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePermissionXAmzTargetEnum {
    ACMPrivateCADeletePermission = "ACMPrivateCA.DeletePermission"
}
export declare class DeletePermissionRequest extends SpeakeasyBase {
    deletePermissionRequest: shared.DeletePermissionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePermissionXAmzTargetEnum;
}
export declare class DeletePermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * RequestFailedException
     */
    requestFailedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
