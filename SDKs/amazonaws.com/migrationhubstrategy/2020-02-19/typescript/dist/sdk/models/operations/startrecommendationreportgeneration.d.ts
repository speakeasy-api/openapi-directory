import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The output format for the recommendation report file. The default format is Microsoft Excel.
 */
export declare enum StartRecommendationReportGenerationRequestBodyOutputFormatEnum {
    Excel = "Excel",
    Json = "Json"
}
export declare class StartRecommendationReportGenerationRequestBody extends SpeakeasyBase {
    /**
     *  Groups the resources in the recommendation report with a unique name.
     */
    groupIdFilter?: shared.Group[];
    /**
     *  The output format for the recommendation report file. The default format is Microsoft Excel.
     */
    outputFormat?: StartRecommendationReportGenerationRequestBodyOutputFormatEnum;
}
export declare class StartRecommendationReportGenerationRequest extends SpeakeasyBase {
    requestBody: StartRecommendationReportGenerationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartRecommendationReportGenerationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    startRecommendationReportGenerationResponse?: shared.StartRecommendationReportGenerationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
