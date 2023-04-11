import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateModelXAmzTargetEnum {
    SageMakerCreateModel = "SageMaker.CreateModel"
}
export declare class CreateModelRequest extends SpeakeasyBase {
    createModelInput: shared.CreateModelInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelXAmzTargetEnum;
}
export declare class CreateModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createModelOutput?: shared.CreateModelOutput;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
