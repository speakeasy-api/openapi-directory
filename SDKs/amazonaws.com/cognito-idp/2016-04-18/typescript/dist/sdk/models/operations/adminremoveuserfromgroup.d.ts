import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminRemoveUserFromGroupXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminRemoveUserFromGroup = "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup"
}
export declare class AdminRemoveUserFromGroupRequest extends SpeakeasyBase {
    adminRemoveUserFromGroupRequest: shared.AdminRemoveUserFromGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminRemoveUserFromGroupXAmzTargetEnum;
}
export declare class AdminRemoveUserFromGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
