import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeedTypeEnum } from "./feedtypeenum";
import { PublicationStrategyKindEnum } from "./publicationstrategykindenum";



// PublishCatalogToMarketplaceRequest
/** 
 * Publish the catalog to the marketplace
**/
export class PublishCatalogToMarketplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType: FeedTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=publicationStrategyKind" })
  publicationStrategyKind: PublicationStrategyKindEnum;

  @SpeakeasyMetadata({ data: "json, name=withUnpublish" })
  withUnpublish: boolean;
}
