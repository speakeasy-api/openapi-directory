import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopEdgePackagingJobXAmzTargetEnum {
    SageMakerStopEdgePackagingJob = "SageMaker.StopEdgePackagingJob"
}
export declare class StopEdgePackagingJobRequest extends SpeakeasyBase {
    stopEdgePackagingJobRequest: shared.StopEdgePackagingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEdgePackagingJobXAmzTargetEnum;
}
export declare class StopEdgePackagingJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
