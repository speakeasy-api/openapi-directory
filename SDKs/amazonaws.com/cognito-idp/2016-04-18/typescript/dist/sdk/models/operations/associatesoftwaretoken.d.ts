import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateSoftwareTokenXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAssociateSoftwareToken = "AWSCognitoIdentityProviderService.AssociateSoftwareToken"
}
export declare class AssociateSoftwareTokenRequest extends SpeakeasyBase {
    associateSoftwareTokenRequest: shared.AssociateSoftwareTokenRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateSoftwareTokenXAmzTargetEnum;
}
export declare class AssociateSoftwareTokenResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateSoftwareTokenResponse?: shared.AssociateSoftwareTokenResponse;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
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
    /**
     * SoftwareTokenMFANotFoundException
     */
    softwareTokenMFANotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
