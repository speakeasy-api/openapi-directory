import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AppPkgm } from "./apppkgm";
import { AppPkgmNotifications } from "./apppkgmnotifications";


export const ServerList = [
	"http://etsi.local",
	"https://localhost/app_pkgm/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://www.etsi.org/deliver/etsi_gs/MEC/001_099/01002/02.01.01_60/gs_MEC01002v020101p.pdf - ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management, v2.1.1*/
export class SDK {
  public appPkgm: AppPkgm;
  public appPkgmNotifications: AppPkgmNotifications;

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
    
    this.appPkgm = new AppPkgm(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.appPkgmNotifications = new AppPkgmNotifications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}