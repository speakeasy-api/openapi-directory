import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Show Action Notification Export
 */
export declare class ActionNotificationExportEntity extends SpeakeasyBase {
    /**
     * End date/time of export range.
     */
    endAt?: Date;
    /**
     * Version of the underlying records for the export.
     */
    exportVersion?: string;
    /**
     * History Export ID
     */
    id?: number;
    /**
     * Return notifications that were triggered by actions in this folder.
     */
    queryFolder?: string;
    /**
     * Error message associated with the request, if any.
     */
    queryMessage?: string;
    /**
     * Return notifications that were triggered by actions on this specific path.
     */
    queryPath?: string;
    /**
     * The HTTP request method used by the webhook.
     */
    queryRequestMethod?: string;
    /**
     * The target webhook URL.
     */
    queryRequestUrl?: string;
    /**
     * The HTTP status returned from the server in response to the webhook request.
     */
    queryStatus?: string;
    /**
     * true if the webhook request succeeded (i.e. returned a 200 or 204 response status). false otherwise.
     */
    querySuccess?: boolean;
    /**
     * If `status` is `ready`, this will be a URL where all the results can be downloaded at once as a CSV.
     */
    resultsUrl?: string;
    /**
     * Start date/time of export range.
     */
    startAt?: Date;
    /**
     * Status of export.  Valid values: `building`, `ready`, or `failed`
     */
    status?: string;
}
