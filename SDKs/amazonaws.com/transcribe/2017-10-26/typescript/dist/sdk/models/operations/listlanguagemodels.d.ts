import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLanguageModelsXAmzTargetEnum {
    TranscribeListLanguageModels = "Transcribe.ListLanguageModels"
}
export declare class ListLanguageModelsRequest extends SpeakeasyBase {
    listLanguageModelsRequest: shared.ListLanguageModelsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLanguageModelsXAmzTargetEnum;
}
export declare class ListLanguageModelsResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    listLanguageModelsResponse?: shared.ListLanguageModelsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
