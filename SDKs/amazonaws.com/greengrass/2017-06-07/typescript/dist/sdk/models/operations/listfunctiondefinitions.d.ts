import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFunctionDefinitionsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to be returned per request.
     */
    maxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listFunctionDefinitionsResponse?: shared.ListFunctionDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
