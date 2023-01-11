import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PracticeManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * inventoryCategoriesList - Retrieve or search inventory categories
    **/
    inventoryCategoriesList(req: operations.InventoryCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.InventoryCategoriesListResponse>;
    /**
     * inventoryCategoriesRead - Retrieve an existing inventory category
    **/
    inventoryCategoriesRead(req: operations.InventoryCategoriesReadRequest, config?: AxiosRequestConfig): Promise<operations.InventoryCategoriesReadResponse>;
    /**
     * inventoryVaccinesCreate - Create vaccine inventory
    **/
    inventoryVaccinesCreate(req: operations.InventoryVaccinesCreateRequest, config?: AxiosRequestConfig): Promise<operations.InventoryVaccinesCreateResponse>;
    /**
     * inventoryVaccinesList - Retrieve or search vaccine inventories
    **/
    inventoryVaccinesList(req: operations.InventoryVaccinesListRequest, config?: AxiosRequestConfig): Promise<operations.InventoryVaccinesListResponse>;
    /**
     * inventoryVaccinesRead - Retrieve an existing vaccine inventory
    **/
    inventoryVaccinesRead(req: operations.InventoryVaccinesReadRequest, config?: AxiosRequestConfig): Promise<operations.InventoryVaccinesReadResponse>;
    /**
     * messagesCreate - Create messages in doctor's message center
    **/
    messagesCreate(req: operations.MessagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.MessagesCreateResponse>;
    /**
     * messagesDelete - Delete an existing message in doctor's message center
    **/
    messagesDelete(req: operations.MessagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MessagesDeleteResponse>;
    /**
     * messagesList - Retrieve or search messages in doctor's message center
    **/
    messagesList(req: operations.MessagesListRequest, config?: AxiosRequestConfig): Promise<operations.MessagesListResponse>;
    /**
     * messagesPartialUpdate - Update an existing message in doctor's message center
    **/
    messagesPartialUpdate(req: operations.MessagesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MessagesPartialUpdateResponse>;
    /**
     * messagesRead - Retrieve an existing message in doctor's message center
    **/
    messagesRead(req: operations.MessagesReadRequest, config?: AxiosRequestConfig): Promise<operations.MessagesReadResponse>;
    /**
     * messagesUpdate - Update an existing message in doctor's message center
    **/
    messagesUpdate(req: operations.MessagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MessagesUpdateResponse>;
    /**
     * officesAddExamRoom - Add an exam room to the office
    **/
    officesAddExamRoom(req: operations.OfficesAddExamRoomRequest, config?: AxiosRequestConfig): Promise<operations.OfficesAddExamRoomResponse>;
    /**
     * officesList - Retrieve or search offices
    **/
    officesList(req: operations.OfficesListRequest, config?: AxiosRequestConfig): Promise<operations.OfficesListResponse>;
    /**
     * officesPartialUpdate - Update an existing office
    **/
    officesPartialUpdate(req: operations.OfficesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OfficesPartialUpdateResponse>;
    /**
     * officesRead - Retrieve an existing office
    **/
    officesRead(req: operations.OfficesReadRequest, config?: AxiosRequestConfig): Promise<operations.OfficesReadResponse>;
    /**
     * officesUpdate - Update an existing office
    **/
    officesUpdate(req: operations.OfficesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OfficesUpdateResponse>;
    /**
     * taskCategoriesCreate - Create a task category
    **/
    taskCategoriesCreate(req: operations.TaskCategoriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesCreateResponse>;
    /**
     * taskCategoriesList - Retrieve or search task categories
    **/
    taskCategoriesList(req: operations.TaskCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesListResponse>;
    /**
     * taskCategoriesPartialUpdate - Update an existing task category
    **/
    taskCategoriesPartialUpdate(req: operations.TaskCategoriesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesPartialUpdateResponse>;
    /**
     * taskCategoriesRead - Retrieve an existing task category
    **/
    taskCategoriesRead(req: operations.TaskCategoriesReadRequest, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesReadResponse>;
    /**
     * taskCategoriesUpdate - Update an existing task category
    **/
    taskCategoriesUpdate(req: operations.TaskCategoriesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskCategoriesUpdateResponse>;
    /**
     * taskNotesCreate - Create a task note
    **/
    taskNotesCreate(req: operations.TaskNotesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TaskNotesCreateResponse>;
    /**
     * taskNotesList - Retrieve or search task notes
    **/
    taskNotesList(req: operations.TaskNotesListRequest, config?: AxiosRequestConfig): Promise<operations.TaskNotesListResponse>;
    /**
     * taskNotesPartialUpdate - Update an existing task note
    **/
    taskNotesPartialUpdate(req: operations.TaskNotesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskNotesPartialUpdateResponse>;
    /**
     * taskNotesRead - Retrieve an existing task note
    **/
    taskNotesRead(req: operations.TaskNotesReadRequest, config?: AxiosRequestConfig): Promise<operations.TaskNotesReadResponse>;
    /**
     * taskNotesUpdate - Update an existing task note
    **/
    taskNotesUpdate(req: operations.TaskNotesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskNotesUpdateResponse>;
    /**
     * taskStatusesCreate - Create a task status
    **/
    taskStatusesCreate(req: operations.TaskStatusesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TaskStatusesCreateResponse>;
    /**
     * taskStatusesList - Retrieve or search task statuses
    **/
    taskStatusesList(req: operations.TaskStatusesListRequest, config?: AxiosRequestConfig): Promise<operations.TaskStatusesListResponse>;
    /**
     * taskStatusesPartialUpdate - Update an existing task status
    **/
    taskStatusesPartialUpdate(req: operations.TaskStatusesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskStatusesPartialUpdateResponse>;
    /**
     * taskStatusesRead - Retrieve an existing task status
    **/
    taskStatusesRead(req: operations.TaskStatusesReadRequest, config?: AxiosRequestConfig): Promise<operations.TaskStatusesReadResponse>;
    /**
     * taskStatusesUpdate - Update an existing task status
    **/
    taskStatusesUpdate(req: operations.TaskStatusesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskStatusesUpdateResponse>;
    /**
     * taskTemplatesCreate - Create a task template
    **/
    taskTemplatesCreate(req: operations.TaskTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesCreateResponse>;
    /**
     * taskTemplatesList - Retrieve or search task templates
    **/
    taskTemplatesList(req: operations.TaskTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesListResponse>;
    /**
     * taskTemplatesPartialUpdate - Update an existing task template
    **/
    taskTemplatesPartialUpdate(req: operations.TaskTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesPartialUpdateResponse>;
    /**
     * taskTemplatesRead - Retrieve an existing task template
    **/
    taskTemplatesRead(req: operations.TaskTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesReadResponse>;
    /**
     * taskTemplatesUpdate - Update an existing task template
    **/
    taskTemplatesUpdate(req: operations.TaskTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskTemplatesUpdateResponse>;
    /**
     * tasksCreate - Create a task
    **/
    tasksCreate(req: operations.TasksCreateRequest, config?: AxiosRequestConfig): Promise<operations.TasksCreateResponse>;
    /**
     * tasksList - Retrieve or search tasks
    **/
    tasksList(req: operations.TasksListRequest, config?: AxiosRequestConfig): Promise<operations.TasksListResponse>;
    /**
     * tasksPartialUpdate - Update an existing task
    **/
    tasksPartialUpdate(req: operations.TasksPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TasksPartialUpdateResponse>;
    /**
     * tasksRead - Retrieve an existing task
    **/
    tasksRead(req: operations.TasksReadRequest, config?: AxiosRequestConfig): Promise<operations.TasksReadResponse>;
    /**
     * tasksUpdate - Update an existing task
    **/
    tasksUpdate(req: operations.TasksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TasksUpdateResponse>;
}
