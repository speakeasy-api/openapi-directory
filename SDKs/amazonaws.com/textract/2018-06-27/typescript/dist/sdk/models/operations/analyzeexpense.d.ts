import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AnalyzeExpenseXAmzTargetEnum {
    TextractAnalyzeExpense = "Textract.AnalyzeExpense"
}
export declare class AnalyzeExpenseRequest extends SpeakeasyBase {
    analyzeExpenseRequest: shared.AnalyzeExpenseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AnalyzeExpenseXAmzTargetEnum;
}
export declare class AnalyzeExpenseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    analyzeExpenseResponse?: shared.AnalyzeExpenseResponse;
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
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidS3ObjectException
     */
    invalidS3ObjectException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
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
