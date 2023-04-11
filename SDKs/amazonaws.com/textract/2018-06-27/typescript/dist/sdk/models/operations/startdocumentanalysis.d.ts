import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartDocumentAnalysisXAmzTargetEnum {
    TextractStartDocumentAnalysis = "Textract.StartDocumentAnalysis"
}
export declare class StartDocumentAnalysisRequest extends SpeakeasyBase {
    startDocumentAnalysisRequest: shared.StartDocumentAnalysisRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDocumentAnalysisXAmzTargetEnum;
}
export declare class StartDocumentAnalysisResponse extends SpeakeasyBase {
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
    startDocumentAnalysisResponse?: shared.StartDocumentAnalysisResponse;
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
