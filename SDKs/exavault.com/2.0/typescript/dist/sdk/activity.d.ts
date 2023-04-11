import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The activity APIs allow you to get logs from your account. We track multiple types of under the umbrellas; __Activity Logs__ that show an action a user performed or initiated on a file, folder or the account. __Webhooks Logs__ that show records of all outbound webhook calls made by ExaVault. Both can be optionally filtered to only return specific data you’re looking for.
 */
export declare class Activity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get activity logs
     *
     * @remarks
     * Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges.
     *
     * **NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible.
     *
     * **Operation Types**
     * Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:
     *
     * | File Manager Value | API Value | Notes |
     * |-----|----|---|
     * | Connect | PASS | |
     * | Disconnect | EXIT | |
     * | Upload | STOR | |
     * | Download | RETR | |
     * | Delete | DELE | |
     * | Create Folder | MKD | |
     * | Rename | RNTO | |
     * | Move | MOVE | |
     * | Copy | COPY | |
     * | Compress | COMPR | |
     * | Extract | EXTRACT | |
     * | Shared Folders | SHARE | |
     * | Send Files | SEND | |
     * | Receive Files | RECV | |
     * | _N/A_ | EDIT\_SEND | Update send. Not shown in file manager |
     * | Update Share | EDIT\_SHARE| |
     * | Update Receive | EDIT\_RECV | |
     * | Delete Send | DELE\_SEND | |
     * | Delete Receive | DELE\_RECV | |
     * | Delete Share | DELE\_SHARE | |
     * | Create Notification | NOTIFY | |
     * | Update Notification | EDIT\_NTFY| |
     * | Delete Notification | DELE\_NTFY | |
     * | Create User | USER | |
     * | Update User | EDIT\_USER | |
     * | Delete User | DELE\_USER | |
     * | _N/A_ | DFA | Create direct link. Not shown in file manager |
     * | _N/A_ | EDIT\_DFA | Update direct link options. Not shown in file manager |
     * | _N/A_ | DELE\_DFA | Deactivate direct link. Not shown in file manager|
     *
     */
    getSessionLogs(req: operations.GetSessionLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionLogsResponse>;
    /**
     * Get webhook logs
     *
     * @remarks
     * Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.
     *
     * **NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible.
     *
     * **Event Types**
     *
     * Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:
     *
     * - resources.upload
     * - resources.download
     * - resources.delete
     * - resources.createFolder
     * - resources.rename
     * - resources.move
     * - resources.copy
     * - resources.compress
     * - resources.extract
     * - shares.formSubmit
     *
     */
    getWebhookLogs(req: operations.GetWebhookLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhookLogsResponse>;
}
