import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UnlinkIdentityXAmzTargetEnum {
    AWSCognitoIdentityServiceUnlinkIdentity = "AWSCognitoIdentityService.UnlinkIdentity"
}
export declare class UnlinkIdentityRequest extends SpeakeasyBase {
    unlinkIdentityInput: shared.UnlinkIdentityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnlinkIdentityXAmzTargetEnum;
}
export declare class UnlinkIdentityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExternalServiceException
     */
    externalServiceException?: any;
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
     * ResourceConflictException
     */
    resourceConflictException?: any;
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
