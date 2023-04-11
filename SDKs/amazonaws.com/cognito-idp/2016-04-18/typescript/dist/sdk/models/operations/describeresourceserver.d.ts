import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeResourceServerXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDescribeResourceServer = "AWSCognitoIdentityProviderService.DescribeResourceServer"
}
export declare class DescribeResourceServerRequest extends SpeakeasyBase {
    describeResourceServerRequest: shared.DescribeResourceServerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourceServerXAmzTargetEnum;
}
export declare class DescribeResourceServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeResourceServerResponse?: shared.DescribeResourceServerResponse;
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
