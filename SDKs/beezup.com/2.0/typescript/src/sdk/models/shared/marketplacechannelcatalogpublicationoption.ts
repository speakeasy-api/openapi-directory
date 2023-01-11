import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeedTypeEnum } from "./feedtypeenum";
import { PublicationStrategyKindEnum } from "./publicationstrategykindenum";
import { LinksPublishCatalogToMarketplaceLink } from "./linkspublishcatalogtomarketplacelink";



export class MarketplaceChannelCatalogPublicationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType: FeedTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind: PublicationStrategyKindEnum;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: LinksPublishCatalogToMarketplaceLink;

  @SpeakeasyMetadata({ data: "json, name=strategy" })
  strategy: string;

  @SpeakeasyMetadata({ data: "json, name=withUnpublish" })
  withUnpublish: boolean;
}
