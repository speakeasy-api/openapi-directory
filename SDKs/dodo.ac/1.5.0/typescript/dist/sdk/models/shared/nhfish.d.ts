import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHFishNorthAvailabilityArray extends SpeakeasyBase {
    months?: string;
    time?: string;
}
/**
 * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
 */
export declare class NHFishNorthTimesByMonth extends SpeakeasyBase {
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
 * When you can catch the fish in the Northern hemisphere.
 */
export declare class NHFishNorth extends SpeakeasyBase {
    /**
     * An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the northern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.
     */
    availabilityArray?: NHFishNorthAvailabilityArray[];
    /**
     * The months the fish is available for in the Northern hemisphere. If all year, value will be `"All year"`.
     */
    months?: string;
    /**
     * An array of integers representing the months the fish is available in the Northern hemisphere.
     */
    monthsArray?: number[];
    /**
     * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
     */
    timesByMonth?: NHFishNorthTimesByMonth;
}
/**
 * The size of the fish's shadow.
 */
export declare enum NHFishShadowSizeEnum {
    XSmall = "X-Small",
    Small = "Small",
    Medium = "Medium",
    MediumWFin = "Medium w/Fin",
    Large = "Large",
    LargeWFin = "Large w/Fin",
    XLarge = "X-Large",
    XXLarge = "XX-Large",
    Long = "Long"
}
export declare class NHFishSouthAvailabilityArray extends SpeakeasyBase {
    months?: string;
    time?: string;
}
/**
 * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
 */
export declare class NHFishSouthTimesByMonth extends SpeakeasyBase {
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
 * When you can catch the fish in the Southern hemisphere.
 */
export declare class NHFishSouth extends SpeakeasyBase {
    /**
     * An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the southern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.
     */
    availabilityArray?: NHFishSouthAvailabilityArray[];
    /**
     * The months the fish is available for in the Southern hemisphere. If all year, value will be `"All year"`.
     */
    months?: string;
    /**
     * An array of integers representing the months the fish is available in the Southern hemisphere.
     */
    monthsArray?: number[];
    /**
     * An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
     */
    timesByMonth?: NHFishSouthTimesByMonth;
}
/**
 * A JSON object describing the fish.
 */
export declare class NHFish extends SpeakeasyBase {
    /**
     * An array of possible catchphrases the player says after catching the fish. Most critters have just one, but some can have multiple.
     */
    catchphrases?: string[];
    /**
     * Image of the fish. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * Short descriptor of where the fish can be found.
     */
    location?: string;
    /**
     * Name of the fish.
     */
    name?: string;
    /**
     * When you can catch the fish in the Northern hemisphere.
     */
    north?: NHFishNorth;
    /**
     * In-game fish number, marking position in the Critterpedia.
     */
    number?: number;
    /**
     * How rare the fish is. Note that this field is currently empty for most fish as we do not yet know how exactly fish rarities are calculated in the game code.
     */
    rarity?: string;
    /**
     * Render of the fish. dodo.ac is Nookipedia's CDN server.
     */
    renderUrl?: string;
    /**
     * The number of Bells the fish can be sold to C.J. for. This value is always 1.5x that of `sell_nook`.
     */
    sellCj?: number;
    /**
     * The number of Bells the fish can be sold to Nook's store for.
     */
    sellNook?: number;
    /**
     * The size of the fish's shadow.
     */
    shadowSize?: NHFishShadowSizeEnum;
    /**
     * When you can catch the fish in the Southern hemisphere.
     */
    south?: NHFishSouth;
    /**
     * The length of the tank when the fish is placed as a furniture item.
     */
    tankLength?: number;
    /**
     * The width of the tank when the fish is placed as a furniture item.
     */
    tankWidth?: number;
    /**
     * The total number of fish the player has to have caught before this fish will start spawning.
     */
    totalCatch?: number;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
}
