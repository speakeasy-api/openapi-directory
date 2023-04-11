import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteUserXAmzTargetEnum {
    WorkMailServiceDeleteUser = "WorkMailService.DeleteUser"
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
    deleteUserResponse?: Record<string, any>;
    /**
     * DirectoryServiceAuthenticationFailedException
     */
    directoryServiceAuthenticationFailedException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
