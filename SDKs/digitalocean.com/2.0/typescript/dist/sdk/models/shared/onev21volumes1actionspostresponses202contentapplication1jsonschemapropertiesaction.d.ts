import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion extends SpeakeasyBase {
    available: boolean;
    features: any;
    name: string;
    sizes: any;
    slug: string;
}
export declare enum Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum {
    InProgress = "in-progress",
    Completed = "completed",
    Errored = "errored"
}
export declare class Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction extends SpeakeasyBase {
    completedAt?: Date;
    id?: number;
    region?: Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion;
    regionSlug?: Record<string, any>;
    resourceId?: number;
    resourceType?: string;
    startedAt?: Date;
    status?: Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum;
    type?: string;
}
