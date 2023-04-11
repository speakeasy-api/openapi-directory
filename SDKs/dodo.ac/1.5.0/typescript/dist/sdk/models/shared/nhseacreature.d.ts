import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHSeaCreatureNorthAvailabilityArray extends SpeakeasyBase {
    months?: string;
    time?: string;
}
/**
 * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
 */
export declare class NHSeaCreatureNorthTimesByMonth extends SpeakeasyBase {
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
 * When you can catch the sea creature in the Northern hemisphere.
 */
export declare class NHSeaCreatureNorth extends SpeakeasyBase {
    /**
     * An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the northern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.
     */
    availabilityArray?: NHSeaCreatureNorthAvailabilityArray[];
    /**
     * The months the sea creature is available for in the Northern hemisphere. If all year, value will be `"All year"`.
     */
    months?: string;
    /**
     * An array of integers representing the months the sea creature is available in the Northern hemisphere.
     */
    monthsArray?: number[];
    /**
     * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
     */
    timesByMonth?: NHSeaCreatureNorthTimesByMonth;
}
/**
 * Short descriptor of where the sea creature can be found.
 */
export declare enum NHSeaCreatureShadowMovementEnum {
    Stationary = "Stationary",
    VerySlow = "Very slow",
    Slow = "Slow",
    Medium = "Medium",
    Fast = "Fast",
    VeryFast = "Very fast"
}
/**
 * Short descriptor of where the sea creature can be found.
 */
export declare enum NHSeaCreatureShadowSizeEnum {
    XSmall = "X-Small",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    XLarge = "X-Large"
}
export declare class NHSeaCreatureSouthAvailabilityArray extends SpeakeasyBase {
    months?: string;
    time?: string;
}
/**
 * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
 */
export declare class NHSeaCreatureSouthTimesByMonth extends SpeakeasyBase {
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
 * When you can catch the sea creature in the Southern hemisphere.
 */
export declare class NHSeaCreatureSouth extends SpeakeasyBase {
    /**
     * An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the southern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.
     */
    availabilityArray?: NHSeaCreatureSouthAvailabilityArray[];
    /**
     * The months the sea creature is available for in the Southern hemisphere. If all year, value will be `"All year"`.
     */
    months?: string;
    /**
     * An array of integers representing the months the sea creature is available in the Southern hemisphere.
     */
    monthsArray?: number[];
    /**
     * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
     */
    timesByMonth?: NHSeaCreatureSouthTimesByMonth;
}
/**
 * A JSON object describing the sea creature.
 */
export declare class NHSeaCreature extends SpeakeasyBase {
    /**
     * An array of possible catchphrases the player says after catching the sea creature. Most critters have just one, but some can have multiple.
     */
    catchphrases?: string[];
    /**
     * Image of the sea creature. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * Name of the sea creature.
     */
    name?: string;
    /**
     * When you can catch the sea creature in the Northern hemisphere.
     */
    north?: NHSeaCreatureNorth;
    /**
     * In-game sea creature number, marking position in the Critterpedia.
     */
    number?: number;
    /**
     * How rare the sea creature is. Note that this field is currently empty for most sea creatures as we do not yet know how exactly sea creature rarities are calculated in the game code.
     */
    rarity?: string;
    /**
     * Render of the sea creature. dodo.ac is Nookipedia's CDN server.
     */
    renderUrl?: string;
    /**
     * The number of Bells the sea creature can be sold to Nook's store for.
     */
    sellNook?: number;
    /**
     * Short descriptor of where the sea creature can be found.
     */
    shadowMovement?: NHSeaCreatureShadowMovementEnum;
    /**
     * Short descriptor of where the sea creature can be found.
     */
    shadowSize?: NHSeaCreatureShadowSizeEnum;
    /**
     * When you can catch the sea creature in the Southern hemisphere.
     */
    south?: NHSeaCreatureSouth;
    /**
     * The length of the tank when the sea creature is placed as a furniture item.
     */
    tankLength?: number;
    /**
     * The width of the tank when the sea creature is placed as a furniture item.
     */
    tankWidth?: number;
    /**
     * The total number of sea creatures the player has to have caught before this sea creature will start spawning.
     */
    totalCatch?: number;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
}
