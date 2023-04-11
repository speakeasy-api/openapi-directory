import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MergeDeveloperIdentitiesXAmzTargetEnum {
    AWSCognitoIdentityServiceMergeDeveloperIdentities = "AWSCognitoIdentityService.MergeDeveloperIdentities"
}
export declare class MergeDeveloperIdentitiesRequest extends SpeakeasyBase {
    mergeDeveloperIdentitiesInput: shared.MergeDeveloperIdentitiesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergeDeveloperIdentitiesXAmzTargetEnum;
}
export declare class MergeDeveloperIdentitiesResponse extends SpeakeasyBase {
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
    mergeDeveloperIdentitiesResponse?: shared.MergeDeveloperIdentitiesResponse;
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
