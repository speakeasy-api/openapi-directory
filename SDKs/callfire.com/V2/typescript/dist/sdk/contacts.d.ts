import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add contacts to a contact list
     *
     * @remarks
     * Adds contacts to a contact list. Available contact sources are: list of the contact entities, list of ids of existing contacts in user's account, list of phone numbers in E.164 format (11-digits)
     */
    addContactListItems(req: operations.AddContactListItemsRequest, security: operations.AddContactListItemsSecurity, config?: AxiosRequestConfig): Promise<operations.AddContactListItemsResponse>;
    /**
     * Add do not contact (dnc) numbers
     *
     * @remarks
     * Add or update a list of Do Not Contact (DNC) contact entries. Can toggle whether the DNCs are enabled for calls/texts.
     */
    addDoNotContacts(req: shared.AddDoNotContactRequest, security: operations.AddDoNotContactsSecurity, config?: AxiosRequestConfig): Promise<operations.AddDoNotContactsResponse>;
    /**
     * Create contact lists
     *
     * @remarks
     * Creates a contact list for use with campaigns using 1 of 3 inputs. A List of Contact objects, a list of String E.164 numbers, or a list of CallFire contactIds can be used as the data source for the created contact list. After contact list is added into the CallFire system, contact lists goes through seven system safeguards that check the accuracy and consistency of the data. For example, our system checks that contact number is formatted correctly, is valid, is not duplicated in another contact list, or is not added on a specific DNC list. You can configure to keep/merge or remove contacts which do not complies these rules. If contacts were not added to a contact list after the validation, this means the data needs to be properly formatted and corrected before calling this API
     */
    createContactList(req: operations.CreateContactListRequest, security: operations.CreateContactListSecurity, config?: AxiosRequestConfig): Promise<operations.CreateContactListResponse>;
    /**
     * Create contact list from file
     *
     * @remarks
     * Creates a contact list to be used with campaigns through uploading a .csv file. Returns the id of created list
     */
    createContactListFromFile(req: operations.CreateContactListFromFileRequestBody, security: operations.CreateContactListFromFileSecurity, config?: AxiosRequestConfig): Promise<operations.CreateContactListFromFileResponse>;
    /**
     * Create contacts
     *
     * @remarks
     * Creates contacts in CallFire system. Only values from the next list can be used as external system parameter in contact creation: **NATION_BUILDER, SALES_FORCE_CONTACTS, SALES_FORCE_LEADS, SALES_FORCE_REPORTS, ZOHO, MAIL_CHIMP**. See [contacts validation rules](https://www.callfire.com/help/docs/getting-started/managing-contacts/validating-contacts#section1)
     */
    createContacts(req: shared.Contact[], security: operations.CreateContactsSecurity, config?: AxiosRequestConfig): Promise<operations.CreateContactsResponse>;
    /**
     * Delete a contact
     *
     * @remarks
     * Deletes a contact instance from account
     */
    deleteContact(req: operations.DeleteContactRequest, security: operations.DeleteContactSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteContactResponse>;
    /**
     * Delete a contact list
     *
     * @remarks
     * Deletes a contact list, included contacts will not be deleted.
     */
    deleteContactList(req: operations.DeleteContactListRequest, security: operations.DeleteContactListSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteContactListResponse>;
    /**
     * Delete do not contact (dnc) number. If number contains commas treat as list of numbers
     *
     * @remarks
     * Delete a Do Not Contact (DNC) contact entry.
     */
    deleteDoNotContact(req: operations.DeleteDoNotContactRequest, security: operations.DeleteDoNotContactSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDoNotContactResponse>;
    /**
     * Delete do not contact (dnc) numbers contained in source.
     *
     * @remarks
     * Delete Do Not Contact (DNC) contact entries contained in source.
     */
    deleteDoNotContactsBySource(req: operations.DeleteDoNotContactsBySourceRequest, security: operations.DeleteDoNotContactsBySourceSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDoNotContactsBySourceResponse>;
    /**
     * Find contact lists
     *
     * @remarks
     * Searches for all contact lists which are available for the current user. Returns a paged list of contact lists
     */
    findContactLists(req: operations.FindContactListsRequest, security: operations.FindContactListsSecurity, config?: AxiosRequestConfig): Promise<operations.FindContactListsResponse>;
    /**
     * Find contacts
     *
     * @remarks
     * Find user's contacts by id, contact list, or on any property name. Returns a paged list of contacts
     */
    findContacts(req: operations.FindContactsRequest, security: operations.FindContactsSecurity, config?: AxiosRequestConfig): Promise<operations.FindContactsResponse>;
    /**
     * Find do not contact (dnc) items
     *
     * @remarks
     * Searches for all Do Not Contact (DNC) objects created by user. These DoNotContact entries only affect calls/texts/campaigns on this account. Returns a paged list of DoNotContact objects
     */
    findDoNotContacts(req: operations.FindDoNotContactsRequest, security: operations.FindDoNotContactsSecurity, config?: AxiosRequestConfig): Promise<operations.FindDoNotContactsResponse>;
    /**
     * Find a specific contact
     *
     * @remarks
     * Returns a Contact instance for a given contact id. Deleted contacts can be still retrieved but will be marked as deleted. Deleted contacts will not be shown in search request.
     */
    getContact(req: operations.GetContactRequest, security: operations.GetContactSecurity, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * Find a contact's history
     *
     * @remarks
     * Searches for all texts and calls attributed to a contact. Returns a list of calls and texts a contact has been involved with
     */
    getContactHistory(req: operations.GetContactHistoryRequest, security: operations.GetContactHistorySecurity, config?: AxiosRequestConfig): Promise<operations.GetContactHistoryResponse>;
    /**
     * Find a specific contact list
     *
     * @remarks
     * Returns a single ContactList instance for a given contact list id
     */
    getContactList(req: operations.GetContactListRequest, security: operations.GetContactListSecurity, config?: AxiosRequestConfig): Promise<operations.GetContactListResponse>;
    /**
     * Find contacts in a contact list
     *
     * @remarks
     * Searches for all entries in a contact list with specified id. Returns a paged list of contact entries
     */
    getContactListItems(req: operations.GetContactListItemsRequest, security: operations.GetContactListItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetContactListItemsResponse>;
    /**
     * Get do not contact (dnc)
     *
     * @remarks
     * Get Do Not Contact (DNC) object create by user. This DoNotContact entry only affects calls/texts/campaigns on this account.
     */
    getDoNotContact(req: operations.GetDoNotContactRequest, security: operations.GetDoNotContactSecurity, config?: AxiosRequestConfig): Promise<operations.GetDoNotContactResponse>;
    /**
     * Find universal do not contacts (udnc) associated with toNumber
     *
     * @remarks
     * Searches for a UniversalDoNotContact object for a given phone number. Shows whether inbound/outbound actions are allowed for a given number
     */
    getUniversalDoNotContacts(req: operations.GetUniversalDoNotContactsRequest, security: operations.GetUniversalDoNotContactsSecurity, config?: AxiosRequestConfig): Promise<operations.GetUniversalDoNotContactsResponse>;
    /**
     * Delete a contact from a contact list
     *
     * @remarks
     * Deletes a single contact from a contact list
     */
    removeContactListItem(req: operations.RemoveContactListItemRequest, security: operations.RemoveContactListItemSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveContactListItemResponse>;
    /**
     * Delete contacts from a contact list
     *
     * @remarks
     * Deletes contacts from a contact list. List the contact ids in request to delete multiple contacts with one request.
     */
    removeContactListItems(req: operations.RemoveContactListItemsRequest, security: operations.RemoveContactListItemsSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveContactListItemsResponse>;
    /**
     * Update a contact
     *
     * @remarks
     * Updates a single contact instance with id specified. See [contact validation rules](https://www.callfire.com/help/docs/getting-started/managing-contacts/validating-contacts#section1)
     */
    updateContact(req: operations.UpdateContactRequest, security: operations.UpdateContactSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateContactResponse>;
    /**
     * Update a contact list
     *
     * @remarks
     * Updates contact list instance.
     */
    updateContactList(req: operations.UpdateContactListRequest, security: operations.UpdateContactListSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateContactListResponse>;
    /**
     * Update an individual do not contact (dnc) number
     *
     * @remarks
     * Update a Do Not Contact (DNC) contact entry. Can toggle whether the DNC is enabled for calls/texts.
     */
    updateDoNotContact(req: operations.UpdateDoNotContactRequest, security: operations.UpdateDoNotContactSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateDoNotContactResponse>;
}
