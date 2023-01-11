import { SpeakeasyBase } from "../../../internal/utils";
import { FeedTypeEnum } from "./feedtypeenum";
import { PublicationStrategyKindEnum } from "./publicationstrategykindenum";
import { LinksPublishCatalogToMarketplaceLink } from "./linkspublishcatalogtomarketplacelink";
export declare class MarketplaceChannelCatalogPublicationOption extends SpeakeasyBase {
    feedType: FeedTypeEnum;
    kind: PublicationStrategyKindEnum;
    link: LinksPublishCatalogToMarketplaceLink;
    strategy: string;
    withUnpublish: boolean;
}
