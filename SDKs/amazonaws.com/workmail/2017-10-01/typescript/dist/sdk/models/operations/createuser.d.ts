import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserXAmzTargetEnum {
    WorkMailServiceCreateUser = "WorkMailService.CreateUser"
}
export declare class CreateUserRequest extends SpeakeasyBase {
    createUserRequest: shared.CreateUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserXAmzTargetEnum;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUserResponse?: shared.CreateUserResponse;
    /**
     * DirectoryServiceAuthenticationFailedException
     */
    directoryServiceAuthenticationFailedException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidPasswordException
     */
    invalidPasswordException?: any;
    /**
     * NameAvailabilityException
     */
    nameAvailabilityException?: any;
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
     * ReservedNameException
     */
    reservedNameException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
