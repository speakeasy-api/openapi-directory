import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesdomainsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspec";


export enum Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Configuring = "CONFIGURING",
    Active = "ACTIVE",
    Error = "ERROR"
}


export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: Record<string, any>[];
}


export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems;
}


export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continent" })
  continent?: string;

  @SpeakeasyMetadata({ data: "json, name=data_centers" })
  dataCenters?: string[];

  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flag" })
  flag?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}


// Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems
/** 
 * An application's configuration and status.
**/
export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_deployment" })
  activeDeployment?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=default_ingress" })
  defaultIngress?: string;

  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains })
  domains?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=in_progress_deployment" })
  inProgressDeployment?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;

  @SpeakeasyMetadata({ data: "json, name=last_deployment_created_at" })
  lastDeploymentCreatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=live_domain" })
  liveDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=live_url" })
  liveUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=live_url_base" })
  liveUrlBase?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_uuid" })
  ownerUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;

  @SpeakeasyMetadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
