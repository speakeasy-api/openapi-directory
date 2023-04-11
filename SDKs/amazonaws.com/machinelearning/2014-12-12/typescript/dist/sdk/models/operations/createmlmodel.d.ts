import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMLModelXAmzTargetEnum {
    AmazonML20141212CreateMLModel = "AmazonML_20141212.CreateMLModel"
}
export declare class CreateMLModelRequest extends SpeakeasyBase {
    createMLModelInput: shared.CreateMLModelInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMLModelXAmzTargetEnum;
}
export declare class CreateMLModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMLModelOutput?: shared.CreateMLModelOutput;
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
