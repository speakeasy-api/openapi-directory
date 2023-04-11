import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { ReportByChannelLinks } from "./reportbychannellinks";
export declare class ReportByChannel extends SpeakeasyBase {
    /**
     * The catalog product count
     */
    catalogProductCount: number;
    /**
     * The basic info related to a channel
     */
    channel: BeezUPCommonChannelBasicInfo;
    /**
     * The click count
     */
    clickCount: number;
    /**
     * The cost for
     */
    cost: number;
    /**
     * The enabled product count
     */
    enabledProductCount: number;
    links: ReportByChannelLinks;
    /**
     * The margin
     */
    margin?: number;
    /**
     * The order count
     */
    orderCount: number;
    /**
     * The performance indicator based on the performance indicator formula indicated in the request
     */
    performanceIndicator: number;
    /**
     * The Return On Investment
     */
    roi?: number;
    /**
     * The product sold count count
     */
    soldProductCount: number;
    /**
     * The total sales
     */
    totalSales: number;
}
