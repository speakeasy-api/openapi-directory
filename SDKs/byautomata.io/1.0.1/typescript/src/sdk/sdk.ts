import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ContentproSearch } from "./contentprosearch";
import { ContentproSimilarText } from "./contentprosimilartext";
import { Search } from "./search";
import { Similar } from "./similar";


export const ServerList = [
	"https://api.byautomata.io",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: http://byautomata.io - Find out more about Automata and other Market Intelligence products.*/
export class SDK {
  public contentproSearch: ContentproSearch;
  public contentproSimilarText: ContentproSimilarText;
  public search: Search;
  public similar: Similar;

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
    
    this.contentproSearch = new ContentproSearch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contentproSimilarText = new ContentproSimilarText(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.search = new Search(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.similar = new Similar(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}