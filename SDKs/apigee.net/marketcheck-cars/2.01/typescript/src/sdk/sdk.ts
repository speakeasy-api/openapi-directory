import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { CrmCleanseApi } from "./crmcleanseapi";
import { CarCachedImage } from "./carcachedimage";
import { CarSearch } from "./carsearch";
import { CarsHistoryApi } from "./carshistoryapi";
import { CarsMarketApi } from "./carsmarketapi";
import { DealerApi } from "./dealerapi";
import { HeavyEquipmentSearch } from "./heavyequipmentsearch";
import { MotorcycleSearch } from "./motorcyclesearch";
import { OemIncentiveSearch } from "./oemincentivesearch";
import { RvSearch } from "./rvsearch";
import { RankCarListings } from "./rankcarlistings";
import { RecallSearch } from "./recallsearch";
import { VinDecoderApi } from "./vindecoderapi";


export const ServerList = [
	"https://marketcheck-prod.apigee.net/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public crmCleanseAPI: CrmCleanseApi;
  public carCachedImage: CarCachedImage;
  public carSearch: CarSearch;
  public carsHistoryAPI: CarsHistoryApi;
  public carsMarketAPI: CarsMarketApi;
  public dealerAPI: DealerApi;
  public heavyEquipmentSearch: HeavyEquipmentSearch;
  public motorcycleSearch: MotorcycleSearch;
  public oemIncentiveSearch: OemIncentiveSearch;
  public rvSearch: RvSearch;
  public rankCarListings: RankCarListings;
  public recallSearch: RecallSearch;
  public vinDecoderAPI: VinDecoderApi;

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
    
    this.crmCleanseAPI = new CrmCleanseApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.carCachedImage = new CarCachedImage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.carSearch = new CarSearch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.carsHistoryAPI = new CarsHistoryApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.carsMarketAPI = new CarsMarketApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dealerAPI = new DealerApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.heavyEquipmentSearch = new HeavyEquipmentSearch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.motorcycleSearch = new MotorcycleSearch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oemIncentiveSearch = new OemIncentiveSearch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rvSearch = new RvSearch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rankCarListings = new RankCarListings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.recallSearch = new RecallSearch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vinDecoderAPI = new VinDecoderApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}