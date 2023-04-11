import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostActionNotificationExportsRequestBody extends SpeakeasyBase {
    /**
     * End date/time of export range.
     */
    endAt?: Date;
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
     * Start date/time of export range.
     */
    startAt?: Date;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class PostActionNotificationExportsResponse extends SpeakeasyBase {
    /**
     * The ActionNotificationExports object.
     */
    actionNotificationExportEntity?: shared.ActionNotificationExportEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
