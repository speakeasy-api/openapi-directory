import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

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


export const ServerList = [
	"https://api.ebay.com{basePath}",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public ad: Ad;
  public adReport: AdReport;
  public adReportMetadata: AdReportMetadata;
  public adReportTask: AdReportTask;
  public campaign: Campaign;
  public itemPriceMarkdown: ItemPriceMarkdown;
  public itemPromotion: ItemPromotion;
  public promotion: Promotion;
  public promotionReport: PromotionReport;
  public promotionSummaryReport: PromotionSummaryReport;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.ad = new Ad(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.adReport = new AdReport(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.adReportMetadata = new AdReportMetadata(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.adReportTask = new AdReportTask(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.campaign = new Campaign(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.itemPriceMarkdown = new ItemPriceMarkdown(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.itemPromotion = new ItemPromotion(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.promotion = new Promotion(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.promotionReport = new PromotionReport(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.promotionSummaryReport = new PromotionSummaryReport(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}