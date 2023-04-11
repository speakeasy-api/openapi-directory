import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteModelXAmzTargetEnum {
    SageMakerDeleteModel = "SageMaker.DeleteModel"
}
export declare class DeleteModelRequest extends SpeakeasyBase {
    deleteModelInput: shared.DeleteModelInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelXAmzTargetEnum;
}
export declare class DeleteModelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
