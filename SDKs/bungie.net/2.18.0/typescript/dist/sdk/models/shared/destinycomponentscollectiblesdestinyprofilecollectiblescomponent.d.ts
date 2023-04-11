import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsCollectiblesDestinyCollectibleComponent } from "./destinycomponentscollectiblesdestinycollectiblecomponent";
export declare class DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent extends SpeakeasyBase {
    collectibles?: Record<string, DestinyComponentsCollectiblesDestinyCollectibleComponent>;
    /**
     * The hash for the root presentation node definition of Collection Badges.
     */
    collectionBadgesRootNodeHash?: number;
    /**
     * The hash for the root presentation node definition of Collection categories.
     */
    collectionCategoriesRootNodeHash?: number;
    /**
     * The list of collectibles determined by the game as having been "recently" acquired.
     *
     * @remarks
     * The game client itself actually controls this data, so I personally question whether anyone will get much use out of this: because we can't edit this value through the API. But in case anyone finds it useful, here it is.
     */
    newnessFlaggedCollectibleHashes?: number[];
    /**
     * The list of collectibles determined by the game as having been "recently" acquired.
     */
    recentCollectibleHashes?: number[];
}
