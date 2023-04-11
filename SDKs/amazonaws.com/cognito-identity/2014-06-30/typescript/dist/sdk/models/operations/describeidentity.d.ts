import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeIdentityXAmzTargetEnum {
    AWSCognitoIdentityServiceDescribeIdentity = "AWSCognitoIdentityService.DescribeIdentity"
}
export declare class DescribeIdentityRequest extends SpeakeasyBase {
    describeIdentityInput: shared.DescribeIdentityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIdentityXAmzTargetEnum;
}
export declare class DescribeIdentityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    identityDescription?: shared.IdentityDescription;
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
