import { SpeakeasyBase } from "../../../internal/utils";
import { FeedTypeEnum } from "./feedtypeenum";
import { PublicationStrategyKindEnum } from "./publicationstrategykindenum";
/**
 * Publish the catalog to the marketplace
**/
export declare class PublishCatalogToMarketplaceRequest extends SpeakeasyBase {
    feedType: FeedTypeEnum;
    publicationStrategyKind: PublicationStrategyKindEnum;
    withUnpublish: boolean;
}
