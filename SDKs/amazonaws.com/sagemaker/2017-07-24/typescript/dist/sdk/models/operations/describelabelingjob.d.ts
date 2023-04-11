import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLabelingJobXAmzTargetEnum {
    SageMakerDescribeLabelingJob = "SageMaker.DescribeLabelingJob"
}
export declare class DescribeLabelingJobRequest extends SpeakeasyBase {
    describeLabelingJobRequest: shared.DescribeLabelingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLabelingJobXAmzTargetEnum;
}
export declare class DescribeLabelingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLabelingJobResponse?: shared.DescribeLabelingJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
