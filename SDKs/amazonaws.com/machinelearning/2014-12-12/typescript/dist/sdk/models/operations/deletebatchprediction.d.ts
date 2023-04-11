import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBatchPredictionXAmzTargetEnum {
    AmazonML20141212DeleteBatchPrediction = "AmazonML_20141212.DeleteBatchPrediction"
}
export declare class DeleteBatchPredictionRequest extends SpeakeasyBase {
    deleteBatchPredictionInput: shared.DeleteBatchPredictionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBatchPredictionXAmzTargetEnum;
}
export declare class DeleteBatchPredictionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteBatchPredictionOutput?: shared.DeleteBatchPredictionOutput;
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
