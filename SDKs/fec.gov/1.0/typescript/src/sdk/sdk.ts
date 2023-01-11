import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Audit } from "./audit";
import { Candidate } from "./candidate";
import { Committee } from "./committee";
import { CommunicationCost } from "./communicationcost";
import { Dates } from "./dates";
import { Debts } from "./debts";
import { Disbursements } from "./disbursements";
import { Efiling } from "./efiling";
import { Electioneering } from "./electioneering";
import { FilerResources } from "./filerresources";
import { Filings } from "./filings";
import { Financial } from "./financial";
import { IndependentExpenditures } from "./independentexpenditures";
import { Legal } from "./legal";
import { Loans } from "./loans";
import { PartyCoordinatedExpenditures } from "./partycoordinatedexpenditures";
import { Presidential } from "./presidential";
import { Receipts } from "./receipts";
import { Search } from "./search";


export const ServerList = [
	"https://fec.gov/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public audit: Audit;
  public candidate: Candidate;
  public committee: Committee;
  public communicationCost: CommunicationCost;
  public dates: Dates;
  public debts: Debts;
  public disbursements: Disbursements;
  public efiling: Efiling;
  public electioneering: Electioneering;
  public filerResources: FilerResources;
  public filings: Filings;
  public financial: Financial;
  public independentExpenditures: IndependentExpenditures;
  public legal: Legal;
  public loans: Loans;
  public partyCoordinatedExpenditures: PartyCoordinatedExpenditures;
  public presidential: Presidential;
  public receipts: Receipts;
  public search: Search;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.audit = new Audit(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.candidate = new Candidate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.committee = new Committee(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.communicationCost = new CommunicationCost(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dates = new Dates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.debts = new Debts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.disbursements = new Disbursements(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.efiling = new Efiling(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.electioneering = new Electioneering(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.filerResources = new FilerResources(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.filings = new Filings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.financial = new Financial(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.independentExpenditures = new IndependentExpenditures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.legal = new Legal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.loans = new Loans(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.partyCoordinatedExpenditures = new PartyCoordinatedExpenditures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.presidential = new Presidential(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.receipts = new Receipts(
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
  }
}