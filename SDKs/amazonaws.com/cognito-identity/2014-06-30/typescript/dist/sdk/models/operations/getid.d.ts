import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetIdXAmzTargetEnum {
    AWSCognitoIdentityServiceGetId = "AWSCognitoIdentityService.GetId"
}
export declare class GetIdRequest extends SpeakeasyBase {
    getIdInput: shared.GetIdInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetIdXAmzTargetEnum;
}
export declare class GetIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExternalServiceException
     */
    externalServiceException?: any;
    /**
     * Success
     */
    getIdResponse?: shared.GetIdResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
