import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUserPoolXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDescribeUserPool = "AWSCognitoIdentityProviderService.DescribeUserPool"
}
export declare class DescribeUserPoolRequest extends SpeakeasyBase {
    describeUserPoolRequest: shared.DescribeUserPoolRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserPoolXAmzTargetEnum;
}
export declare class DescribeUserPoolResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUserPoolResponse?: shared.DescribeUserPoolResponse;
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
     * UserPoolTaggingException
     */
    userPoolTaggingException?: any;
}
