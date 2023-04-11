import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
 */
export declare class ListSignalingChannelsRequestBodyChannelNameCondition extends SpeakeasyBase {
    comparisonOperator?: shared.ComparisonOperatorEnum;
    comparisonValue?: string;
}
export declare class ListSignalingChannelsRequestBody extends SpeakeasyBase {
    /**
     * An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
     */
    channelNameCondition?: ListSignalingChannelsRequestBodyChannelNameCondition;
    /**
     * The maximum number of channels to return in the response. The default is 500.
     */
    maxResults?: number;
    /**
     * If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.
     */
    nextToken?: string;
}
export declare class ListSignalingChannelsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListSignalingChannelsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSignalingChannelsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    listSignalingChannelsOutput?: shared.ListSignalingChannelsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
