import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPromotionSummaryReportSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetPromotionSummaryReportRequest extends SpeakeasyBase {
    /**
     * The eBay marketplace ID of the site you for which you want a promotion summary report.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>
     */
    marketplaceId: string;
}
export declare class GetPromotionSummaryReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    summaryReportResponse?: shared.SummaryReportResponse;
}
