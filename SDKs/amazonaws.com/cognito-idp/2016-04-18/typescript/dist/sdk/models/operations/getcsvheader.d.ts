import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCSVHeaderXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceGetCSVHeader = "AWSCognitoIdentityProviderService.GetCSVHeader"
}
export declare class GetCSVHeaderRequest extends SpeakeasyBase {
    getCSVHeaderRequest: shared.GetCSVHeaderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCSVHeaderXAmzTargetEnum;
}
export declare class GetCSVHeaderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCSVHeaderResponse?: shared.GetCSVHeaderResponse;
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
}
