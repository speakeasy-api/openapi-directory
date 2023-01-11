import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { AuditLogs } from "./auditlogs";
import { Configs } from "./configs";
import { Environments } from "./environments";
import { FeatureFlagAndSettingValues } from "./featureflagandsettingvalues";
import { FeatureFlagAndSettingValuesUsingSDKKey } from "./featureflagandsettingvaluesusingsdkkey";
import { FeatureFlagsAndSettings } from "./featureflagsandsettings";
import { IntegrationLinks } from "./integrationlinks";
import { Me } from "./me";
import { Members } from "./members";
import { Organizations } from "./organizations";
import { PermissionGroups } from "./permissiongroups";
import { Products } from "./products";
import { SDKKeys } from "./sdkkeys";
import { Tags } from "./tags";


export const ServerList = [
	"https://api.configcat.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public auditLogs: AuditLogs;
  public configs: Configs;
  public environments: Environments;
  public featureFlagAndSettingValues: FeatureFlagAndSettingValues;
  public featureFlagAndSettingValuesUsingSDKKey: FeatureFlagAndSettingValuesUsingSDKKey;
  public featureFlagsAndSettings: FeatureFlagsAndSettings;
  public integrationLinks: IntegrationLinks;
  public me: Me;
  public members: Members;
  public organizations: Organizations;
  public permissionGroups: PermissionGroups;
  public products: Products;
  public sdkKeys: SDKKeys;
  public tags: Tags;

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
    
    this.auditLogs = new AuditLogs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.configs = new Configs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.environments = new Environments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.featureFlagAndSettingValues = new FeatureFlagAndSettingValues(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.featureFlagAndSettingValuesUsingSDKKey = new FeatureFlagAndSettingValuesUsingSDKKey(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.featureFlagsAndSettings = new FeatureFlagsAndSettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.integrationLinks = new IntegrationLinks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.me = new Me(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.members = new Members(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.organizations = new Organizations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.permissionGroups = new PermissionGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.products = new Products(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sdkKeys = new SDKKeys(
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
  }
}