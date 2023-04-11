import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name of the sticker in this story. `null` if there is no sticker.
 */
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
 */
export declare class StoryRequestInput extends SpeakeasyBase {
    /**
     * [Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include the name of the creator.
     */
    htmlText?: string;
    /**
     * *Conditional*. Whether the story should be pinned on the resource.
     */
    isPinned?: boolean;
    /**
     * The name of the sticker in this story. `null` if there is no sticker.
     */
    stickerName?: StoryRequestStickerNameEnum;
    /**
     * The plain text of the comment to add. Cannot be used with html_text.
     */
    text?: string;
}
