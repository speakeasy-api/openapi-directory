import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateJobXAmzTargetEnum {
    AWSIESnowballJobManagementServiceUpdateJob = "AWSIESnowballJobManagementService.UpdateJob"
}
export declare class UpdateJobRequest extends SpeakeasyBase {
    updateJobRequest: shared.UpdateJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateJobXAmzTargetEnum;
}
export declare class UpdateJobResponse extends SpeakeasyBase {
    /**
     * ClusterLimitExceededException
     */
    clusterLimitExceededException?: any;
    contentType: string;
    /**
     * Ec2RequestFailedException
     */
    ec2RequestFailedException?: any;
    /**
     * InvalidInputCombinationException
     */
    invalidInputCombinationException?: any;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
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
    /**
     * Success
     */
    updateJobResult?: Record<string, any>;
}
