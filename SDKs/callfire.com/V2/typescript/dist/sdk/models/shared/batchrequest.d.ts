import { SpeakeasyBase } from "../../../internal/utils";
import { Recipient } from "./recipient";
/**
 * Request object is used for adding new batch to an existing broadcast
 */
export declare class BatchRequest extends SpeakeasyBase {
    /**
     * An id of existing contact list
     */
    contactListId?: number;
    /**
     * A name of batch
     */
    name?: string;
    /**
     * A list of Recipient objects. For each recipient you can set its phone number or existing contact id to use contact which already exists in account
     */
    recipients?: Recipient[];
    /**
     * Removes duplicate recipients from batch if true
     */
    scrubDuplicates?: boolean;
}
