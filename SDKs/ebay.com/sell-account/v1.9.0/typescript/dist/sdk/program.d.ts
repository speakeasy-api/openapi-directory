import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Program {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method gets a list of the seller programs that the seller has opted-in to.
     */
    getOptedInPrograms(config?: AxiosRequestConfig): Promise<operations.GetOptedInProgramsResponse>;
    /**
     * This method opts the seller in to an eBay seller program. Refer to the <a href="/api-docs/sell/account/overview.html#opt-in" target="_blank">Account API overview</a> for information about available eBay seller programs.<br /><br /><span class="tablenote"><b>Note:</b> It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the <a href="/api-docs/sell/account/resources/program/methods/getOptedInPrograms" target="_blank">getOptedInPrograms</a> call to check the status of your request after the processing period has passed.</span>
     */
    optInToProgram(req: shared.Program, security: operations.OptInToProgramSecurity, config?: AxiosRequestConfig): Promise<operations.OptInToProgramResponse>;
    /**
     * This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the <b>getOptedInPrograms</b> call.
     */
    optOutOfProgram(req: shared.Program, security: operations.OptOutOfProgramSecurity, config?: AxiosRequestConfig): Promise<operations.OptOutOfProgramResponse>;
}
