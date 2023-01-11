import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAppsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare enum ListApps200ApplicationJsonAppsDomainsPhaseEnum {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Configuring = "CONFIGURING",
    Active = "ACTIVE",
    Error = "ERROR"
}
export declare class ListApps200ApplicationJsonAppsDomainsProgress extends SpeakeasyBase {
    steps?: Record<string, any>[];
}
export declare class ListApps200ApplicationJsonAppsDomains extends SpeakeasyBase {
    id?: string;
    phase?: ListApps200ApplicationJsonAppsDomainsPhaseEnum;
    progress?: ListApps200ApplicationJsonAppsDomainsProgress;
    spec?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems;
}
export declare class ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin extends SpeakeasyBase {
    continent?: string;
    dataCenters?: string[];
    default?: boolean;
    disabled?: boolean;
    flag?: string;
    label?: string;
    reason?: string;
    slug?: string;
}
/**
 * An application's configuration and status.
**/
export declare class ListApps200ApplicationJsonApps extends SpeakeasyBase {
    activeDeployment?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;
    createdAt?: Date;
    defaultIngress?: string;
    domains?: ListApps200ApplicationJsonAppsDomains[];
    id?: string;
    inProgressDeployment?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;
    lastDeploymentCreatedAt?: Date;
    liveDomain?: string;
    liveUrl?: string;
    liveUrlBase?: string;
    ownerUuid?: string;
    region?: ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin;
    spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
    tierSlug?: string;
    updatedAt?: Date;
}
export declare class ListApps200ApplicationJson extends SpeakeasyBase {
    apps?: ListApps200ApplicationJsonApps[];
    links?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks;
    meta?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta;
}
export declare class ListApps401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAppsRequest extends SpeakeasyBase {
    queryParams: ListAppsQueryParams;
}
export declare class ListAppsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listApps200ApplicationJSONObject?: ListApps200ApplicationJson;
    listApps401ApplicationJSONObject?: ListApps401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
