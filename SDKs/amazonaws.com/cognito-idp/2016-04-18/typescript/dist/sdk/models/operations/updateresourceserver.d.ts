import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateResourceServerXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceUpdateResourceServer = "AWSCognitoIdentityProviderService.UpdateResourceServer"
}
export declare class UpdateResourceServerRequest extends SpeakeasyBase {
    updateResourceServerRequest: shared.UpdateResourceServerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResourceServerXAmzTargetEnum;
}
export declare class UpdateResourceServerResponse extends SpeakeasyBase {
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
     * Success
     */
    updateResourceServerResponse?: shared.UpdateResourceServerResponse;
}
