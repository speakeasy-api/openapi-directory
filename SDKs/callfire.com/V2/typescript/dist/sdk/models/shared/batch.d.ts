import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A status of batch (NEW, VALIDATING, ERRORS, SOURCE_ERROR, ACTIVE). NEW - batch is queued for validation; VALIDATING - batch is currently validating; ERRORS - batch is processed, some validation errors occurred; SOURCE_ERROR - if contact source is contact list in CallFire system and it has an error; ACTIVE - batch is processed and ready
 */
export declare enum BatchStatusEnum {
    New = "NEW",
    Validating = "VALIDATING",
    Errors = "ERRORS",
    SourceError = "SOURCE_ERROR",
    Active = "ACTIVE"
}
/**
 * A batch represents a group of contacts which can be dialed or texted via call/text broadcast
 */
export declare class Batch extends SpeakeasyBase {
    /**
     * An id of broadcast which batch belongs to
     */
    broadcastId?: number;
    /**
     * A date and time when batch was created, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    created?: number;
    /**
     * An enabled batch. If batch is disabled its contacts remain undialed/untexted
     */
    enabled?: boolean;
    /**
     * A id of a batch
     */
    id?: number;
    /**
     * A batch name
     */
    name?: string;
    /**
     * A number of contacts remaining undialed/untexted
     */
    remaining?: number;
    /**
     * A total number of contacts in batch
     */
    size?: number;
    /**
     * A status of batch (NEW, VALIDATING, ERRORS, SOURCE_ERROR, ACTIVE). NEW - batch is queued for validation; VALIDATING - batch is currently validating; ERRORS - batch is processed, some validation errors occurred; SOURCE_ERROR - if contact source is contact list in CallFire system and it has an error; ACTIVE - batch is processed and ready
     */
    status?: BatchStatusEnum;
}
/**
 * A batch represents a group of contacts which can be dialed or texted via call/text broadcast
 */
export declare class BatchInput extends SpeakeasyBase {
    /**
     * An id of broadcast which batch belongs to
     */
    broadcastId?: number;
    /**
     * An enabled batch. If batch is disabled its contacts remain undialed/untexted
     */
    enabled?: boolean;
    /**
     * A id of a batch
     */
    id?: number;
    /**
     * A batch name
     */
    name?: string;
    /**
     * A status of batch (NEW, VALIDATING, ERRORS, SOURCE_ERROR, ACTIVE). NEW - batch is queued for validation; VALIDATING - batch is currently validating; ERRORS - batch is processed, some validation errors occurred; SOURCE_ERROR - if contact source is contact list in CallFire system and it has an error; ACTIVE - batch is processed and ready
     */
    status?: BatchStatusEnum;
}
