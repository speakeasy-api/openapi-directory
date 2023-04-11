import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCodeRepositoryXAmzTargetEnum {
    SageMakerUpdateCodeRepository = "SageMaker.UpdateCodeRepository"
}
export declare class UpdateCodeRepositoryRequest extends SpeakeasyBase {
    updateCodeRepositoryInput: shared.UpdateCodeRepositoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCodeRepositoryXAmzTargetEnum;
}
export declare class UpdateCodeRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCodeRepositoryOutput?: shared.UpdateCodeRepositoryOutput;
}
