import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StoryRequestStickerNameEnum {
    GreenCheckmark = "green_checkmark",
    PeopleDancing = "people_dancing",
    DancingUnicorn = "dancing_unicorn",
    Heart = "heart",
    PartyPopper = "party_popper",
    PeopleWavingFlags = "people_waving_flags",
    SplashingNarwhal = "splashing_narwhal",
    Trophy = "trophy",
    YetiRidingUnicorn = "yeti_riding_unicorn",
    CelebratingPeople = "celebrating_people",
    DeterminedClimbers = "determined_climbers",
    PhoenixSpreadingLove = "phoenix_spreading_love"
}
/**
 * A story represents an activity associated with an object in the Asana system.
**/
export declare class StoryRequestInput extends SpeakeasyBase {
    htmlText?: string;
    isPinned?: boolean;
    stickerName?: StoryRequestStickerNameEnum;
    text?: string;
}
