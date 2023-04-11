import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A portfolio gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [status update](/docs/asana-statuses).
 *
 * @remarks
 * Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.
 */
export declare class Portfolios {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a custom field to a portfolio
     *
     * @remarks
     * Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.
     */
    addCustomFieldSettingForPortfolio(req: operations.AddCustomFieldSettingForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.AddCustomFieldSettingForPortfolioResponse>;
    /**
     * Add a portfolio item
     *
     * @remarks
     * Add an item to a portfolio.
     * Returns an empty data block.
     */
    addItemForPortfolio(req: operations.AddItemForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.AddItemForPortfolioResponse>;
    /**
     * Add users to a portfolio
     *
     * @remarks
     * Adds the specified list of users as members of the portfolio.
     * Returns the updated portfolio record.
     */
    addMembersForPortfolio(req: operations.AddMembersForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.AddMembersForPortfolioResponse>;
    /**
     * Create a portfolio
     *
     * @remarks
     * Creates a new portfolio in the given workspace with the supplied name.
     *
     * Note that portfolios created in the Asana UI may have some state
     * (like the “Priority” custom field) which is automatically added
     * to the portfolio when it is created. Portfolios created via our
     * API will *not* be created with the same initial state to allow
     * integrations to create their own starting state on a portfolio.
     */
    createPortfolio(req: operations.CreatePortfolioRequest, config?: AxiosRequestConfig): Promise<operations.CreatePortfolioResponse>;
    /**
     * Delete a portfolio
     *
     * @remarks
     * An existing portfolio can be deleted by making a DELETE request on
     * the URL for that portfolio.
     *
     * Returns an empty data record.
     */
    deletePortfolio(req: operations.DeletePortfolioRequest, config?: AxiosRequestConfig): Promise<operations.DeletePortfolioResponse>;
    /**
     * Get portfolio items
     *
     * @remarks
     * Get a list of the items in compact form in a portfolio.
     */
    getItemsForPortfolio(req: operations.GetItemsForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsForPortfolioResponse>;
    /**
     * Get a portfolio
     *
     * @remarks
     * Returns the complete portfolio record for a single portfolio.
     */
    getPortfolio(req: operations.GetPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioResponse>;
    /**
     * Get multiple portfolios
     *
     * @remarks
     * Returns a list of the portfolios in compact representation that are owned by the current API user.
     */
    getPortfolios(req: operations.GetPortfoliosRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfoliosResponse>;
    /**
     * Remove a custom field from a portfolio
     *
     * @remarks
     * Removes a custom field setting from a portfolio.
     */
    removeCustomFieldSettingForPortfolio(req: operations.RemoveCustomFieldSettingForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.RemoveCustomFieldSettingForPortfolioResponse>;
    /**
     * Remove a portfolio item
     *
     * @remarks
     * Remove an item from a portfolio.
     * Returns an empty data block.
     */
    removeItemForPortfolio(req: operations.RemoveItemForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.RemoveItemForPortfolioResponse>;
    /**
     * Remove users from a portfolio
     *
     * @remarks
     * Removes the specified list of users from members of the portfolio.
     * Returns the updated portfolio record.
     */
    removeMembersForPortfolio(req: operations.RemoveMembersForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.RemoveMembersForPortfolioResponse>;
    /**
     * Update a portfolio
     *
     * @remarks
     * An existing portfolio can be updated by making a PUT request on the URL for
     * that portfolio. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated portfolio record.
     */
    updatePortfolio(req: operations.UpdatePortfolioRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePortfolioResponse>;
}
