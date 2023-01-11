import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=association_criteria" })
  associationCriteria?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId?: string;
}
