import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetProductRequest extends SpeakeasyBase {
    /**
     * This method also uses the <code>X-EBAY-C-MARKETPLACE-ID</code> header to identify the seller's eBay marketplace. It is required for all marketplaces except EBAY_US, which is the default. <b>Note:</b> This method is limited to <code>EBAY_US</code>, <code>EBAY_AU</code>, <code>EBAY_CA</code>, and <code>EBAY_GB</code> values.
     */
    xEbayCMarketplaceId?: string;
    /**
     * The ePID of the product being requested. This value can be discovered by issuing the <b>search</b> method and examining the value of the <b>productSummaries.epid</b> field for the desired returned product summary.
     */
    epid: string;
}
export declare class GetProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    product?: shared.Product;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
