import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeIdentityPoolXAmzTargetEnum {
    AWSCognitoIdentityServiceDescribeIdentityPool = "AWSCognitoIdentityService.DescribeIdentityPool"
}
export declare class DescribeIdentityPoolRequest extends SpeakeasyBase {
    describeIdentityPoolInput: shared.DescribeIdentityPoolInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIdentityPoolXAmzTargetEnum;
}
export declare class DescribeIdentityPoolResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    identityPool?: shared.IdentityPool;
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
