import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateBatchPredictionXAmzTargetEnum {
    AmazonML20141212UpdateBatchPrediction = "AmazonML_20141212.UpdateBatchPrediction"
}
export declare class UpdateBatchPredictionRequest extends SpeakeasyBase {
    updateBatchPredictionInput: shared.UpdateBatchPredictionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBatchPredictionXAmzTargetEnum;
}
export declare class UpdateBatchPredictionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateBatchPredictionOutput?: shared.UpdateBatchPredictionOutput;
}
