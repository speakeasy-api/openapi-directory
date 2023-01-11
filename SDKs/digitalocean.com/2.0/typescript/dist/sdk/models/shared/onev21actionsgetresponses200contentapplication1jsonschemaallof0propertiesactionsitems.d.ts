import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsRegion extends SpeakeasyBase {
    available: boolean;
    features: any;
    name: string;
    sizes: any;
    slug: string;
}
export declare enum Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum {
    InProgress = "in-progress",
    Completed = "completed",
    Errored = "errored"
}
export declare class Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems extends SpeakeasyBase {
    completedAt?: Date;
    id?: number;
    region?: Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsRegion;
    regionSlug?: Record<string, any>;
    resourceId?: number;
    resourceType?: string;
    startedAt?: Date;
    status?: Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum;
    type?: string;
}
