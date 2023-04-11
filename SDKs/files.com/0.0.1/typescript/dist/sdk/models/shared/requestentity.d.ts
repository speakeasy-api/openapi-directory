import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Requests
 */
export declare class RequestEntity extends SpeakeasyBase {
    /**
     * ID of automation that created request
     */
    automationId?: string;
    /**
     * Destination filename
     */
    destination?: string;
    /**
     * Request ID
     */
    id?: number;
    /**
     * Folder path
     */
    path?: string;
    /**
     * Source filename, if applicable
     */
    source?: string;
    /**
     * User making the request (if applicable)
     */
    userDisplayName?: string;
}
