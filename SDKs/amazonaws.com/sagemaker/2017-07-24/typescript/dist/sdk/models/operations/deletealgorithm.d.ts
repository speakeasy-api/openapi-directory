import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAlgorithmXAmzTargetEnum {
    SageMakerDeleteAlgorithm = "SageMaker.DeleteAlgorithm"
}
export declare class DeleteAlgorithmRequest extends SpeakeasyBase {
    deleteAlgorithmInput: shared.DeleteAlgorithmInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAlgorithmXAmzTargetEnum;
}
export declare class DeleteAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
