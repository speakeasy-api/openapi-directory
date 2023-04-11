import { SpeakeasyBase } from "../../../internal/utils";
import { FeedTypeEnum } from "./feedtypeenum";
import { PublicationStrategyKindEnum } from "./publicationstrategykindenum";
/**
 * Publish the catalog to the marketplace
 */
export declare class PublishCatalogToMarketplaceRequest extends SpeakeasyBase {
    /**
     * The Feed Type
     */
    feedType: FeedTypeEnum;
    /**
     * Define the publication strategy kind, for that you have 2 choices
     *
     * @remarks
     * * Delta - This is the recommanded publication strategy kind, this strategy will push to the marketplace only the difference between your catalog and the previous published feeds done by BeezUP.
     * * Full - If you want to force the publication of all your catalog feeds to the marketplace.
     *       !WARNING! Depending to the marketplace this operation will purge the existing offers on the marketplace that are not in the catalog or unknown from the publication feed referential.
     *
     */
    publicationStrategyKind: PublicationStrategyKindEnum;
    /**
     * In full publication strategy kind, for some marktetplace, you can ask to unpublish or not your existing feeds on the markeptlace absent from your exported catalog.
     */
    withUnpublish: boolean;
}
