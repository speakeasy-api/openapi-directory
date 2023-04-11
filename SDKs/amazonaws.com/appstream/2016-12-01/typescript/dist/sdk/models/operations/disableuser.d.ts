import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableUserXAmzTargetEnum {
    PhotonAdminProxyServiceDisableUser = "PhotonAdminProxyService.DisableUser"
}
export declare class DisableUserRequest extends SpeakeasyBase {
    disableUserRequest: shared.DisableUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableUserXAmzTargetEnum;
}
export declare class DisableUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableUserResult?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
