import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLanguageModelXAmzTargetEnum {
    TranscribeDeleteLanguageModel = "Transcribe.DeleteLanguageModel"
}
export declare class DeleteLanguageModelRequest extends SpeakeasyBase {
    deleteLanguageModelRequest: shared.DeleteLanguageModelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLanguageModelXAmzTargetEnum;
}
export declare class DeleteLanguageModelResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
