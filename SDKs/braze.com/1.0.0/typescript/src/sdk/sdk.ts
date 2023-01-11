import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Campaign } from "./campaign";
import { Canvas } from "./canvas";
import { ContentBlocks } from "./contentblocks";
import { CustomEvents } from "./customevents";
import { EmailListsAndAddresses } from "./emaillistsandaddresses";
import { EmailTemplates } from "./emailtemplates";
import { Export } from "./export";
import { Kpi } from "./kpi";
import { Messaging } from "./messaging";
import { NewsFeed } from "./newsfeed";
import { Sms } from "./sms";
import { ScheduleMesages } from "./schedulemesages";
import { Segment } from "./segment";
import { SessionAnalytics } from "./sessionanalytics";
import { SubscriptionGroups } from "./subscriptiongroups";
import { Templates } from "./templates";


export const ServerList = [
	"https://rest.iad-01.braze.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public campaign: Campaign;
  public canvas: Canvas;
  public contentBlocks: ContentBlocks;
  public customEvents: CustomEvents;
  public emailListsAndAddresses: EmailListsAndAddresses;
  public emailTemplates: EmailTemplates;
  public export: Export;
  public kpi: Kpi;
  public messaging: Messaging;
  public newsFeed: NewsFeed;
  public sms: Sms;
  public scheduleMesages: ScheduleMesages;
  public segment: Segment;
  public sessionAnalytics: SessionAnalytics;
  public subscriptionGroups: SubscriptionGroups;
  public templates: Templates;

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
    
    this.campaign = new Campaign(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.canvas = new Canvas(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contentBlocks = new ContentBlocks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customEvents = new CustomEvents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.emailListsAndAddresses = new EmailListsAndAddresses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.emailTemplates = new EmailTemplates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.export = new Export(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.kpi = new Kpi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.messaging = new Messaging(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.newsFeed = new NewsFeed(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sms = new Sms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.scheduleMesages = new ScheduleMesages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.segment = new Segment(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sessionAnalytics = new SessionAnalytics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscriptionGroups = new SubscriptionGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.templates = new Templates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}