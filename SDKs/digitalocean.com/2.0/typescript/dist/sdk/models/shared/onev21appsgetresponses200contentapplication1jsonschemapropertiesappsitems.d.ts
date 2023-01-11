import { SpeakeasyBase } from "../../../internal/utils";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesdomainsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspec";
export declare enum Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Configuring = "CONFIGURING",
    Active = "ACTIVE",
    Error = "ERROR"
}
export declare class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress extends SpeakeasyBase {
    steps?: Record<string, any>[];
}
export declare class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains extends SpeakeasyBase {
    id?: string;
    phase?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum;
    progress?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress;
    spec?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems;
}
export declare class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin extends SpeakeasyBase {
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
export declare class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems extends SpeakeasyBase {
    activeDeployment?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;
    createdAt?: Date;
    defaultIngress?: string;
    domains?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains[];
    id?: string;
    inProgressDeployment?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;
    lastDeploymentCreatedAt?: Date;
    liveDomain?: string;
    liveUrl?: string;
    liveUrlBase?: string;
    ownerUuid?: string;
    region?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin;
    spec: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
    tierSlug?: string;
    updatedAt?: Date;
}
