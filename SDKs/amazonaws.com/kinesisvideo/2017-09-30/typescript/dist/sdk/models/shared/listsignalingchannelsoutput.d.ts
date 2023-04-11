import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelInfo } from "./channelinfo";
/**
 * Success
 */
export declare class ListSignalingChannelsOutput extends SpeakeasyBase {
    channelInfoList?: ChannelInfo[];
    nextToken?: string;
}
