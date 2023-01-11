import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { FactOfTheDay } from "./factoftheday";
import { NumberFacts } from "./numberfacts";
import { OnThisDay } from "./onthisday";
import { PrivateFacts } from "./privatefacts";
import { RandomFacts } from "./randomfacts";


export const ServerList = [
	"https://api.fungenerators.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public factOfTheDay: FactOfTheDay;
  public numberFacts: NumberFacts;
  public onThisDay: OnThisDay;
  public privateFacts: PrivateFacts;
  public randomFacts: RandomFacts;

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
    
    this.factOfTheDay = new FactOfTheDay(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.numberFacts = new NumberFacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.onThisDay = new OnThisDay(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.privateFacts = new PrivateFacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.randomFacts = new RandomFacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}