import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDocumentAnalysisXAmzTargetEnum {
    TextractGetDocumentAnalysis = "Textract.GetDocumentAnalysis"
}
export declare class GetDocumentAnalysisRequest extends SpeakeasyBase {
    getDocumentAnalysisRequest: shared.GetDocumentAnalysisRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDocumentAnalysisXAmzTargetEnum;
}
export declare class GetDocumentAnalysisResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getDocumentAnalysisResponse?: shared.GetDocumentAnalysisResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidJobIdException
     */
    invalidJobIdException?: any;
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
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
