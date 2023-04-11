import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
export declare class ReportByDayByChannel extends SpeakeasyBase {
    /**
     * The basic info related to a channel
     */
    channel: BeezUPCommonChannelBasicInfo;
    /**
     * The click count
     */
    clickCount: number;
    /**
     * The cost
     */
    cost: number;
    /**
     * The margin
     */
    margin: number;
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
    roi: number;
    /**
     * The product sold count count
     */
    soldProductCount: number;
    /**
     * The total sales
     */
    totalSales: number;
}
