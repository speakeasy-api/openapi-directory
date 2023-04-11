import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateItemPriceMarkdownPromotionRequest extends SpeakeasyBase {
    /**
     * This type defines the fields that describe an item price markdown promotion.
     */
    itemPriceMarkdown?: shared.ItemPriceMarkdown;
    /**
     * This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
     */
    promotionId: string;
}
export declare class UpdateItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateItemPriceMarkdownPromotion200ApplicationJSONObject?: Record<string, any>;
}
