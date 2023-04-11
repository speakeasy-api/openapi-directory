import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHBugNorthAvailabilityArray extends SpeakeasyBase {
    months?: string;
    time?: string;
}
/**
 * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
 */
export declare class NHBugNorthTimesByMonth extends SpeakeasyBase {
    one?: string;
    ten?: string;
    eleven?: string;
    twelve?: string;
    two?: string;
    three?: string;
    four?: string;
    five?: string;
    six?: string;
    seven?: string;
    eight?: string;
    nine?: string;
}
/**
 * When you can catch the bug in the Northern hemisphere.
 */
export declare class NHBugNorth extends SpeakeasyBase {
    /**
     * An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the northern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.
     */
    availabilityArray?: NHBugNorthAvailabilityArray[];
    /**
     * The months the bug is available for in the Northern hemisphere. If all year, value will be `"All year"`.
     */
    months?: string;
    /**
     * An array of integers representing the months the bug is available in the Northern hemisphere.
     */
    monthsArray?: number[];
    /**
     * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
     */
    timesByMonth?: NHBugNorthTimesByMonth;
}
export declare class NHBugSouthAvailabilityArray extends SpeakeasyBase {
    months?: string;
    time?: string;
}
/**
 * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
 */
export declare class NHBugSouthTimesByMonth extends SpeakeasyBase {
    one?: string;
    ten?: string;
    eleven?: string;
    twelve?: string;
    two?: string;
    three?: string;
    four?: string;
    five?: string;
    six?: string;
    seven?: string;
    eight?: string;
    nine?: string;
}
/**
 * When you can catch the bug in the Southern hemisphere.
 */
export declare class NHBugSouth extends SpeakeasyBase {
    /**
     * An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the southern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.
     */
    availabilityArray?: NHBugSouthAvailabilityArray[];
    /**
     * The months the bug is available for in the Southern hemisphere. If all year, value will be `"All year"`.
     */
    months?: string;
    /**
     * An array of integers representing the months the bug is available in the Southern hemisphere.
     */
    monthsArray?: number[];
    /**
     * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
     */
    timesByMonth?: NHBugSouthTimesByMonth;
}
/**
 * A JSON object describing the bug.
 */
export declare class NHBug extends SpeakeasyBase {
    /**
     * An array of possible catchphrases the player says after catching the bug. Most critters have just one, but some can have multiple.
     */
    catchphrases?: string[];
    /**
     * Image of the bug. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * Short descriptor of where the bug can be found.
     */
    location?: string;
    /**
     * Name of the bug.
     */
    name?: string;
    /**
     * When you can catch the bug in the Northern hemisphere.
     */
    north?: NHBugNorth;
    /**
     * In-game bug number, marking position in the Critterpedia.
     */
    number?: number;
    /**
     * How rare the bug is. Note that this field is currently empty for most bugs as we do not yet know how exactly bug rarities are calculated in the game code.
     */
    rarity?: string;
    /**
     * Render of the bug. dodo.ac is Nookipedia's CDN server.
     */
    renderUrl?: string;
    /**
     * The number of Bells the bug can be sold to Flick for. This value is always 1.5x that of `sell_nook`.
     */
    sellFlick?: number;
    /**
     * The number of Bells the bug can be sold to Nook's store for.
     */
    sellNook?: number;
    /**
     * When you can catch the bug in the Southern hemisphere.
     */
    south?: NHBugSouth;
    /**
     * The length of the tank when the bug is placed as a furniture item.
     */
    tankLength?: number;
    /**
     * The width of the tank when the bug is placed as a furniture item.
     */
    tankWidth?: number;
    /**
     * The total number of bug the player has to have caught before this bug will start spawning.
     */
    totalCatch?: number;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
}
