import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldCompact } from "./customfieldcompact";
import { EnumOption } from "./enumoption";
import { Like } from "./like";
import { Preview } from "./preview";
import { ProjectCompact } from "./projectcompact";
import { SectionCompact } from "./sectioncompact";
import { StoryCompact } from "./storycompact";
import { StoryResponseDates } from "./storyresponsedates";
import { TagCompact } from "./tagcompact";
import { TaskCompact } from "./taskcompact";
import { UserCompact } from "./usercompact";
/**
 * *Conditional* The new value of a date custom field story.
 */
export declare class StoryResponseNewDateValue extends SpeakeasyBase {
    /**
     * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
     */
    dueAt?: Date;
    /**
     * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
     */
    dueOn?: Date;
    /**
     * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
     */
    startOn?: Date;
}
/**
 * *Conditional*. The old value of a date custom field story.
 */
export declare class StoryResponseOldDateValue extends SpeakeasyBase {
    /**
     * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
     */
    dueAt?: Date;
    /**
     * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
     */
    dueOn?: Date;
    /**
     * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
     */
    startOn?: Date;
}
/**
 * The component of the Asana product the user used to trigger the story.
 */
export declare enum StoryResponseSourceEnum {
    Web = "web",
    Email = "email",
    Mobile = "mobile",
    Api = "api",
    Unknown = "unknown"
}
/**
 * The name of the sticker in this story. `null` if there is no sticker.
 */
export declare enum StoryResponseStickerNameEnum {
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
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 */
export declare enum StoryResponseTargetResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}
/**
 * The *task* is the basic object around which many operations in Asana are centered.
 */
export declare class StoryResponseTarget extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the task.
     */
    name?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    resourceSubtype?: StoryResponseTargetResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
export declare enum StoryResponseTypeEnum {
    Comment = "comment",
    System = "system"
}
/**
 * A story represents an activity associated with an object in the Asana system.
 */
export declare class StoryResponse extends SpeakeasyBase {
    assignee?: UserCompact;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    createdBy?: UserCompact;
    customField?: CustomFieldCompact;
    dependency?: TaskCompact;
    duplicateOf?: TaskCompact;
    duplicatedFrom?: TaskCompact;
    follower?: UserCompact;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Deprecated - please use likes instead*
     *
     * @remarks
     * *Conditional*. True if the story is hearted by the authorized user, false if not.
     */
    hearted?: boolean;
    /**
     * *Deprecated - please use likes instead*
     *
     * @remarks
     *
     * *Conditional*. Array of likes for users who have hearted this story.
     */
    hearts?: Like[];
    /**
     * [Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include the name of the creator.
     */
    htmlText?: string;
    /**
     * *Conditional*. Whether the text of the story can be edited after creation.
     */
    isEditable?: boolean;
    /**
     * *Conditional*. Whether the text of the story has been edited after creation.
     */
    isEdited?: boolean;
    /**
     * *Conditional*. Whether the story should be pinned on the resource.
     */
    isPinned?: boolean;
    /**
     * *Conditional*. True if the story is liked by the authorized user, false if not.
     */
    liked?: boolean;
    /**
     * *Conditional*. Array of likes for users who have liked this story.
     */
    likes?: Like[];
    /**
     * *Conditional*. The new value of approval status.
     */
    newApprovalStatus?: string;
    newDateValue?: StoryResponseNewDateValue;
    /**
     * *Conditional*
     */
    newDates?: StoryResponseDates;
    newEnumValue?: EnumOption;
    /**
     * *Conditional*. The new value of a multi-enum custom field story.
     */
    newMultiEnumValues?: EnumOption[];
    /**
     * *Conditional*
     */
    newName?: string;
    /**
     * *Conditional*
     */
    newNumberValue?: number;
    /**
     * *Conditional*. The new value of a people custom field story.
     */
    newPeopleValue?: UserCompact[];
    /**
     * *Conditional*
     */
    newResourceSubtype?: string;
    newSection?: SectionCompact;
    /**
     * *Conditional*
     */
    newTextValue?: string;
    /**
     * *Deprecated - please use likes instead*
     *
     * @remarks
     *
     * *Conditional*. The number of users who have hearted this story.
     */
    numHearts?: number;
    /**
     * *Conditional*. The number of users who have liked this story.
     */
    numLikes?: number;
    /**
     * *Conditional*. The old value of approval status.
     */
    oldApprovalStatus?: string;
    oldDateValue?: StoryResponseOldDateValue;
    /**
     * *Conditional*
     */
    oldDates?: StoryResponseDates;
    oldEnumValue?: EnumOption;
    /**
     * *Conditional*. The old value of a multi-enum custom field story.
     */
    oldMultiEnumValues?: EnumOption[];
    /**
     * *Conditional*'
     */
    oldName?: string;
    /**
     * *Conditional*
     */
    oldNumberValue?: number;
    /**
     * *Conditional*. The old value of a people custom field story.
     */
    oldPeopleValue?: UserCompact[];
    /**
     * *Conditional*
     */
    oldResourceSubtype?: string;
    oldSection?: SectionCompact;
    /**
     * *Conditional*
     */
    oldTextValue?: string;
    /**
     * *Conditional*. A collection of previews to be displayed in the story.
     *
     * @remarks
     *
     * *Note: This property only exists for comment stories.*
     */
    previews?: Preview[];
    project?: ProjectCompact;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    resourceSubtype?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The component of the Asana product the user used to trigger the story.
     */
    source?: StoryResponseSourceEnum;
    /**
     * The name of the sticker in this story. `null` if there is no sticker.
     */
    stickerName?: StoryResponseStickerNameEnum;
    story?: StoryCompact;
    tag?: TagCompact;
    target?: StoryResponseTarget;
    task?: TaskCompact;
    /**
     * The plain text of the comment to add. Cannot be used with html_text.
     */
    text?: string;
    type?: StoryResponseTypeEnum;
}
