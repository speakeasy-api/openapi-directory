import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelStatus } from "./channelstatus";
export declare class ChannelDetails extends SpeakeasyBase {
    channelId: string;
    isGlobalMaster?: boolean;
    region?: string;
    status?: ChannelStatus;
}
