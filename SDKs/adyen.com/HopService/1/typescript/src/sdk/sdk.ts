import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { HostedOnboardingPage } from "./hostedonboardingpage";
import { PciComplianceQuestionnairePage } from "./pcicompliancequestionnairepage";


export const ServerList = [
	"https://cal-test.adyen.com/cal/services/Hop/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public hostedOnboardingPage: HostedOnboardingPage;
  public pciComplianceQuestionnairePage: PciComplianceQuestionnairePage;

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
    
    this.hostedOnboardingPage = new HostedOnboardingPage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pciComplianceQuestionnairePage = new PciComplianceQuestionnairePage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}