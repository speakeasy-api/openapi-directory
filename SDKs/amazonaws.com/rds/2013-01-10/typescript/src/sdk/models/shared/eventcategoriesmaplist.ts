import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventCategoriesMapList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: Record<string, any>[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
