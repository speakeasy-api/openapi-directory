import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCodeRepositoryXAmzTargetEnum {
    SageMakerDeleteCodeRepository = "SageMaker.DeleteCodeRepository"
}
export declare class DeleteCodeRepositoryRequest extends SpeakeasyBase {
    deleteCodeRepositoryInput: shared.DeleteCodeRepositoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCodeRepositoryXAmzTargetEnum;
}
export declare class DeleteCodeRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
