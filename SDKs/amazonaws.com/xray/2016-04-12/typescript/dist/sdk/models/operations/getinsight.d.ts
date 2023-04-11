import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInsightRequestBody extends SpeakeasyBase {
    /**
     * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
     */
    insightId: string;
}
export declare class GetInsightRequest extends SpeakeasyBase {
    requestBody: GetInsightRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInsightResult?: shared.GetInsightResult;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
