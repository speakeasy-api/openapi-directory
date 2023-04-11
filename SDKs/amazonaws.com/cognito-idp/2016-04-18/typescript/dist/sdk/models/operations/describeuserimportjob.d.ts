import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUserImportJobXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDescribeUserImportJob = "AWSCognitoIdentityProviderService.DescribeUserImportJob"
}
export declare class DescribeUserImportJobRequest extends SpeakeasyBase {
    describeUserImportJobRequest: shared.DescribeUserImportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserImportJobXAmzTargetEnum;
}
export declare class DescribeUserImportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUserImportJobResponse?: shared.DescribeUserImportJobResponse;
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
}
