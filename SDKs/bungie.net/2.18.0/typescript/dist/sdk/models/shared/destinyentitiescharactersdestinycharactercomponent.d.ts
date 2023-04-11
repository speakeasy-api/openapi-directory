import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
/**
 * Represents a color whose RGBA values are all represented as values between 0 and 255.
 */
export declare class DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor extends SpeakeasyBase {
    alpha?: string;
    blue?: string;
    green?: string;
    red?: string;
}
/**
 * Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
 */
export declare class DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression extends SpeakeasyBase {
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
 * This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
 */
export declare class DestinyEntitiesCharactersDestinyCharacterComponent extends SpeakeasyBase {
    /**
     * The "base" level of your character, not accounting for any light level.
     */
    baseCharacterLevel?: number;
    /**
     * The unique identifier for the character.
     */
    characterId?: number;
    /**
     * Use this hash to look up the character's DestinyClassDefinition.
     */
    classHash?: number;
    /**
     * Mostly for historical purposes at this point, this is an enumeration for the character's class.
     *
     * @remarks
     * It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove.
     */
    classType?: number;
    /**
     * The last date that the user played Destiny.
     */
    dateLastPlayed?: Date;
    /**
     * A shortcut path to the user's currently equipped emblem background image. If you're just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
     */
    emblemBackgroundPath?: string;
    /**
     * A shortcut for getting the background color of the user's currently equipped emblem without having to do a DestinyInventoryItemDefinition lookup.
     */
    emblemColor?: DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor;
    /**
     * The hash of the currently equipped emblem for the user. Can be used to look up the DestinyInventoryItemDefinition.
     */
    emblemHash?: number;
    /**
     * A shortcut path to the user's currently equipped emblem image. If you're just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
     */
    emblemPath?: string;
    /**
     * Use this hash to look up the character's DestinyGenderDefinition.
     */
    genderHash?: number;
    /**
     * Mostly for historical purposes at this point, this is an enumeration for the character's Gender.
     *
     * @remarks
     * It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove. And yeah, it's an enumeration and not a boolean. Fight me.
     */
    genderType?: number;
    /**
     * The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
     */
    levelProgression?: DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression;
    /**
     * The user's calculated "Light Level". Light level is an indicator of your power that mostly matters in the end game, once you've reached the maximum character level: it's a level that's dependent on the average Attack/Defense power of your items.
     */
    light?: number;
    /**
     * Every Destiny Profile has a membershipId. This is provided on the character as well for convenience.
     */
    membershipId?: number;
    /**
     * membershipType tells you the platform on which the character plays. Examine the BungieMembershipType enumeration for possible values.
     */
    membershipType?: number;
    /**
     * If the user is currently playing, this is how long they've been playing.
     */
    minutesPlayedThisSession?: number;
    /**
     * If this value is 525,600, then they played Destiny for a year. Or they're a very dedicated Rent fan. Note that this includes idle time, not just time spent actually in activities shooting things.
     */
    minutesPlayedTotal?: number;
    /**
     * A number between 0 and 100, indicating the whole and fractional % remaining to get to the next character level.
     */
    percentToNextLevel?: number;
    /**
     * Use this hash to look up the character's DestinyRaceDefinition.
     */
    raceHash?: number;
    /**
     * Mostly for historical purposes at this point, this is an enumeration for the character's race.
     *
     * @remarks
     * It'll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove.
     */
    raceType?: number;
    /**
     * Your character's stats, such as Agility, Resilience, etc... *not* historical stats.
     *
     * @remarks
     * You'll have to call a different endpoint for those.
     */
    stats?: Record<string, number>;
    /**
     * If this Character has a title assigned to it, this is the identifier of the DestinyRecordDefinition that has that title information.
     */
    titleRecordHash?: number;
}
