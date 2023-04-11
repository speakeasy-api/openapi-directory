import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    layoutApiGetList(config?: AxiosRequestConfig): Promise<operations.LayoutApiGetListResponse>;
    /**
     * Add a shipment to a given order
     */
    orderApiAddShipmentForm(req: operations.OrderApiAddShipmentFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiAddShipmentFormResponse>;
    /**
     * Add a shipment to a given order
     */
    orderApiAddShipmentJson(req: operations.OrderApiAddShipmentJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiAddShipmentJsonResponse>;
    /**
     * Add a shipment to a given order
     */
    orderApiAddShipmentRaw(req: operations.OrderApiAddShipmentRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiAddShipmentRawResponse>;
    /**
     * Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
     */
    orderApiCreateDeliveryNote(req: operations.OrderApiCreateDeliveryNoteRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiCreateDeliveryNoteResponse>;
    /**
     * Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
     */
    orderApiCreateInvoice(req: operations.OrderApiCreateInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiCreateInvoiceResponse>;
    /**
     * Find a single order by its external id (order number)
     */
    orderApiFind(req: operations.OrderApiFindRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiFindResponse>;
    /**
     * Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
     */
    orderApiGet(req: operations.OrderApiGetRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiGetResponse>;
    /**
     * Get a single order by its external order number
     */
    orderApiGetByExtRef(req: operations.OrderApiGetByExtRefRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiGetByExtRefResponse>;
    /**
     * Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
     */
    orderApiGetInvoiceList(req: operations.OrderApiGetInvoiceListRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiGetInvoiceListResponse>;
    /**
     * Get a list of all orders optionally filtered by date
     */
    orderApiGetList(req: operations.OrderApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiGetListResponse>;
    /**
     * Returns a list of fields which can be updated with the orders/{id} patch call
     */
    orderApiGetPatchableFields(config?: AxiosRequestConfig): Promise<operations.OrderApiGetPatchableFieldsResponse>;
    /**
     * Parses a text and replaces all placeholders
     */
    orderApiParsePlaceholdersForm(req: operations.OrderApiParsePlaceholdersFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiParsePlaceholdersFormResponse>;
    /**
     * Parses a text and replaces all placeholders
     */
    orderApiParsePlaceholdersJson(req: operations.OrderApiParsePlaceholdersJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiParsePlaceholdersJsonResponse>;
    /**
     * Parses a text and replaces all placeholders
     */
    orderApiParsePlaceholdersRaw(req: operations.OrderApiParsePlaceholdersRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiParsePlaceholdersRawResponse>;
    /**
     * Updates one or more fields of an order
     */
    orderApiPatchOrder(req: operations.OrderApiPatchOrderRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiPatchOrderResponse>;
    /**
     * Creates a new order in the Billbee account
     *
     * @remarks
     * To create an order POST an JSON object to the orders endpoint with the shown properties.
     * Not all properties are required.
     */
    orderApiPostNewOrderForm(req: operations.OrderApiPostNewOrderFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiPostNewOrderFormResponse>;
    /**
     * Creates a new order in the Billbee account
     *
     * @remarks
     * To create an order POST an JSON object to the orders endpoint with the shown properties.
     * Not all properties are required.
     */
    orderApiPostNewOrderJson(req: operations.OrderApiPostNewOrderJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiPostNewOrderJsonResponse>;
    /**
     * Creates a new order in the Billbee account
     *
     * @remarks
     * To create an order POST an JSON object to the orders endpoint with the shown properties.
     * Not all properties are required.
     */
    orderApiPostNewOrderRaw(req: operations.OrderApiPostNewOrderRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiPostNewOrderRawResponse>;
    /**
     * Sends a message to the buyer
     */
    orderApiSendMessageForm(req: operations.OrderApiSendMessageFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiSendMessageFormResponse>;
    /**
     * Sends a message to the buyer
     */
    orderApiSendMessageJson(req: operations.OrderApiSendMessageJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiSendMessageJsonResponse>;
    /**
     * Sends a message to the buyer
     */
    orderApiSendMessageRaw(req: operations.OrderApiSendMessageRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiSendMessageRawResponse>;
    /**
     * Attach one or more tags to an order
     *
     * @remarks
     * When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.
     */
    orderApiTagsCreateForm(req: operations.OrderApiTagsCreateFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTagsCreateFormResponse>;
    /**
     * Attach one or more tags to an order
     *
     * @remarks
     * When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.
     */
    orderApiTagsCreateJson(req: operations.OrderApiTagsCreateJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTagsCreateJsonResponse>;
    /**
     * Attach one or more tags to an order
     *
     * @remarks
     * When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.
     */
    orderApiTagsCreateRaw(req: operations.OrderApiTagsCreateRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTagsCreateRawResponse>;
    /**
     * Sets the tags attached to an order
     *
     * @remarks
     * All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.
     */
    orderApiTagsUpdateForm(req: operations.OrderApiTagsUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTagsUpdateFormResponse>;
    /**
     * Sets the tags attached to an order
     *
     * @remarks
     * All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.
     */
    orderApiTagsUpdateJson(req: operations.OrderApiTagsUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTagsUpdateJsonResponse>;
    /**
     * Sets the tags attached to an order
     *
     * @remarks
     * All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.
     */
    orderApiTagsUpdateRaw(req: operations.OrderApiTagsUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTagsUpdateRawResponse>;
    /**
     * Triggers a rule event
     */
    orderApiTriggerEventForm(req: operations.OrderApiTriggerEventFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTriggerEventFormResponse>;
    /**
     * Triggers a rule event
     */
    orderApiTriggerEventJson(req: operations.OrderApiTriggerEventJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTriggerEventJsonResponse>;
    /**
     * Triggers a rule event
     */
    orderApiTriggerEventRaw(req: operations.OrderApiTriggerEventRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiTriggerEventRawResponse>;
    /**
     * Changes the main state of a single order
     *
     * @remarks
     * ### REMARKS ###
     * Use this call to change the state of an order to i.e. paid or sent.
     *
     * The state is transfered to the external shop/marketplace if configured.
     * This is the list of known states:
     * - 1: ordered
     * - 2: confirmed
     * - 3: paid
     * - 4: shipped
     * - 5: reclamation
     * - 6: deleted
     * - 7: closed
     * - 8: canceled
     * - 9: archived
     * - 10: not used
     * - 11: demand note 1
     * - 12: demand note 2
     * - 13: packed
     * - 14: offered
     * - 15: payment reminder
     * - 16: fulfilling
     */
    orderApiUpdateStateForm(req: operations.OrderApiUpdateStateFormRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiUpdateStateFormResponse>;
    /**
     * Changes the main state of a single order
     *
     * @remarks
     * ### REMARKS ###
     * Use this call to change the state of an order to i.e. paid or sent.
     *
     * The state is transfered to the external shop/marketplace if configured.
     * This is the list of known states:
     * - 1: ordered
     * - 2: confirmed
     * - 3: paid
     * - 4: shipped
     * - 5: reclamation
     * - 6: deleted
     * - 7: closed
     * - 8: canceled
     * - 9: archived
     * - 10: not used
     * - 11: demand note 1
     * - 12: demand note 2
     * - 13: packed
     * - 14: offered
     * - 15: payment reminder
     * - 16: fulfilling
     */
    orderApiUpdateStateJson(req: operations.OrderApiUpdateStateJsonRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiUpdateStateJsonResponse>;
    /**
     * Changes the main state of a single order
     *
     * @remarks
     * ### REMARKS ###
     * Use this call to change the state of an order to i.e. paid or sent.
     *
     * The state is transfered to the external shop/marketplace if configured.
     * This is the list of known states:
     * - 1: ordered
     * - 2: confirmed
     * - 3: paid
     * - 4: shipped
     * - 5: reclamation
     * - 6: deleted
     * - 7: closed
     * - 8: canceled
     * - 9: archived
     * - 10: not used
     * - 11: demand note 1
     * - 12: demand note 2
     * - 13: packed
     * - 14: offered
     * - 15: payment reminder
     * - 16: fulfilling
     */
    orderApiUpdateStateRaw(req: operations.OrderApiUpdateStateRawRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiUpdateStateRawResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchForm(req: shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel, config?: AxiosRequestConfig): Promise<operations.SearchSearchFormResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchJson(req: shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel, config?: AxiosRequestConfig): Promise<operations.SearchSearchJsonResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.SearchSearchRawResponse>;
}
