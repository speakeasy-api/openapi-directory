import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateIdentityPoolXAmzTargetEnum {
    AWSCognitoIdentityServiceCreateIdentityPool = "AWSCognitoIdentityService.CreateIdentityPool"
}
export declare class CreateIdentityPoolRequest extends SpeakeasyBase {
    createIdentityPoolInput: shared.CreateIdentityPoolInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateIdentityPoolXAmzTargetEnum;
}
export declare class CreateIdentityPoolResponse extends SpeakeasyBase {
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
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
