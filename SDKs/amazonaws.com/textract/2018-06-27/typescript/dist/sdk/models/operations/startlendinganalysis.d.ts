import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartLendingAnalysisXAmzTargetEnum {
    TextractStartLendingAnalysis = "Textract.StartLendingAnalysis"
}
export declare class StartLendingAnalysisRequest extends SpeakeasyBase {
    startLendingAnalysisRequest: shared.StartLendingAnalysisRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartLendingAnalysisXAmzTargetEnum;
}
export declare class StartLendingAnalysisResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadDocumentException
     */
    badDocumentException?: any;
    contentType: string;
    /**
     * DocumentTooLargeException
     */
    documentTooLargeException?: any;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidKMSKeyException
     */
    invalidKMSKeyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidS3ObjectException
     */
    invalidS3ObjectException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * Success
     */
    startLendingAnalysisResponse?: shared.StartLendingAnalysisResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnsupportedDocumentException
     */
    unsupportedDocumentException?: any;
}
