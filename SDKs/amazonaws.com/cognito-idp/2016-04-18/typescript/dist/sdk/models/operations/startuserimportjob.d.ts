import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartUserImportJobXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceStartUserImportJob = "AWSCognitoIdentityProviderService.StartUserImportJob"
}
export declare class StartUserImportJobRequest extends SpeakeasyBase {
    startUserImportJobRequest: shared.StartUserImportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartUserImportJobXAmzTargetEnum;
}
export declare class StartUserImportJobResponse extends SpeakeasyBase {
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
     * PreconditionNotMetException
     */
    preconditionNotMetException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startUserImportJobResponse?: shared.StartUserImportJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
