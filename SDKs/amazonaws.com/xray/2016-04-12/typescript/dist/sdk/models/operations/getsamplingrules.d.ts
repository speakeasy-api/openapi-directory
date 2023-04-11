import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSamplingRulesRequestBody extends SpeakeasyBase {
    /**
     * Pagination token.
     */
    nextToken?: string;
}
export declare class GetSamplingRulesRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetSamplingRulesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSamplingRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSamplingRulesResult?: shared.GetSamplingRulesResult;
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
