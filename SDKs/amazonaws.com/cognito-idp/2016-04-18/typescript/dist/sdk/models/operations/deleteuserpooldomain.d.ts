import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteUserPoolDomainXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDeleteUserPoolDomain = "AWSCognitoIdentityProviderService.DeleteUserPoolDomain"
}
export declare class DeleteUserPoolDomainRequest extends SpeakeasyBase {
    deleteUserPoolDomainRequest: shared.DeleteUserPoolDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserPoolDomainXAmzTargetEnum;
}
export declare class DeleteUserPoolDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteUserPoolDomainResponse?: Record<string, any>;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
