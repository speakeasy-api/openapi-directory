import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.
 */
export declare class ListStreamsRequestBodyStreamNameCondition extends SpeakeasyBase {
    comparisonOperator?: shared.ComparisonOperatorEnum;
    comparisonValue?: string;
}
export declare class ListStreamsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of streams to return in the response. The default is 10,000.
     */
    maxResults?: number;
    /**
     * If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.
     */
    nextToken?: string;
    /**
     * Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.
     */
    streamNameCondition?: ListStreamsRequestBodyStreamNameCondition;
}
export declare class ListStreamsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListStreamsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamsResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * Success
     */
    listStreamsOutput?: shared.ListStreamsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
