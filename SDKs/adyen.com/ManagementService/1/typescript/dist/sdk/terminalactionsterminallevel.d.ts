import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalActionsTerminalLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a terminal action
     *
     * @remarks
     * Schedules a [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) by specifying the action and the terminals that the action must be applied to.
     *
     * The following restrictions apply:
     * * You can schedule only one action at a time. For example, to install a new app version and remove an old app version, you have to make two API requests.
     * * The maximum number of terminals in a request is **100**. For example, to apply an action to 250 terminals, you have to divide the terminals over three API requests.
     * * If there is an error with one or more terminal IDs in the request, the action is scheduled for none of the terminals. You need to fix the error and try again.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal actions read and write
     */
    postTerminalsScheduleActions(req: shared.ScheduleTerminalActionsRequest, security: operations.PostTerminalsScheduleActionsSecurity, config?: AxiosRequestConfig): Promise<operations.PostTerminalsScheduleActionsResponse>;
}
