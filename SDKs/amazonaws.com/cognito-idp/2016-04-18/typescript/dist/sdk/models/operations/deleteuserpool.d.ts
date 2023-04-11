import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteUserPoolXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDeleteUserPool = "AWSCognitoIdentityProviderService.DeleteUserPool"
}
export declare class DeleteUserPoolRequest extends SpeakeasyBase {
    deleteUserPoolRequest: shared.DeleteUserPoolRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserPoolXAmzTargetEnum;
}
export declare class DeleteUserPoolResponse extends SpeakeasyBase {
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
     * UserImportInProgressException
     */
    userImportInProgressException?: any;
}
