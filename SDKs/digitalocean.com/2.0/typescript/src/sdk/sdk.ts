import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { OneClickApplications } from "./oneclickapplications";
import { Account } from "./account";
import { Actions } from "./actions";
import { Apps } from "./apps";
import { Billing } from "./billing";
import { BlockStorage } from "./blockstorage";
import { BlockStorageActions } from "./blockstorageactions";
import { CdnEndpoints } from "./cdnendpoints";
import { Certificates } from "./certificates";
import { ContainerRegistry } from "./containerregistry";
import { Databases } from "./databases";
import { DomainRecords } from "./domainrecords";
import { Domains } from "./domains";
import { DropletActions } from "./dropletactions";
import { Droplets } from "./droplets";
import { Firewalls } from "./firewalls";
import { FloatingIpActions } from "./floatingipactions";
import { FloatingIPs } from "./floatingips";
import { ImageActions } from "./imageactions";
import { Images } from "./images";
import { Kubernetes } from "./kubernetes";
import { LoadBalancers } from "./loadbalancers";
import { Monitoring } from "./monitoring";
import { ProjectResources } from "./projectresources";
import { Projects } from "./projects";
import { Regions } from "./regions";
import { SshKeys } from "./sshkeys";
import { Sizes } from "./sizes";
import { Snapshots } from "./snapshots";
import { Tags } from "./tags";
import { VpCs } from "./vpcs";


export const ServerList = [
	"https://api.digitalocean.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public oneClickApplications: OneClickApplications;
  public account: Account;
  public actions: Actions;
  public apps: Apps;
  public billing: Billing;
  public blockStorage: BlockStorage;
  public blockStorageActions: BlockStorageActions;
  public cdnEndpoints: CdnEndpoints;
  public certificates: Certificates;
  public containerRegistry: ContainerRegistry;
  public databases: Databases;
  public domainRecords: DomainRecords;
  public domains: Domains;
  public dropletActions: DropletActions;
  public droplets: Droplets;
  public firewalls: Firewalls;
  public floatingIPActions: FloatingIpActions;
  public floatingIPs: FloatingIPs;
  public imageActions: ImageActions;
  public images: Images;
  public kubernetes: Kubernetes;
  public loadBalancers: LoadBalancers;
  public monitoring: Monitoring;
  public projectResources: ProjectResources;
  public projects: Projects;
  public regions: Regions;
  public sshKeys: SshKeys;
  public sizes: Sizes;
  public snapshots: Snapshots;
  public tags: Tags;
  public vpCs: VpCs;

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
    
    this.oneClickApplications = new OneClickApplications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.account = new Account(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.actions = new Actions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.apps = new Apps(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billing = new Billing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.blockStorage = new BlockStorage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.blockStorageActions = new BlockStorageActions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cdnEndpoints = new CdnEndpoints(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.certificates = new Certificates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.containerRegistry = new ContainerRegistry(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.databases = new Databases(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.domainRecords = new DomainRecords(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.domains = new Domains(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dropletActions = new DropletActions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.droplets = new Droplets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.firewalls = new Firewalls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.floatingIPActions = new FloatingIpActions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.floatingIPs = new FloatingIPs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.imageActions = new ImageActions(
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
    
    this.kubernetes = new Kubernetes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.loadBalancers = new LoadBalancers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.monitoring = new Monitoring(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projectResources = new ProjectResources(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projects = new Projects(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.regions = new Regions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sshKeys = new SshKeys(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sizes = new Sizes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.snapshots = new Snapshots(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tags = new Tags(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vpCs = new VpCs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}