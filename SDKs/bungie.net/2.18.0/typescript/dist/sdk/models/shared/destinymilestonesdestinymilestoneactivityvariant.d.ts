import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneActivityPhase } from "./destinymilestonesdestinymilestoneactivityphase";
/**
 * The enumeration equivalent of the most specific Activity Mode under which this activity is played.
 */
export declare enum DestinyMilestonesDestinyMilestoneActivityVariantActivityModeTypeEnum {
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
 * Represents this player's personal completion status for the Activity under a Milestone, if the activity has trackable completion and progress information. (most activities won't, or the concept won't apply. For instance, it makes sense to talk about a tier of a raid as being Completed or having progress, but it doesn't make sense to talk about a Crucible Playlist in those terms.
 */
export declare class DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus extends SpeakeasyBase {
    /**
     * If the activity has been "completed", that information will be returned here.
     */
    completed?: boolean;
    /**
     * If the Activity has discrete "phases" that we can track, that info will be here. Otherwise, this value will be NULL. Note that this is a list and not a dictionary: the order implies the ascending order of phases or progression in this activity.
     */
    phases?: DestinyMilestonesDestinyMilestoneActivityPhase[];
}
/**
 * Represents custom data that we know about an individual variant of an activity.
 */
export declare class DestinyMilestonesDestinyMilestoneActivityVariant extends SpeakeasyBase {
    /**
     * The hash for the specific variant of the activity related to this milestone. You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level.
     */
    activityHash?: number;
    /**
     * The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it's not clear what mode the PVP map is being played under. If it's a playlist, this will be less specific: but hopefully useful in some way.
     */
    activityModeHash?: number;
    /**
     * The enumeration equivalent of the most specific Activity Mode under which this activity is played.
     */
    activityModeType?: DestinyMilestonesDestinyMilestoneActivityVariantActivityModeTypeEnum;
    /**
     * An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
     */
    completionStatus?: DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus;
}
