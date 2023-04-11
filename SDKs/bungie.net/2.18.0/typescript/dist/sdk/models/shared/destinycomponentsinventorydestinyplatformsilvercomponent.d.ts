import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
export declare class DestinyComponentsInventoryDestinyPlatformSilverComponent extends SpeakeasyBase {
    /**
     * If a Profile is played on multiple platforms, this is the silver they have for each platform, keyed by Membership Type.
     */
    platformSilver?: Record<string, DestinyEntitiesItemsDestinyItemComponent>;
}
