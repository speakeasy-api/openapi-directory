import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByProductAllChannelsLinks } from "./reportbyproductallchannelslinks";
import { ReportByProductOneChannelLinks } from "./reportbyproductonechannellinks";
/**
 * Depending if the report concerned multiple channels or one channel.
**/
export declare class ReportByProductLinks extends SpeakeasyBase {
    allChannelsLinks?: ReportByProductAllChannelsLinks;
    oneChannelLinks?: ReportByProductOneChannelLinks;
}
