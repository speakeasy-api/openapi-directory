import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AnalyzeIDXAmzTargetEnum {
    TextractAnalyzeID = "Textract.AnalyzeID"
}
export declare class AnalyzeIDRequest extends SpeakeasyBase {
    analyzeIDRequest: shared.AnalyzeIDRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AnalyzeIDXAmzTargetEnum;
}
export declare class AnalyzeIDResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    analyzeIDResponse?: shared.AnalyzeIDResponse;
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
