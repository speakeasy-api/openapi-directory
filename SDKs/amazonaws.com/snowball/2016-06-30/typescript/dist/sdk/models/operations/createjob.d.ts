import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateJobXAmzTargetEnum {
    AWSIESnowballJobManagementServiceCreateJob = "AWSIESnowballJobManagementService.CreateJob"
}
export declare class CreateJobRequest extends SpeakeasyBase {
    createJobRequest: shared.CreateJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateJobXAmzTargetEnum;
}
export declare class CreateJobResponse extends SpeakeasyBase {
    /**
     * ClusterLimitExceededException
     */
    clusterLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    createJobResult?: shared.CreateJobResult;
    /**
     * Ec2RequestFailedException
     */
    ec2RequestFailedException?: any;
    /**
     * InvalidInputCombinationException
     */
    invalidInputCombinationException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    /**
     * KMSRequestFailedException
     */
    kmsRequestFailedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
