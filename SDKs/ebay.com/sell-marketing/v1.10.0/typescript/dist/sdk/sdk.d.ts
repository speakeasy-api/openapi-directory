import { AxiosInstance } from "axios";
import { Ad } from "./ad";
import { AdReport } from "./adreport";
import { AdReportMetadata } from "./adreportmetadata";
import { AdReportTask } from "./adreporttask";
import { Campaign } from "./campaign";
import { ItemPriceMarkdown } from "./itempricemarkdown";
import { ItemPromotion } from "./itempromotion";
import { Promotion } from "./promotion";
import { PromotionReport } from "./promotionreport";
import { PromotionSummaryReport } from "./promotionsummaryreport";
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    ad: Ad;
    adReport: AdReport;
    adReportMetadata: AdReportMetadata;
    adReportTask: AdReportTask;
    campaign: Campaign;
    itemPriceMarkdown: ItemPriceMarkdown;
    itemPromotion: ItemPromotion;
    promotion: Promotion;
    promotionReport: PromotionReport;
    promotionSummaryReport: PromotionSummaryReport;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
