import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopLabelingJobXAmzTargetEnum {
    SageMakerStopLabelingJob = "SageMaker.StopLabelingJob"
}
export declare class StopLabelingJobRequest extends SpeakeasyBase {
    stopLabelingJobRequest: shared.StopLabelingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopLabelingJobXAmzTargetEnum;
}
export declare class StopLabelingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
