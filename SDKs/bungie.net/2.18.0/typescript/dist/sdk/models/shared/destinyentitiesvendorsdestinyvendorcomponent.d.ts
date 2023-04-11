import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
/**
 * Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
 */
export declare class DestinyEntitiesVendorsDestinyVendorComponentProgression extends SpeakeasyBase {
    /**
     * This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
     */
    currentProgress?: number;
    /**
     * The number of resets of this progression you've executed this season, if applicable to this progression.
     */
    currentResetCount?: number;
    /**
     * If this progression has a daily limit, this is that limit.
     */
    dailyLimit?: number;
    /**
     * The amount of progress earned today for this progression.
     */
    dailyProgress?: number;
    /**
     * This is the level of the progression (for instance, the Character Level).
     */
    level?: number;
    /**
     * This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
     */
    levelCap?: number;
    /**
     * The total amount of progression (i.e. "Experience") needed in order to reach the next level.
     */
    nextLevelAt?: number;
    /**
     * The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
     */
    progressToNextLevel?: number;
    /**
     * The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
     */
    progressionHash?: number;
    /**
     * Information about historical rewards for this progression, if there is any data for it.
     */
    rewardItemStates?: number[];
    /**
     * Information about historical resets of this progression, if there is any data for it.
     */
    seasonResets?: DestinyDestinyProgressionResetEntry[];
    /**
     * Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
     */
    stepIndex?: number;
    /**
     * If this progression has a weekly limit, this is that limit.
     */
    weeklyLimit?: number;
    /**
     * The amount of progress earned toward this progression in the current week.
     */
    weeklyProgress?: number;
}
/**
 * This component contains essential/summary information about the vendor.
 */
export declare class DestinyEntitiesVendorsDestinyVendorComponent extends SpeakeasyBase {
    /**
     * If True, you can purchase from the Vendor.
     */
    canPurchase?: boolean;
    /**
     * If True, the Vendor is currently accessible.
     *
     * @remarks
     * If False, they may not actually be visible in the world at the moment.
     */
    enabled?: boolean;
    /**
     * The date when this vendor's inventory will next rotate/refresh.
     *
     * @remarks
     * Note that this is distinct from the date ranges that the vendor is visible/available in-game: this field indicates the specific time when the vendor's available items refresh and rotate, regardless of whether the vendor is actually available at that time. Unfortunately, these two values may be (and are, for the case of important vendors like Xur) different.
     * Issue https://github.com/Bungie-net/api/issues/353 is tracking a fix to start providing visibility date ranges where possible in addition to this refresh date, so that all important dates for vendors are available for use.
     */
    nextRefreshDate?: Date;
    /**
     * If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.
     */
    progression?: DestinyEntitiesVendorsDestinyVendorComponentProgression;
    /**
     * If this vendor has a seasonal rank, this will be the calculated value of that rank. How nice is that? I mean, that's pretty sweeet. It's a whole 32 bit integer.
     */
    seasonalRank?: number;
    /**
     * The unique identifier for the vendor. Use it to look up their DestinyVendorDefinition.
     */
    vendorHash?: number;
    /**
     * An index into the vendor definition's "locations" property array, indicating which location they are at currently. If -1, then the vendor has no known location (and you may choose not to show them in your UI as a result. I mean, it's your bag honey)
     */
    vendorLocationIndex?: number;
}
