import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDetectSyntaxXAmzTargetEnum {
    Comprehend20171127BatchDetectSyntax = "Comprehend_20171127.BatchDetectSyntax"
}
export declare class BatchDetectSyntaxRequest extends SpeakeasyBase {
    batchDetectSyntaxRequest: shared.BatchDetectSyntaxRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectSyntaxXAmzTargetEnum;
}
export declare class BatchDetectSyntaxResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDetectSyntaxResponse?: shared.BatchDetectSyntaxResponse;
    /**
     * BatchSizeLimitExceededException
     */
    batchSizeLimitExceededException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TextSizeLimitExceededException
     */
    textSizeLimitExceededException?: any;
    /**
     * UnsupportedLanguageException
     */
    unsupportedLanguageException?: any;
}
