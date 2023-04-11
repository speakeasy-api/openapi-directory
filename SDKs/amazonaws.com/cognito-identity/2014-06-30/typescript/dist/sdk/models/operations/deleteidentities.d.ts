import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteIdentitiesXAmzTargetEnum {
    AWSCognitoIdentityServiceDeleteIdentities = "AWSCognitoIdentityService.DeleteIdentities"
}
export declare class DeleteIdentitiesRequest extends SpeakeasyBase {
    deleteIdentitiesInput: shared.DeleteIdentitiesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIdentitiesXAmzTargetEnum;
}
export declare class DeleteIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteIdentitiesResponse?: shared.DeleteIdentitiesResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
