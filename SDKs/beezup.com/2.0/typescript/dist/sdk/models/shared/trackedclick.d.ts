import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { BeezUPCommonProductBasicInfo } from "./beezupcommonproductbasicinfo";
export declare class TrackedClick extends SpeakeasyBase {
    /**
     * The basic info related to a channel
     */
    channel: BeezUPCommonChannelBasicInfo;
    /**
     * The user IP address for the click
     */
    ipAddress: string;
    /**
     * The basic information related to a product
     */
    product: BeezUPCommonProductBasicInfo;
    /**
     * The utc date of the click
     */
    utcDate: Date;
}
