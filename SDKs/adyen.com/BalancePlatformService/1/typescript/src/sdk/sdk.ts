import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AccountHolders } from "./accountholders";
import { BalanceAccounts } from "./balanceaccounts";
import { Documents } from "./documents";
import { General } from "./general";
import { LegalEntities } from "./legalentities";
import { PaymentInstrumentGroups } from "./paymentinstrumentgroups";
import { PaymentInstruments } from "./paymentinstruments";
import { TransactionRules } from "./transactionrules";
import { TransferInstruments } from "./transferinstruments";


export const ServerList = [
	"https://balanceplatform-api-test.adyen.com/bcl/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public accountHolders: AccountHolders;
  public balanceAccounts: BalanceAccounts;
  public documents: Documents;
  public general: General;
  public legalEntities: LegalEntities;
  public paymentInstrumentGroups: PaymentInstrumentGroups;
  public paymentInstruments: PaymentInstruments;
  public transactionRules: TransactionRules;
  public transferInstruments: TransferInstruments;

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
    
    this.accountHolders = new AccountHolders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.balanceAccounts = new BalanceAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.documents = new Documents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.general = new General(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.legalEntities = new LegalEntities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentInstrumentGroups = new PaymentInstrumentGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentInstruments = new PaymentInstruments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transactionRules = new TransactionRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transferInstruments = new TransferInstruments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}