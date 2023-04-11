import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type defines the fields in a promotion-level report.
 */
export declare class PromotionReportDetail extends SpeakeasyBase {
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    averageItemDiscount?: Amount;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    averageItemRevenue?: Amount;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    averageOrderDiscount?: Amount;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    averageOrderRevenue?: Amount;
    /**
     * The <i>average order size</i> is the average number of items that each order contained in a promotion. This value is calculated as follows:  <br><br><b>itemsSoldQuantity</b> / <b>numberOfOrdersSold</b> = <b>averageOrderSize</b>
     */
    averageOrderSize?: string;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    baseSale?: Amount;
    /**
     * This is the quantity of items purchased in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your number of items sold (<b>itemsSoldQuantity</b>) would be 2 and you number of orders sold (<b>numberOfOrdersSold</b>) would be 1.
     */
    itemsSoldQuantity?: number;
    /**
     * This is the number of orders sold in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>numberOfOrdersSold</b> would be 1 and your <b>itemsSoldQuantity</b> would be 2.
     */
    numberOfOrdersSold?: number;
    /**
     * The <i>percentage sales lift</i> is the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br> <b>promotionSale</b> / <b>totalSale</b> =  <b>percentageSalesLift</b>
     */
    percentageSalesLift?: string;
    /**
     * The URI of the promotion report.
     */
    promotionHref?: string;
    /**
     * A unique eBay-assigned ID for the promotion that's generated when the promotion is created.
     */
    promotionId?: string;
    /**
     * The unique eBay-assigned ID of the promotion report that is generated when the report is created.
     */
    promotionReportId?: string;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    promotionSale?: Amount;
    /**
     * Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a>
     */
    promotionType?: string;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    totalDiscount?: Amount;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    totalSale?: Amount;
}
