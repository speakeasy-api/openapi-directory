import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetBatchPredictionXAmzTargetEnum {
    AmazonML20141212GetBatchPrediction = "AmazonML_20141212.GetBatchPrediction"
}
export declare class GetBatchPredictionRequest extends SpeakeasyBase {
    getBatchPredictionInput: shared.GetBatchPredictionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBatchPredictionXAmzTargetEnum;
}
export declare class GetBatchPredictionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBatchPredictionOutput?: shared.GetBatchPredictionOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
