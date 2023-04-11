import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUserPoolClientXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDescribeUserPoolClient = "AWSCognitoIdentityProviderService.DescribeUserPoolClient"
}
export declare class DescribeUserPoolClientRequest extends SpeakeasyBase {
    describeUserPoolClientRequest: shared.DescribeUserPoolClientRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserPoolClientXAmzTargetEnum;
}
export declare class DescribeUserPoolClientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUserPoolClientResponse?: shared.DescribeUserPoolClientResponse;
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
