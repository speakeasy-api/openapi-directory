import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByProductAllChannelsLinks } from "./reportbyproductallchannelslinks";
import { ReportByProductOneChannelLinks } from "./reportbyproductonechannellinks";
/**
 * Depending if the report concerned multiple channels or one channel.
 */
export declare class ReportByProductLinks extends SpeakeasyBase {
    allChannelsLinks?: ReportByProductAllChannelsLinks;
    /**
     * If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.
     */
    oneChannelLinks?: ReportByProductOneChannelLinks;
}
