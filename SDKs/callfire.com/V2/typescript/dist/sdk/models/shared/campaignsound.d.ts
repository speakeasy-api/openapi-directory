import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A current status of a sound, available values: UPLOAD - uploading is in progress, RECORDING - recording of sound is in progress, ACTIVE - sound is ready, FAILED, ARCHIVED - sound was archived, SCRUBBED - sound was scrubbed
 */
export declare enum CampaignSoundStatusEnum {
    Upload = "UPLOAD",
    Recording = "RECORDING",
    Active = "ACTIVE",
    ActiveSystem = "ACTIVE_SYSTEM",
    Failed = "FAILED",
    Archived = "ARCHIVED",
    Scrubbed = "SCRUBBED"
}
/**
 * Represents a sound recording from account's sound library which can be used in different API operations
 */
export declare class CampaignSound extends SpeakeasyBase {
    /**
     * The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    created?: number;
    /**
     * True if the same sound file exists in a sound library of account
     */
    duplicate?: boolean;
    /**
     * An id of a sound file
     */
    id?: number;
    /**
     * Length of a sound in seconds
     */
    lengthInSeconds?: number;
    /**
     * A name of a sound file
     */
    name?: string;
    /**
     * A current status of a sound, available values: UPLOAD - uploading is in progress, RECORDING - recording of sound is in progress, ACTIVE - sound is ready, FAILED, ARCHIVED - sound was archived, SCRUBBED - sound was scrubbed
     */
    status?: CampaignSoundStatusEnum;
}
