import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: boolean;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sizes" })
  sizes: any;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

export enum Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum {
    InProgress = "in-progress",
    Completed = "completed",
    Errored = "errored"
}


export class Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion;

  @SpeakeasyMetadata({ data: "json, name=region_slug" })
  regionSlug?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
