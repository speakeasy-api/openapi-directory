import { SpeakeasyBase } from "../../../internal/utils";
import { Queue } from "./queue";
import { QueueMessage } from "./queuemessage";
/**
 * Response returned by most Queue API calls.
 */
export declare class ApiResponse extends SpeakeasyBase {
    /**
     * Count of Queues or QueueMessages returned by the call.
     */
    count?: number;
    /**
     * Informative message intended for client.
     */
    message?: string;
    /**
     * Queues Messages returned by the call, or empty if not applicable.
     */
    queueMessages?: QueueMessage[];
    /**
     * Queues returned but the call, or empty if not applicable.
     */
    queues?: Queue[];
}
