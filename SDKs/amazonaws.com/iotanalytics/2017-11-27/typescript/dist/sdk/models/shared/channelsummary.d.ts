import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelStatusEnum } from "./channelstatusenum";
import { ChannelStorageSummary } from "./channelstoragesummary";
/**
 * A summary of information about a channel.
 */
export declare class ChannelSummary extends SpeakeasyBase {
    channelName?: string;
    channelStorage?: ChannelStorageSummary;
    creationTime?: Date;
    lastMessageArrivalTime?: Date;
    lastUpdateTime?: Date;
    status?: ChannelStatusEnum;
}
