import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonProductBasicInfo } from "./beezupcommonproductbasicinfo";
import { ReportByProductLinks } from "./reportbyproductlinks";
export declare class ReportByProduct extends SpeakeasyBase {
    /**
     * The channel count where this product can be enabled
     */
    channelCount: number;
    /**
     * The click count for this product
     */
    clickCount: number;
    /**
     * The cost for this product
     */
    cost: number;
    /**
     * The count of channel where this product is enabled
     */
    enabledOnChannelCount: number;
    /**
     * Depending if the report concerned multiple channels or one channel.
     */
    links: ReportByProductLinks;
    /**
     * The margin for this product
     */
    margin?: number;
    /**
     * The order count for this product
     */
    orderCount: number;
    /**
     * The performance indicator based on the performance indicator formula indicated in the request for this product
     */
    performanceIndicator: number;
    /**
     * The basic information related to a product
     */
    product: BeezUPCommonProductBasicInfo;
    /**
     * The Return On Investment for this product
     */
    roi?: number;
    /**
     * The product sold count count for this product
     */
    soldProductCount: number;
    /**
     * The total sales for this product
     */
    totalSales: number;
}
