import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Form {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFormMessageById - Delete a receive form submission
     *
     * Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this.
     *
     * **Notes**:
     *
     * - Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete
     * - You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation
     * - It is not possible to un-delete data that is removed in this way
     *
    **/
    deleteFormMessageById(req: operations.DeleteFormMessageByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFormMessageByIdResponse>;
    /**
     * getFormById - Get receive folder form by Id
     *
     * Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings.
     *
     * Use the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder.
     *
     * **Note**
     *
     * If you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead.
     *
    **/
    getFormById(req: operations.GetFormByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFormByIdResponse>;
    /**
     * getFormByShareHash - Get receive folder form settings
     *
     * Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.
     *
     * Use the `include` parameter (with the value **share**) to also get the details of the associated receive folder.
     *
     * **Note**
     *
     * - If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead.
     *
    **/
    getFormByShareHash(req: operations.GetFormByShareHashRequest, config?: AxiosRequestConfig): Promise<operations.GetFormByShareHashResponse>;
    /**
     * getFormEntries - Get form data entries for a receive
     *
     * Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets.
     *
    **/
    getFormEntries(req: operations.GetFormEntriesRequest, config?: AxiosRequestConfig): Promise<operations.GetFormEntriesResponse>;
    /**
     * updateFormById - Updates a form with given parameters
     *
     * Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files.
     *
     * **Notes**
     *
     * *This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.
    **/
    updateFormById(req: operations.UpdateFormByIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFormByIdResponse>;
}
