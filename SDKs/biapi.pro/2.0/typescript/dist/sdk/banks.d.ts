import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Banks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the supplied category
     */
    deleteBanksCategoriesIdCategory(req: operations.DeleteBanksCategoriesIdCategoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBanksCategoriesIdCategoryResponse>;
    /**
     * Delete a particular key-value pair on a transaction.
     */
    deleteCategoriesKeywordsIdKeyword(req: operations.DeleteCategoriesKeywordsIdKeywordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCategoriesKeywordsIdKeywordResponse>;
    /**
     * Disable a connection source
     *
     * @remarks
     * This will make it so the specified source will not be synchronized anymore.<br><br>
     */
    deleteConnectionsIdConnectionSourcesIdSource(req: operations.DeleteConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Delete a single Logo object.
     */
    deleteConnectorsIdConnectorLogosIdLogo(req: operations.DeleteConnectorsIdConnectorLogosIdLogoRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorsIdConnectorLogosIdLogoResponse>;
    /**
     * Delete a clustered transaction
     */
    deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster(req: operations.DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse>;
    /**
     * Delete a user-created transaction category
     */
    deleteUsersIdUserCategoriesFullIdFull(req: operations.DeleteUsersIdUserCategoriesFullIdFullRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserCategoriesFullIdFullResponse>;
    /**
     * Delete all connections
     */
    deleteUsersIdUserConnections(req: operations.DeleteUsersIdUserConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsResponse>;
    /**
     * Delete a connection.
     *
     * @remarks
     * This endpoint deletes a connection and all related accounts and transactions.<br><br>
     */
    deleteUsersIdUserConnectionsIdConnection(req: operations.DeleteUsersIdUserConnectionsIdConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionResponse>;
    /**
     * Delete all accounts
     */
    deleteUsersIdUserConnectionsIdConnectionAccounts(req: operations.DeleteUsersIdUserConnectionsIdConnectionAccountsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionAccountsResponse>;
    /**
     * Delete an account.
     *
     * @remarks
     * It deletes a specific account.<br><br>
     */
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount(req: operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountResponse>;
    /**
     * Delete transactions
     */
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(req: operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse>;
    /**
     * Delete all arbitrary key-value pairs of a transaction
     */
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(req: operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse>;
    /**
     * Delete a particular key-value pair on a transaction.
     */
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation(req: operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationResponse>;
    /**
     * Delete a clustered transaction
     */
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster(req: operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse>;
    /**
     * Disable a connection source
     *
     * @remarks
     * This will make it so the specified source will not be synchronized anymore.<br><br>
     */
    deleteUsersIdUserConnectionsIdConnectionSourcesIdSource(req: operations.DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Delete a clustered transaction
     */
    deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster(req: operations.DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterResponse>;
    /**
     * Delete a clustered transaction
     */
    deleteUsersIdUserTransactionsclustersIdTransactionscluster(req: operations.DeleteUsersIdUserTransactionsclustersIdTransactionsclusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserTransactionsclustersIdTransactionsclusterResponse>;
    /**
     * Get account types
     */
    getAccountTypes(req: operations.GetAccountTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTypesResponse>;
    /**
     * Get an account type
     */
    getAccountTypesIdAccountType(req: operations.GetAccountTypesIdAccountTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTypesIdAccountTypeResponse>;
    /**
     * Get list of connectors
     */
    getBanks(req: operations.GetBanksRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksResponse>;
    /**
     * Get a connector
     */
    getBanksIdBank(req: operations.GetBanksIdBankRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdBankResponse>;
    /**
     * Get a subset of id_connection for a given bank. Different selection methode are possible
     *
     * @remarks
     * By default, it selects a set of 3 connections with the 'diversity' method<br><br>
     */
    getBanksIdConnectorConnections(req: operations.GetBanksIdConnectorConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorConnectionsResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getBanksIdConnectorLogos(req: operations.GetBanksIdConnectorLogosRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorLogosResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getBanksIdConnectorLogosMain(req: operations.GetBanksIdConnectorLogosMainRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorLogosMainResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getBanksIdConnectorLogosThumbnail(req: operations.GetBanksIdConnectorLogosThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorLogosThumbnailResponse>;
    /**
     * Get list of connector sources
     */
    getBanksIdConnectorSources(req: operations.GetBanksIdConnectorSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorSourcesResponse>;
    /**
     * Get fields specific to a domain and a source
     */
    getBanksIdConnectorSourcesIdConnectorSourceFields(req: operations.GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorSourcesIdConnectorSourceFieldsResponse>;
    /**
     * Get the connector source
     */
    getBanksIdConnectorSourcesIdSource(req: operations.GetBanksIdConnectorSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorSourcesIdSourceResponse>;
    /**
     * Get all categories
     *
     * @remarks
     * Ressource to get all existing categories<br><br>
     */
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * Get connections without a user
     */
    getConnections(req: operations.GetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsResponse>;
    /**
     * Get connection logs
     *
     * @remarks
     * Get logs about connections.<br><br>
     */
    getConnectionsIdConnectionLogs(req: operations.GetConnectionsIdConnectionLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsIdConnectionLogsResponse>;
    /**
     * Get connection sources
     */
    getConnectionsIdConnectionSources(req: operations.GetConnectionsIdConnectionSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsIdConnectionSourcesResponse>;
    /**
     * Get list of connectors
     */
    getConnectors(req: operations.GetConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsResponse>;
    /**
     * Get a connector
     */
    getConnectorsIdConnector(req: operations.GetConnectorsIdConnectorRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getConnectorsIdConnectorLogos(req: operations.GetConnectorsIdConnectorLogosRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorLogosResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getConnectorsIdConnectorLogosMain(req: operations.GetConnectorsIdConnectorLogosMainRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorLogosMainResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getConnectorsIdConnectorLogosThumbnail(req: operations.GetConnectorsIdConnectorLogosThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorLogosThumbnailResponse>;
    /**
     * Get list of connector sources
     */
    getConnectorsIdConnectorSources(req: operations.GetConnectorsIdConnectorSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorSourcesResponse>;
    /**
     * Get fields specific to a domain and a source
     */
    getConnectorsIdConnectorSourcesIdConnectorSourceFields(req: operations.GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsResponse>;
    /**
     * Get the connector source
     */
    getConnectorsIdConnectorSourcesIdSource(req: operations.GetConnectorsIdConnectorSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorSourcesIdSourceResponse>;
    /**
     * Get invoicing data for a given period (default is the current month).
     *
     * @remarks
     * You can get all the invoicing data or just specific ones by using the available parameters.<br><br>If no parameters are specified, no invoicing data is returned.<br><br>
     */
    getInvoicing(req: operations.GetInvoicingRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicingResponse>;
    /**
     * Get connection logs
     *
     * @remarks
     * Get logs about connections.<br><br>
     */
    getLogs(req: operations.GetLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetLogsResponse>;
    /**
     * Get list of connectors
     */
    getProviders(req: operations.GetProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersResponse>;
    /**
     * Get a random subset of provider's id_connection
     *
     * @remarks
     * By default, it selects a set of 3 connections.<br><br>
     */
    getProvidersIdConnectorConnections(req: operations.GetProvidersIdConnectorConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorConnectionsResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getProvidersIdConnectorLogos(req: operations.GetProvidersIdConnectorLogosRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorLogosResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getProvidersIdConnectorLogosMain(req: operations.GetProvidersIdConnectorLogosMainRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorLogosMainResponse>;
    /**
     * Get all links to the files associated with this connector.
     *
     * @remarks
     * This endpoint returns all links to files associated with this connector.<br><br>
     */
    getProvidersIdConnectorLogosThumbnail(req: operations.GetProvidersIdConnectorLogosThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorLogosThumbnailResponse>;
    /**
     * Get list of connector sources
     */
    getProvidersIdConnectorSources(req: operations.GetProvidersIdConnectorSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorSourcesResponse>;
    /**
     * Get fields specific to a domain and a source
     */
    getProvidersIdConnectorSourcesIdConnectorSourceFields(req: operations.GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorSourcesIdConnectorSourceFieldsResponse>;
    /**
     * Get the connector source
     */
    getProvidersIdConnectorSourcesIdSource(req: operations.GetProvidersIdConnectorSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorSourcesIdSourceResponse>;
    /**
     * Get a connector
     */
    getProvidersIdProvider(req: operations.GetProvidersIdProviderRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdProviderResponse>;
    /**
     * Get details on all psd2 registrations
     */
    getPsd2Registrations(req: operations.GetPsd2RegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPsd2RegistrationsResponse>;
    /**
     * Get details for a given psd2 registration
     */
    getPsd2RegistrationsIdPsd2Registration(req: operations.GetPsd2RegistrationsIdPsd2RegistrationRequest, config?: AxiosRequestConfig): Promise<operations.GetPsd2RegistrationsIdPsd2RegistrationResponse>;
    /**
     * Get psd2 registration logs.
     *
     * @remarks
     * Get logs of psd2 registration. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>
     */
    getPsd2RegistrationsIdPsd2registrationLogs(req: operations.GetPsd2RegistrationsIdPsd2registrationLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetPsd2RegistrationsIdPsd2registrationLogsResponse>;
    /**
     * Get account types
     */
    getUsersIdUserAccountTypes(req: operations.GetUsersIdUserAccountTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserAccountTypesResponse>;
    /**
     * Get an account type
     */
    getUsersIdUserAccountTypesIdAccountType(req: operations.GetUsersIdUserAccountTypesIdAccountTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserAccountTypesIdAccountTypeResponse>;
    /**
     * Get the category
     *
     * @remarks
     * Ressource to get categories for the user's transactions<br><br>
     */
    getUsersIdUserAccountsIdAccountCategories(req: operations.GetUsersIdUserAccountsIdAccountCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserAccountsIdAccountCategoriesResponse>;
    /**
     * Get clustered transactions
     */
    getUsersIdUserAccountsIdAccountTransactionsclusters(req: operations.GetUsersIdUserAccountsIdAccountTransactionsclustersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserAccountsIdAccountTransactionsclustersResponse>;
    /**
     * Get alerts
     */
    getUsersIdUserAlerts(req: operations.GetUsersIdUserAlertsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserAlertsResponse>;
    /**
     * Get the category
     *
     * @remarks
     * Ressource to get categories for the user's transactions<br><br>
     */
    getUsersIdUserCategories(req: operations.GetUsersIdUserCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserCategoriesResponse>;
    /**
     * Get the category
     *
     * @remarks
     * Ressource to get categories<br><br>
     */
    getUsersIdUserCategoriesFull(req: operations.GetUsersIdUserCategoriesFullRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserCategoriesFullResponse>;
    /**
     * Get connections
     */
    getUsersIdUserConnections(req: operations.GetUsersIdUserConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsResponse>;
    /**
     * Get accounts list.
     */
    getUsersIdUserConnectionsIdConnectionAccounts(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsResponse>;
    /**
     * Get the category
     *
     * @remarks
     * Ressource to get categories for the user's transactions<br><br>
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesResponse>;
    /**
     * Get deltas of accounts
     *
     * @remarks
     * Get account delta between sums of transactions and difference of account balance for the given period.<br><br>
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaResponse>;
    /**
     * Get accounts logs.
     *
     * @remarks
     * Get logs of account. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsResponse>;
    /**
     * Get account sources
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesResponse>;
    /**
     * Get transactions
     *
     * @remarks
     * Get list of transactions.<br><br>By default, it selects transactions for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse>;
    /**
     * List all arbitrary key-value pairs on a transaction
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse>;
    /**
     * Get a particular arbitrary key-value pair on a transaction
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationResponse>;
    /**
     * Get clustered transactions
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters(req: operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersResponse>;
    /**
     * Get connection additionnal informations
     *
     * @remarks
     * <br><br>
     */
    getUsersIdUserConnectionsIdConnectionInformations(req: operations.GetUsersIdUserConnectionsIdConnectionInformationsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionInformationsResponse>;
    /**
     * Get connection logs
     *
     * @remarks
     * Get logs about connections.<br><br>
     */
    getUsersIdUserConnectionsIdConnectionLogs(req: operations.GetUsersIdUserConnectionsIdConnectionLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionLogsResponse>;
    /**
     * Get connection sources
     */
    getUsersIdUserConnectionsIdConnectionSources(req: operations.GetUsersIdUserConnectionsIdConnectionSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionSourcesResponse>;
    /**
     * Get clustered transactions
     */
    getUsersIdUserConnectionsIdConnectionTransactionsclusters(req: operations.GetUsersIdUserConnectionsIdConnectionTransactionsclustersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionTransactionsclustersResponse>;
    /**
     * Get forecast
     */
    getUsersIdUserForecast(req: operations.GetUsersIdUserForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserForecastResponse>;
    /**
     * Get connection logs
     *
     * @remarks
     * Get logs about connections.<br><br>
     */
    getUsersIdUserLogs(req: operations.GetUsersIdUserLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserLogsResponse>;
    /**
     * Get clustered transactions
     */
    getUsersIdUserTransactionsclusters(req: operations.GetUsersIdUserTransactionsclustersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserTransactionsclustersResponse>;
    /**
     * Create bank categories
     *
     * @remarks
     * It requires the name of the category to be created<br><br>
     */
    postBanksCategories(req: operations.PostBanksCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostBanksCategoriesResponse>;
    /**
     * Edit a bank categories
     *
     * @remarks
     * Edit the name for the supplied category.<br><br>
     */
    postBanksCategoriesIdCategory(req: operations.PostBanksCategoriesIdCategoryRequest, config?: AxiosRequestConfig): Promise<operations.PostBanksCategoriesIdCategoryResponse>;
    /**
     * Add a new keyword associated with a category in the database.
     *
     * @remarks
     * If the keyword already exists the keyword is not added. Used for the categorization of transactions.<br><br>Form params: - id_category (integer): a reference towards the category associated with the keyword - keyword (string): the searched keyword - income (bool): 1 if the associated category represents an income else 0 - priority (integer): sets the priority for the keyword, used when categorizing<br><br>
     */
    postCategoriesKeywords(req: operations.PostCategoriesKeywordsRequest, config?: AxiosRequestConfig): Promise<operations.PostCategoriesKeywordsResponse>;
    /**
     * categorize transactions without storing them
     *
     * @remarks
     * It requires an array of transaction dictionaries. Any fields of transactions that are not required will be kept in the response. The response contains the list of transactions with two more fields: id_category and state (it indicates how the transaction has been categorized)<br><br>
     */
    postCategorize(req: operations.PostCategorizeRequestBody, config?: AxiosRequestConfig): Promise<operations.PostCategorizeResponse>;
    /**
     * "
     *
     * @remarks
     * This endpoint is used to enable a source or force a synchronization on it.<br><br>
     */
    postConnectionsIdConnectionSourcesIdSource(req: operations.PostConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PostConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Request a new connector
     *
     * @remarks
     * Send a request to add a new connector<br><br>
     */
    postConnectors(req: operations.PostConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.PostConnectorsResponse>;
    /**
     * Create a connector Logo
     *
     * @remarks
     * This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>
     */
    postConnectorsIdConnectorLogos(req: operations.PostConnectorsIdConnectorLogosRequest, config?: AxiosRequestConfig): Promise<operations.PostConnectorsIdConnectorLogosResponse>;
    /**
     * Create clustered transaction
     *
     * @remarks
     * Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>
     */
    postUsersIdUserAccountsIdAccountTransactionsclusters(req: operations.PostUsersIdUserAccountsIdAccountTransactionsclustersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserAccountsIdAccountTransactionsclustersResponse>;
    /**
     * Create a new transaction category
     */
    postUsersIdUserCategoriesFull(req: operations.PostUsersIdUserCategoriesFullRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserCategoriesFullResponse>;
    /**
     * Add a new connection.
     *
     * @remarks
     * Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>
     */
    postUsersIdUserConnections(req: operations.PostUsersIdUserConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsResponse>;
    /**
     * Update a connection.
     *
     * @remarks
     * Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>
     */
    postUsersIdUserConnectionsIdConnection(req: operations.PostUsersIdUserConnectionsIdConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsIdConnectionResponse>;
    /**
     * Create an account
     *
     * @remarks
     * This endpoint creates an account related to a connection or not.<br><br>
     */
    postUsersIdUserConnectionsIdConnectionAccounts(req: operations.PostUsersIdUserConnectionsIdConnectionAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsIdConnectionAccountsResponse>;
    /**
     * Create transactions
     *
     * @remarks
     * Create transactions for the supplied account or the account whose id is given with form parameters. It requires an array of transaction dictionaries.<br><br><br><br>
     */
    postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(req: operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse>;
    /**
     * Create clustered transaction
     *
     * @remarks
     * Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>
     */
    postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters(req: operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersResponse>;
    /**
     * "
     *
     * @remarks
     * This endpoint is used to enable a source or force a synchronization on it.<br><br>
     */
    postUsersIdUserConnectionsIdConnectionSourcesIdSource(req: operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Create clustered transaction
     *
     * @remarks
     * Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>
     */
    postUsersIdUserConnectionsIdConnectionTransactionsclusters(req: operations.PostUsersIdUserConnectionsIdConnectionTransactionsclustersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsIdConnectionTransactionsclustersResponse>;
    /**
     * Create clustered transaction
     *
     * @remarks
     * Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>
     */
    postUsersIdUserTransactionsclusters(req: operations.PostUsersIdUserTransactionsclustersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserTransactionsclustersResponse>;
    /**
     * Update connection source
     *
     * @remarks
     * This endpoint is used to enable a source or force a synchronization on it.<br><br>
     */
    putConnectionsIdConnectionSourcesIdSource(req: operations.PutConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Enable/disable several connectors
     */
    putConnectors(req: operations.PutConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectorsResponse>;
    /**
     * Edit the provided connector
     *
     * @remarks
     * <br><br>
     */
    putConnectorsIdConnector(req: operations.PutConnectorsIdConnectorRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectorsIdConnectorResponse>;
    /**
     * Create or Update a connector Logo
     *
     * @remarks
     * This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>
     */
    putConnectorsIdConnectorLogos(req: operations.PutConnectorsIdConnectorLogosRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectorsIdConnectorLogosResponse>;
    /**
     * Create or Update a connector Logo.
     *
     * @remarks
     * This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>
     */
    putConnectorsIdConnectorLogosIdLogo(req: operations.PutConnectorsIdConnectorLogosIdLogoRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectorsIdConnectorLogosIdLogoResponse>;
    /**
     * Edit several connector sources
     */
    putConnectorsIdConnectorSources(req: operations.PutConnectorsIdConnectorSourcesRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectorsIdConnectorSourcesResponse>;
    /**
     * Edit the provided connector source
     */
    putConnectorsIdConnectorSourcesIdSource(req: operations.PutConnectorsIdConnectorSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectorsIdConnectorSourcesIdSourceResponse>;
    /**
     * Edit a clustered transaction
     *
     * @remarks
     * Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>
     */
    putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster(req: operations.PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse>;
    /**
     * Modify a user-created category
     */
    putUsersIdUserCategoriesFullIdFull(req: operations.PutUsersIdUserCategoriesFullIdFullRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserCategoriesFullIdFullResponse>;
    /**
     * Force synchronisation of a connection.
     *
     * @remarks
     * We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>
     */
    putUsersIdUserConnectionsIdConnection(req: operations.PutUsersIdUserConnectionsIdConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionResponse>;
    /**
     * Update many accounts at once
     */
    putUsersIdUserConnectionsIdConnectionAccounts(req: operations.PutUsersIdUserConnectionsIdConnectionAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionAccountsResponse>;
    /**
     * Update an account
     *
     * @remarks
     * It updates a specific account<br><br>
     */
    putUsersIdUserConnectionsIdConnectionAccountsIdAccount(req: operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountResponse>;
    /**
     * Edit a transaction meta-data
     */
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction(req: operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionResponse>;
    /**
     * Add or edit transaction arbitrary key-value pairs
     */
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(req: operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse>;
    /**
     * Edit a clustered transaction
     *
     * @remarks
     * Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>
     */
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster(req: operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse>;
    /**
     * Update connection source
     *
     * @remarks
     * This endpoint is used to enable a source or force a synchronization on it.<br><br>
     */
    putUsersIdUserConnectionsIdConnectionSourcesIdSource(req: operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Edit a clustered transaction
     *
     * @remarks
     * Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>
     */
    putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster(req: operations.PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterResponse>;
    /**
     * Edit a clustered transaction
     *
     * @remarks
     * Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>
     */
    putUsersIdUserTransactionsclustersIdTransactionscluster(req: operations.PutUsersIdUserTransactionsclustersIdTransactionsclusterRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserTransactionsclustersIdTransactionsclusterResponse>;
}
