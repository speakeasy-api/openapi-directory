import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopUserImportJobXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceStopUserImportJob = "AWSCognitoIdentityProviderService.StopUserImportJob"
}
export declare class StopUserImportJobRequest extends SpeakeasyBase {
    stopUserImportJobRequest: shared.StopUserImportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopUserImportJobXAmzTargetEnum;
}
export declare class StopUserImportJobResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    stopUserImportJobResponse?: shared.StopUserImportJobResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
