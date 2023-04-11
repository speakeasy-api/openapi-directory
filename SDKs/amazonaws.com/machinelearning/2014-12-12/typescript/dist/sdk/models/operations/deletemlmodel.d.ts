import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMLModelXAmzTargetEnum {
    AmazonML20141212DeleteMLModel = "AmazonML_20141212.DeleteMLModel"
}
export declare class DeleteMLModelRequest extends SpeakeasyBase {
    deleteMLModelInput: shared.DeleteMLModelInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMLModelXAmzTargetEnum;
}
export declare class DeleteMLModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteMLModelOutput?: shared.DeleteMLModelOutput;
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
