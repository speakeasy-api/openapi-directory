import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum {
    Development = "Development",
    Staging = "Staging",
    Production = "Production"
}
export declare class Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput extends SpeakeasyBase {
    description?: string;
    environment?: Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum;
    isDefault?: boolean;
    name?: string;
    purpose?: string;
}
