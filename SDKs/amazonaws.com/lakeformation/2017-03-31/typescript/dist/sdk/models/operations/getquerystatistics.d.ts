import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQueryStatisticsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the plan query operation.
     */
    queryId: string;
}
export declare class GetQueryStatisticsRequest extends SpeakeasyBase {
    requestBody: GetQueryStatisticsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetQueryStatisticsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * ExpiredException
     */
    expiredException?: any;
    /**
     * Success
     */
    getQueryStatisticsResponse?: shared.GetQueryStatisticsResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * StatisticsNotReadyYetException
     */
    statisticsNotReadyYetException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
