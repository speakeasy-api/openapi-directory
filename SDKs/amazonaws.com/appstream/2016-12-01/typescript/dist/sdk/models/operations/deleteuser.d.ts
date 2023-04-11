import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteUserXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteUser = "PhotonAdminProxyService.DeleteUser"
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    deleteUserRequest: shared.DeleteUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserXAmzTargetEnum;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteUserResult?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
