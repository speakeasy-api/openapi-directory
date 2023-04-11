import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBatchInferenceJobXAmzTargetEnum {
    AmazonPersonalizeDescribeBatchInferenceJob = "AmazonPersonalize.DescribeBatchInferenceJob"
}
export declare class DescribeBatchInferenceJobRequest extends SpeakeasyBase {
    describeBatchInferenceJobRequest: shared.DescribeBatchInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBatchInferenceJobXAmzTargetEnum;
}
export declare class DescribeBatchInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeBatchInferenceJobResponse?: shared.DescribeBatchInferenceJobResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
