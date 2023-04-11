import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCodeRepositoryXAmzTargetEnum {
    SageMakerCreateCodeRepository = "SageMaker.CreateCodeRepository"
}
export declare class CreateCodeRepositoryRequest extends SpeakeasyBase {
    createCodeRepositoryInput: shared.CreateCodeRepositoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCodeRepositoryXAmzTargetEnum;
}
export declare class CreateCodeRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCodeRepositoryOutput?: shared.CreateCodeRepositoryOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
