import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMLModelXAmzTargetEnum {
    AmazonML20141212UpdateMLModel = "AmazonML_20141212.UpdateMLModel"
}
export declare class UpdateMLModelRequest extends SpeakeasyBase {
    updateMLModelInput: shared.UpdateMLModelInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMLModelXAmzTargetEnum;
}
export declare class UpdateMLModelResponse extends SpeakeasyBase {
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
    updateMLModelOutput?: shared.UpdateMLModelOutput;
}
