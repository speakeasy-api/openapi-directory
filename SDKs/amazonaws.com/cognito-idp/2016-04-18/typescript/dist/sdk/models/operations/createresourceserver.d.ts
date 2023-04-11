import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateResourceServerXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceCreateResourceServer = "AWSCognitoIdentityProviderService.CreateResourceServer"
}
export declare class CreateResourceServerRequest extends SpeakeasyBase {
    createResourceServerRequest: shared.CreateResourceServerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResourceServerXAmzTargetEnum;
}
export declare class CreateResourceServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createResourceServerResponse?: shared.CreateResourceServerResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
