import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UnlinkDeveloperIdentityXAmzTargetEnum {
    AWSCognitoIdentityServiceUnlinkDeveloperIdentity = "AWSCognitoIdentityService.UnlinkDeveloperIdentity"
}
export declare class UnlinkDeveloperIdentityRequest extends SpeakeasyBase {
    unlinkDeveloperIdentityInput: shared.UnlinkDeveloperIdentityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnlinkDeveloperIdentityXAmzTargetEnum;
}
export declare class UnlinkDeveloperIdentityResponse extends SpeakeasyBase {
    contentType: string;
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
