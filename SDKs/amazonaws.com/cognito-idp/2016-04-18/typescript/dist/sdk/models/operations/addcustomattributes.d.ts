import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddCustomAttributesXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAddCustomAttributes = "AWSCognitoIdentityProviderService.AddCustomAttributes"
}
export declare class AddCustomAttributesRequest extends SpeakeasyBase {
    addCustomAttributesRequest: shared.AddCustomAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddCustomAttributesXAmzTargetEnum;
}
export declare class AddCustomAttributesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addCustomAttributesResponse?: Record<string, any>;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UserImportInProgressException
     */
    userImportInProgressException?: any;
}
