import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAlgorithmXAmzTargetEnum {
    SageMakerCreateAlgorithm = "SageMaker.CreateAlgorithm"
}
export declare class CreateAlgorithmRequest extends SpeakeasyBase {
    createAlgorithmInput: shared.CreateAlgorithmInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAlgorithmXAmzTargetEnum;
}
export declare class CreateAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAlgorithmOutput?: shared.CreateAlgorithmOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
