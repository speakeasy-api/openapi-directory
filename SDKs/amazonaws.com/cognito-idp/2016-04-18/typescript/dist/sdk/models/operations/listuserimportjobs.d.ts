import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListUserImportJobsXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceListUserImportJobs = "AWSCognitoIdentityProviderService.ListUserImportJobs"
}
export declare class ListUserImportJobsRequest extends SpeakeasyBase {
    listUserImportJobsRequest: shared.ListUserImportJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUserImportJobsXAmzTargetEnum;
}
export declare class ListUserImportJobsResponse extends SpeakeasyBase {
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
    listUserImportJobsResponse?: shared.ListUserImportJobsResponse;
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
}
