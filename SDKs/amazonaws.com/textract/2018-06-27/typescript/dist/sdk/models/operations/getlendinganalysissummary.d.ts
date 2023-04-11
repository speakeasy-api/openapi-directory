import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLendingAnalysisSummaryXAmzTargetEnum {
    TextractGetLendingAnalysisSummary = "Textract.GetLendingAnalysisSummary"
}
export declare class GetLendingAnalysisSummaryRequest extends SpeakeasyBase {
    getLendingAnalysisSummaryRequest: shared.GetLendingAnalysisSummaryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLendingAnalysisSummaryXAmzTargetEnum;
}
export declare class GetLendingAnalysisSummaryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getLendingAnalysisSummaryResponse?: shared.GetLendingAnalysisSummaryResponse;
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
