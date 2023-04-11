import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserImportJobXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceCreateUserImportJob = "AWSCognitoIdentityProviderService.CreateUserImportJob"
}
export declare class CreateUserImportJobRequest extends SpeakeasyBase {
    createUserImportJobRequest: shared.CreateUserImportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserImportJobXAmzTargetEnum;
}
export declare class CreateUserImportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUserImportJobResponse?: shared.CreateUserImportJobResponse;
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
    /**
     * PreconditionNotMetException
     */
    preconditionNotMetException?: any;
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
