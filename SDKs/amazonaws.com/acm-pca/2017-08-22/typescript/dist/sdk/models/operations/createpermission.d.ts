import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePermissionXAmzTargetEnum {
    ACMPrivateCACreatePermission = "ACMPrivateCA.CreatePermission"
}
export declare class CreatePermissionRequest extends SpeakeasyBase {
    createPermissionRequest: shared.CreatePermissionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePermissionXAmzTargetEnum;
}
export declare class CreatePermissionResponse extends SpeakeasyBase {
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * PermissionAlreadyExistsException
     */
    permissionAlreadyExistsException?: any;
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
