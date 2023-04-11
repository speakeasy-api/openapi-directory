import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetExpenseAnalysisXAmzTargetEnum {
    TextractGetExpenseAnalysis = "Textract.GetExpenseAnalysis"
}
export declare class GetExpenseAnalysisRequest extends SpeakeasyBase {
    getExpenseAnalysisRequest: shared.GetExpenseAnalysisRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetExpenseAnalysisXAmzTargetEnum;
}
export declare class GetExpenseAnalysisResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getExpenseAnalysisResponse?: shared.GetExpenseAnalysisResponse;
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
