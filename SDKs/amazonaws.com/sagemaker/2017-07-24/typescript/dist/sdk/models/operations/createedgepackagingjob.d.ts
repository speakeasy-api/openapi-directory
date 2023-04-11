import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEdgePackagingJobXAmzTargetEnum {
    SageMakerCreateEdgePackagingJob = "SageMaker.CreateEdgePackagingJob"
}
export declare class CreateEdgePackagingJobRequest extends SpeakeasyBase {
    createEdgePackagingJobRequest: shared.CreateEdgePackagingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEdgePackagingJobXAmzTargetEnum;
}
export declare class CreateEdgePackagingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
