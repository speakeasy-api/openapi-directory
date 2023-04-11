import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMLModelXAmzTargetEnum {
    AmazonML20141212GetMLModel = "AmazonML_20141212.GetMLModel"
}
export declare class GetMLModelRequest extends SpeakeasyBase {
    getMLModelInput: shared.GetMLModelInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMLModelXAmzTargetEnum;
}
export declare class GetMLModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getMLModelOutput?: shared.GetMLModelOutput;
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
