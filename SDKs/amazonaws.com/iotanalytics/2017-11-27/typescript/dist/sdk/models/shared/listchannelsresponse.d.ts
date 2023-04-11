import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSummary } from "./channelsummary";
/**
 * Success
 */
export declare class ListChannelsResponse extends SpeakeasyBase {
    channelSummaries?: ChannelSummary[];
    nextToken?: string;
}
