import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetServiceGraphRequestBody extends SpeakeasyBase {
    /**
     * The end of the timeframe for which to generate a graph.
     */
    endTime: Date;
    /**
     * The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.
     */
    groupARN?: string;
    /**
     * The name of a group based on which you want to generate a graph.
     */
    groupName?: string;
    /**
     * Pagination token.
     */
    nextToken?: string;
    /**
     * The start of the time frame for which to generate a graph.
     */
    startTime: Date;
}
export declare class GetServiceGraphRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetServiceGraphRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetServiceGraphResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getServiceGraphResult?: shared.GetServiceGraphResult;
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
