import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAppsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum ListApps200ApplicationJsonAppsDomainsPhaseEnum {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Configuring = "CONFIGURING",
    Active = "ACTIVE",
    Error = "ERROR"
}


export class ListApps200ApplicationJsonAppsDomainsProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: Record<string, any>[];
}


export class ListApps200ApplicationJsonAppsDomains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: ListApps200ApplicationJsonAppsDomainsPhaseEnum;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: ListApps200ApplicationJsonAppsDomainsProgress;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems;
}


export class ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin extends SpeakeasyBase {
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


// ListApps200ApplicationJsonApps
/** 
 * An application's configuration and status.
**/
export class ListApps200ApplicationJsonApps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_deployment" })
  activeDeployment?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=default_ingress" })
  defaultIngress?: string;

  @SpeakeasyMetadata({ data: "json, name=domains", elemType: ListApps200ApplicationJsonAppsDomains })
  domains?: ListApps200ApplicationJsonAppsDomains[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=in_progress_deployment" })
  inProgressDeployment?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;

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
  region?: ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;

  @SpeakeasyMetadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class ListApps200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: ListApps200ApplicationJsonApps })
  apps?: ListApps200ApplicationJsonApps[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta;
}


export class ListApps401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAppsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAppsQueryParams;
}


export class ListAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listApps200ApplicationJSONObject?: ListApps200ApplicationJson;

  @SpeakeasyMetadata()
  listApps401ApplicationJSONObject?: ListApps401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
