import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyActivity } from "./destinydestinyactivity";
/**
 * And the current activity's most specific mode type, if it can be found.
 */
export declare enum DestinyEntitiesCharactersDestinyCharacterActivitiesComponentCurrentActivityModeTypeEnum {
    Zero = "0",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fifteen = "15",
    Sixteen = "16",
    Seventeen = "17",
    Eighteen = "18",
    Nineteen = "19",
    Twenty = "20",
    TwentyOne = "21",
    TwentyTwo = "22",
    TwentyFour = "24",
    TwentyFive = "25",
    TwentySix = "26",
    TwentySeven = "27",
    TwentyEight = "28",
    TwentyNine = "29",
    Thirty = "30",
    ThirtyOne = "31",
    ThirtyTwo = "32",
    ThirtySeven = "37",
    ThirtyEight = "38",
    ThirtyNine = "39",
    Forty = "40",
    FortyOne = "41",
    FortyTwo = "42",
    FortyThree = "43",
    FortyFour = "44",
    FortyFive = "45",
    FortySix = "46",
    FortySeven = "47",
    FortyEight = "48",
    FortyNine = "49",
    Fifty = "50",
    FiftyOne = "51",
    FiftyTwo = "52",
    FiftyThree = "53",
    FiftyFour = "54",
    FiftyFive = "55",
    FiftySix = "56",
    FiftySeven = "57",
    FiftyEight = "58",
    FiftyNine = "59",
    Sixty = "60",
    SixtyOne = "61",
    SixtyTwo = "62",
    SixtyThree = "63",
    SixtyFour = "64",
    SixtyFive = "65",
    SixtySix = "66",
    SixtySeven = "67",
    SixtyEight = "68",
    SixtyNine = "69",
    Seventy = "70",
    SeventyOne = "71",
    SeventyTwo = "72",
    SeventyThree = "73",
    SeventyFour = "74",
    SeventyFive = "75",
    SeventySix = "76",
    SeventySeven = "77",
    SeventyEight = "78",
    SeventyNine = "79",
    Eighty = "80",
    EightyOne = "81",
    EightyTwo = "82",
    EightyThree = "83",
    EightyFour = "84",
    EightyFive = "85",
    EightySix = "86",
    EightySeven = "87",
    EightyEight = "88",
    EightyNine = "89",
    Ninety = "90",
    NinetyOne = "91"
}
/**
 * This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
 */
export declare class DestinyEntitiesCharactersDestinyCharacterActivitiesComponent extends SpeakeasyBase {
    /**
     * The list of activities that the user can play.
     */
    availableActivities?: DestinyDestinyActivity[];
    /**
     * If the user is in an activity, this will be the hash of the Activity being played. Note that you must combine this info with currentActivityModeHash to get a real picture of what the user is doing right now. For instance, PVP "Activities" are just maps: it's the ActivityMode that determines what type of PVP game they're playing.
     */
    currentActivityHash?: number;
    /**
     * If the user is in an activity, this will be the hash of the activity mode being played. Combine with currentActivityHash to give a person a full picture of what they're doing right now.
     */
    currentActivityModeHash?: number;
    /**
     * If the user is in an activity, this will be the hashes of the DestinyActivityModeDefinition being played. Combine with currentActivityHash to give a person a full picture of what they're doing right now.
     */
    currentActivityModeHashes?: number[];
    /**
     * And the current activity's most specific mode type, if it can be found.
     */
    currentActivityModeType?: DestinyEntitiesCharactersDestinyCharacterActivitiesComponentCurrentActivityModeTypeEnum;
    /**
     * All Activity Modes that apply to the current activity being played, in enum form.
     */
    currentActivityModeTypes?: number[];
    /**
     * If the user is in a playlist, this is the hash identifier for the playlist that they chose.
     */
    currentPlaylistActivityHash?: number;
    /**
     * The last date that the user started playing an activity.
     */
    dateActivityStarted?: Date;
    /**
     * This will have the activity hash of the last completed story/campaign mission, in case you care about that.
     */
    lastCompletedStoryHash?: number;
}
