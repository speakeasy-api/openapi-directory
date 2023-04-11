import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeIdentityProviderXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDescribeIdentityProvider = "AWSCognitoIdentityProviderService.DescribeIdentityProvider"
}
export declare class DescribeIdentityProviderRequest extends SpeakeasyBase {
    describeIdentityProviderRequest: shared.DescribeIdentityProviderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIdentityProviderXAmzTargetEnum;
}
export declare class DescribeIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeIdentityProviderResponse?: shared.DescribeIdentityProviderResponse;
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
