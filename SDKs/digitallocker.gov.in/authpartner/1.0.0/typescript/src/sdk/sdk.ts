import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AccountDetailApi } from "./accountdetailapi";
import { Authorization } from "./authorization";
import { AuthorizationApi } from "./authorizationapi";
import { DigiLockerMetaApIs } from "./digilockermetaapis";
import { DigiLockerSignUpApIs } from "./digilockersignupapis";
import { FileApIs } from "./fileapis";
import { TokenRevocationApi } from "./tokenrevocationapi";


export const ServerList = [
	"https://betaapi.digitallocker.gov.in/public",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public accountDetailAPI: AccountDetailApi;
  public authorization: Authorization;
  public authorizationAPI: AuthorizationApi;
  public digiLockerMetaAPIs: DigiLockerMetaApIs;
  public digiLockerSignUpAPIs: DigiLockerSignUpApIs;
  public fileAPIs: FileApIs;
  public tokenRevocationAPI: TokenRevocationApi;

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
    
    this.accountDetailAPI = new AccountDetailApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.authorization = new Authorization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.authorizationAPI = new AuthorizationApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.digiLockerMetaAPIs = new DigiLockerMetaApIs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.digiLockerSignUpAPIs = new DigiLockerSignUpApIs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fileAPIs = new FileApIs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tokenRevocationAPI = new TokenRevocationApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}