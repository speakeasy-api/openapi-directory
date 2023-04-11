import { Ad } from "./ad";
import { AdGroup } from "./adgroup";
import { AdReport } from "./adreport";
import { AdReportMetadata } from "./adreportmetadata";
import { AdReportTask } from "./adreporttask";
import { Campaign } from "./campaign";
import { ItemPriceMarkdown } from "./itempricemarkdown";
import { ItemPromotion } from "./itempromotion";
import { Keyword } from "./keyword";
import { NegativeKeyword } from "./negativekeyword";
import { Promotion } from "./promotion";
import { PromotionReport } from "./promotionreport";
import { PromotionSummaryReport } from "./promotionsummaryreport";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>The <i>Marketing API </i> offers two platforms that sellers can use to promote and advertise their products:</p> <ul><li><b>Promoted Listings</b> is an eBay ad service that lets sellers set up <i>ad campaigns </i> for the products they want to promote. eBay displays the ads in search results and in other marketing modules as <b>SPONSORED</b> listings. If an item in a Promoted Listings campaign sells, the seller is assessed a Promoted Listings fee, which is a seller-specified percentage applied to the sales price. For complete details, refer to the <a href="/api-docs/sell/static/marketing/pl-landing.html">Promoted Listings playbook</a>.</li><li><b>Promotions Manager</b> gives sellers a way to offer discounts on specific items as a way to attract buyers to their inventory. Sellers can set up discounts (such as "20% off" and other types of offers) on specific items or on an entire customer order. To further attract buyers, eBay prominently displays promotion <i>teasers</i> throughout buyer flows. For complete details, see <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a>.</li></ul>  <p><b>Marketing reports</b>, on both the Promoted Listings and Promotions Manager platforms, give sellers information that shows the effectiveness of their marketing strategies. The data gives sellers the ability to review and fine tune their marketing efforts.</p> <p class="tablenote"><b>Important!</b> Sellers must have an active eBay Store subscription, and they must accept the <b>Terms and Conditions</b> before they can make requests to these APIs in the Production environment. There are also site-specific listings requirements and restrictions associated with these marketing tools, as listed in the "requirements and restrictions" sections for <a href="/api-docs/sell/marketing/static/overview.html#PL-requirements">Promoted Listings</a> and <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager</a>.</p> <p>The table below lists all the Marketing API calls grouped by resource.</p>
 */
export declare class SDK {
    ad: Ad;
    adGroup: AdGroup;
    adReport: AdReport;
    adReportMetadata: AdReportMetadata;
    adReportTask: AdReportTask;
    campaign: Campaign;
    itemPriceMarkdown: ItemPriceMarkdown;
    itemPromotion: ItemPromotion;
    keyword: Keyword;
    negativeKeyword: NegativeKeyword;
    promotion: Promotion;
    promotionReport: PromotionReport;
    promotionSummaryReport: PromotionSummaryReport;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
