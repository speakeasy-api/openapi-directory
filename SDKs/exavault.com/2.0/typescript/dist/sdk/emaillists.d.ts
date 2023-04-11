import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The email lists APIs allow you to manage email lists that can be used for speeding up actions within the ExaVault File Manager such as adding your marketing team, Tom, Jane, and Harry, to a shared folder in a single action instead of three.
 */
export declare class EmailLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new email list
     *
     * @remarks
     * Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.
     */
    addEmailList(req: operations.AddEmailListRequest, config?: AxiosRequestConfig): Promise<operations.AddEmailListResponse>;
    /**
     * Delete an email group with given id
     *
     * @remarks
     * Permanently delete an email group. This action is not reversible. We recommend making a user confirm this action before sending the API call.
     */
    deleteEmailListById(req: operations.DeleteEmailListByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmailListByIdResponse>;
    /**
     * Get individual email group
     *
     * @remarks
     * Retrieve all the details of a specific email list including it's name, when it was created and all the email addresses that belong to the group.
     */
    getEmailListById(req: operations.GetEmailListByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailListByIdResponse>;
    /**
     * Get all email groups
     *
     * @remarks
     * List all email groups for authenticated user
     */
    getEmailLists(req: operations.GetEmailListsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailListsResponse>;
    /**
     * Update an email group
     *
     * @remarks
     * Add or remove emails from an email list that can be used to send and share files with groups.
     *
     * **Notes**
     *
     * *This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.
     */
    updateEmailListById(req: operations.UpdateEmailListByIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmailListByIdResponse>;
}
