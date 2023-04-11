import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableUserXAmzTargetEnum {
    PhotonAdminProxyServiceEnableUser = "PhotonAdminProxyService.EnableUser"
}
export declare class EnableUserRequest extends SpeakeasyBase {
    enableUserRequest: shared.EnableUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableUserXAmzTargetEnum;
}
export declare class EnableUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableUserResult?: Record<string, any>;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
