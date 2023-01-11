import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ApiInfo } from "./apiinfo";
import { Authentication } from "./authentication";
import { ContainerGroups } from "./containergroups";
import { FileShares } from "./fileshares";
import { Images } from "./images";
import { PrivateDockerImagesRegistry } from "./privatedockerimagesregistry";
import { PublicIpAddresses } from "./publicipaddresses";
import { Quota } from "./quota";
import { SingleContainers } from "./singlecontainers";
import { Volumes } from "./volumes";


export const ServerList = [
	"https://containers-api.ng.bluemix.net/v3",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public apiInfo: ApiInfo;
  public authentication: Authentication;
  public containerGroups: ContainerGroups;
  public fileShares: FileShares;
  public images: Images;
  public privateDockerImagesRegistry: PrivateDockerImagesRegistry;
  public publicIPAddresses: PublicIpAddresses;
  public quota: Quota;
  public singleContainers: SingleContainers;
  public volumes: Volumes;

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
    
    this.apiInfo = new ApiInfo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.authentication = new Authentication(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.containerGroups = new ContainerGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fileShares = new FileShares(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.images = new Images(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.privateDockerImagesRegistry = new PrivateDockerImagesRegistry(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.publicIPAddresses = new PublicIpAddresses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quota = new Quota(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.singleContainers = new SingleContainers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.volumes = new Volumes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}