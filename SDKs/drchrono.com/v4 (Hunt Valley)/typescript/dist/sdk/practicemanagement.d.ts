import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create and manage practice management resources
 */
export declare class PracticeManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve or search inventory categories
     */
    inventoryCategoriesList(req: operations.InventoryCategoriesListRequest, security: operations.InventoryCategoriesListSecurity, config?: AxiosRequestConfig): Promise<operations.InventoryCategoriesListResponse>;
    /**
     * Retrieve an existing inventory category
     */
    inventoryCategoriesRead(req: operations.InventoryCategoriesReadRequest, security: operations.InventoryCategoriesReadSecurity, config?: AxiosRequestConfig): Promise<operations.InventoryCategoriesReadResponse>;
    /**
     * Create vaccine inventory
     */
    inventoryVaccinesCreate(req: operations.InventoryVaccinesCreateRequest, security: operations.InventoryVaccinesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.InventoryVaccinesCreateResponse>;
    /**
     * Retrieve or search vaccine inventories
     */
    inventoryVaccinesList(req: operations.InventoryVaccinesListRequest, security: operations.InventoryVaccinesListSecurity, config?: AxiosRequestConfig): Promise<operations.InventoryVaccinesListResponse>;
    /**
     * Retrieve an existing vaccine inventory
     */
    inventoryVaccinesRead(req: operations.InventoryVaccinesReadRequest, security: operations.InventoryVaccinesReadSecurity, config?: AxiosRequestConfig): Promise<operations.InventoryVaccinesReadResponse>;
    /**
     * Create messages in doctor's message center
     */
    messagesCreate(req: operations.MessagesCreateRequest, security: operations.MessagesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesCreateResponse>;
    /**
     * Delete an existing message in doctor's message center
     */
    messagesDelete(req: operations.MessagesDeleteRequest, security: operations.MessagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesDeleteResponse>;
    /**
     * Retrieve or search messages in doctor's message center
     */
    messagesList(req: operations.MessagesListRequest, security: operations.MessagesListSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesListResponse>;
    /**
     * Update an existing message in doctor's message center
     */
    messagesPartialUpdate(req: operations.MessagesPartialUpdateRequest, security: operations.MessagesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesPartialUpdateResponse>;
    /**
     * Retrieve an existing message in doctor's message center
     */
    messagesRead(req: operations.MessagesReadRequest, security: operations.MessagesReadSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesReadResponse>;
    /**
     * Update an existing message in doctor's message center
     */
    messagesUpdate(req: operations.MessagesUpdateRequest, security: operations.MessagesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesUpdateResponse>;
    /**
     * Add an exam room to the office
     */
    officesAddExamRoom(req: operations.OfficesAddExamRoomRequest, security: operations.OfficesAddExamRoomSecurity, config?: AxiosRequestConfig): Promise<operations.OfficesAddExamRoomResponse>;
    /**
     * Retrieve or search offices
     */
    officesList(req: operations.OfficesListRequest, security: operations.OfficesListSecurity, config?: AxiosRequestConfig): Promise<operations.OfficesListResponse>;
    /**
     * Update an existing office
     */
    officesPartialUpdate(req: operations.OfficesPartialUpdateRequest, security: operations.OfficesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.OfficesPartialUpdateResponse>;
    /**
     * Retrieve an existing office
     */
    officesRead(req: operations.OfficesReadRequest, security: operations.OfficesReadSecurity, config?: AxiosRequestConfig): Promise<operations.OfficesReadResponse>;
    /**
     * Update an existing office
     */
    officesUpdate(req: operations.OfficesUpdateRequest, security: operations.OfficesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.OfficesUpdateResponse>;
    /**
     * Create a task category
     */
    taskCategoriesCreate(req: operations.TaskCategoriesCreateRequest, security: operations.TaskCategoriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesCreateResponse>;
    /**
     * Retrieve or search task categories
     */
    taskCategoriesList(req: operations.TaskCategoriesListRequest, security: operations.TaskCategoriesListSecurity, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesListResponse>;
    /**
     * Update an existing task category
     */
    taskCategoriesPartialUpdate(req: operations.TaskCategoriesPartialUpdateRequest, security: operations.TaskCategoriesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesPartialUpdateResponse>;
    /**
     * Retrieve an existing task category
     */
    taskCategoriesRead(req: operations.TaskCategoriesReadRequest, security: operations.TaskCategoriesReadSecurity, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesReadResponse>;
    /**
     * Update an existing task category
     */
    taskCategoriesUpdate(req: operations.TaskCategoriesUpdateRequest, security: operations.TaskCategoriesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesUpdateResponse>;
    /**
     * Create a task note
     */
    taskNotesCreate(req: operations.TaskNotesCreateRequest, security: operations.TaskNotesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskNotesCreateResponse>;
    /**
     * Retrieve or search task notes
     */
    taskNotesList(req: operations.TaskNotesListRequest, security: operations.TaskNotesListSecurity, config?: AxiosRequestConfig): Promise<operations.TaskNotesListResponse>;
    /**
     * Update an existing task note
     */
    taskNotesPartialUpdate(req: operations.TaskNotesPartialUpdateRequest, security: operations.TaskNotesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskNotesPartialUpdateResponse>;
    /**
     * Retrieve an existing task note
     */
    taskNotesRead(req: operations.TaskNotesReadRequest, security: operations.TaskNotesReadSecurity, config?: AxiosRequestConfig): Promise<operations.TaskNotesReadResponse>;
    /**
     * Update an existing task note
     */
    taskNotesUpdate(req: operations.TaskNotesUpdateRequest, security: operations.TaskNotesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskNotesUpdateResponse>;
    /**
     * Create a task status
     */
    taskStatusesCreate(req: operations.TaskStatusesCreateRequest, security: operations.TaskStatusesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskStatusesCreateResponse>;
    /**
     * Retrieve or search task statuses
     */
    taskStatusesList(req: operations.TaskStatusesListRequest, security: operations.TaskStatusesListSecurity, config?: AxiosRequestConfig): Promise<operations.TaskStatusesListResponse>;
    /**
     * Update an existing task status
     */
    taskStatusesPartialUpdate(req: operations.TaskStatusesPartialUpdateRequest, security: operations.TaskStatusesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskStatusesPartialUpdateResponse>;
    /**
     * Retrieve an existing task status
     */
    taskStatusesRead(req: operations.TaskStatusesReadRequest, security: operations.TaskStatusesReadSecurity, config?: AxiosRequestConfig): Promise<operations.TaskStatusesReadResponse>;
    /**
     * Update an existing task status
     */
    taskStatusesUpdate(req: operations.TaskStatusesUpdateRequest, security: operations.TaskStatusesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskStatusesUpdateResponse>;
    /**
     * Create a task template
     */
    taskTemplatesCreate(req: operations.TaskTemplatesCreateRequest, security: operations.TaskTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesCreateResponse>;
    /**
     * Retrieve or search task templates
     */
    taskTemplatesList(req: operations.TaskTemplatesListRequest, security: operations.TaskTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesListResponse>;
    /**
     * Update an existing task template
     */
    taskTemplatesPartialUpdate(req: operations.TaskTemplatesPartialUpdateRequest, security: operations.TaskTemplatesPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesPartialUpdateResponse>;
    /**
     * Retrieve an existing task template
     */
    taskTemplatesRead(req: operations.TaskTemplatesReadRequest, security: operations.TaskTemplatesReadSecurity, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesReadResponse>;
    /**
     * Update an existing task template
     */
    taskTemplatesUpdate(req: operations.TaskTemplatesUpdateRequest, security: operations.TaskTemplatesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesUpdateResponse>;
    /**
     * Create a task
     */
    tasksCreate(req: operations.TasksCreateRequest, security: operations.TasksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TasksCreateResponse>;
    /**
     * Retrieve or search tasks
     */
    tasksList(req: operations.TasksListRequest, security: operations.TasksListSecurity, config?: AxiosRequestConfig): Promise<operations.TasksListResponse>;
    /**
     * Update an existing task
     */
    tasksPartialUpdate(req: operations.TasksPartialUpdateRequest, security: operations.TasksPartialUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TasksPartialUpdateResponse>;
    /**
     * Retrieve an existing task
     */
    tasksRead(req: operations.TasksReadRequest, security: operations.TasksReadSecurity, config?: AxiosRequestConfig): Promise<operations.TasksReadResponse>;
    /**
     * Update an existing task
     */
    tasksUpdate(req: operations.TasksUpdateRequest, security: operations.TasksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TasksUpdateResponse>;
}
