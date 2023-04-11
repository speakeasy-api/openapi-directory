import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBatchPredictionXAmzTargetEnum {
    AmazonML20141212CreateBatchPrediction = "AmazonML_20141212.CreateBatchPrediction"
}
export declare class CreateBatchPredictionRequest extends SpeakeasyBase {
    createBatchPredictionInput: shared.CreateBatchPredictionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBatchPredictionXAmzTargetEnum;
}
export declare class CreateBatchPredictionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createBatchPredictionOutput?: shared.CreateBatchPredictionOutput;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
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
}
