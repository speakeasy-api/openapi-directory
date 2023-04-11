import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetIdentityProviderByIdentifierXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifier = "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier"
}
export declare class GetIdentityProviderByIdentifierRequest extends SpeakeasyBase {
    getIdentityProviderByIdentifierRequest: shared.GetIdentityProviderByIdentifierRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetIdentityProviderByIdentifierXAmzTargetEnum;
}
export declare class GetIdentityProviderByIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getIdentityProviderByIdentifierResponse?: shared.GetIdentityProviderByIdentifierResponse;
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
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
