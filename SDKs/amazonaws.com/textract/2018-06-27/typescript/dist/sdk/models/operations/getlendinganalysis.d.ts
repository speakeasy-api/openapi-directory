import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLendingAnalysisXAmzTargetEnum {
    TextractGetLendingAnalysis = "Textract.GetLendingAnalysis"
}
export declare class GetLendingAnalysisRequest extends SpeakeasyBase {
    getLendingAnalysisRequest: shared.GetLendingAnalysisRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLendingAnalysisXAmzTargetEnum;
}
export declare class GetLendingAnalysisResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getLendingAnalysisResponse?: shared.GetLendingAnalysisResponse;
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
