import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum LookupDeveloperIdentityXAmzTargetEnum {
    AWSCognitoIdentityServiceLookupDeveloperIdentity = "AWSCognitoIdentityService.LookupDeveloperIdentity"
}
export declare class LookupDeveloperIdentityRequest extends SpeakeasyBase {
    lookupDeveloperIdentityInput: shared.LookupDeveloperIdentityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: LookupDeveloperIdentityXAmzTargetEnum;
}
export declare class LookupDeveloperIdentityResponse extends SpeakeasyBase {
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
     * Success
     */
    lookupDeveloperIdentityResponse?: shared.LookupDeveloperIdentityResponse;
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
