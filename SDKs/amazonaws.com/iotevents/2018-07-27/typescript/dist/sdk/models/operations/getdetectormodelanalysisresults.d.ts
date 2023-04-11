import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDetectorModelAnalysisResultsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the analysis result that you want to retrieve.
     */
    analysisId: string;
    /**
     * The maximum number of results to be returned per request.
     */
    maxResults?: number;
    /**
     * The token that you can use to return the next set of results.
     */
    nextToken?: string;
}
export declare class GetDetectorModelAnalysisResultsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDetectorModelAnalysisResultsResponse?: shared.GetDetectorModelAnalysisResultsResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
