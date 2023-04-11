import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SalesTax {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method creates or updates a sales tax table entry for a jurisdiction. Specify the tax table entry you want to configure using the two path parameters: <b>countryCode</b> and <b>jurisdictionId</b>.  <br/><br/>A tax table entry for a jurisdiction is comprised of two fields: one for the jurisdiction's sales-tax rate and another that's a boolean value indicating whether or not shipping and handling are taxed in the jurisdiction.  <br/><br/>You can set up <i>tax tables</i> for countries that support different <i>tax jurisdictions</i>. Currently, only Canada, India, and the US support separate tax jurisdictions. If you sell into any of these countries, you can set up tax tables for any of the country's jurisdictions. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.  <br/><br/>For details on using this call, see <a href="/api-docs/sell/static/seller-accounts/tax-tables.html">Establishing sales-tax tables</a>. <br/><br/><span class="tablenote"><b>Important!</b> In the US, eBay now 'collects and remits' sales tax for every US state except for Missouri (and a few US territories), so sellers can no longer configure sales tax rates for any states except Missouri. With eBay 'collect and remit', eBay calculates the sales tax, collects the sales tax from the buyer, and remits the sales tax to the tax authorities at the buyer's location.</span>
     */
    createOrReplaceSalesTax(req: operations.CreateOrReplaceSalesTaxRequest, security: operations.CreateOrReplaceSalesTaxSecurity, config?: AxiosRequestConfig): Promise<operations.CreateOrReplaceSalesTaxResponse>;
    /**
     * This call deletes a sales tax table entry for a jurisdiction. Specify the jurisdiction to delete using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters.
     */
    deleteSalesTax(req: operations.DeleteSalesTaxRequest, security: operations.DeleteSalesTaxSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSalesTaxResponse>;
    /**
     * This call gets the current sales tax table entry for a specific tax jurisdiction. Specify the jurisdiction to retrieve using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters. All four response fields will be returned if a sales tax entry exists for the tax jurisdiction. Otherwise, the response will be returned as empty.<br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>
     */
    getSalesTax(req: operations.GetSalesTaxRequest, security: operations.GetSalesTaxSecurity, config?: AxiosRequestConfig): Promise<operations.GetSalesTaxResponse>;
    /**
     * Use this call to retrieve all sales tax table entries that the seller has defined for a specific country. All four response fields will be returned for each tax jurisdiction that matches the search criteria. <br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>
     */
    getSalesTaxes(req: operations.GetSalesTaxesRequest, security: operations.GetSalesTaxesSecurity, config?: AxiosRequestConfig): Promise<operations.GetSalesTaxesResponse>;
}
