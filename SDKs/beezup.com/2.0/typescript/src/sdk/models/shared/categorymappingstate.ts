import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryMappingStatusEnum } from "./categorymappingstatusenum";



// CategoryMappingState
/** 
 * The category mapping state of the channel catalog
**/
export class CategoryMappingState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CategoryMappingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=uncategorizedProductCount" })
  uncategorizedProductCount?: number;

  @SpeakeasyMetadata({ data: "json, name=withoutCategoryCostProductCount" })
  withoutCategoryCostProductCount?: number;
}
