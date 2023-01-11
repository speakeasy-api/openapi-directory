import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
