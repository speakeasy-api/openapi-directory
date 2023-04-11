import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSamplingStatisticSummariesRequestBody extends SpeakeasyBase {
    /**
     * Pagination token.
     */
    nextToken?: string;
}
export declare class GetSamplingStatisticSummariesRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetSamplingStatisticSummariesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSamplingStatisticSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSamplingStatisticSummariesResult?: shared.GetSamplingStatisticSummariesResult;
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
