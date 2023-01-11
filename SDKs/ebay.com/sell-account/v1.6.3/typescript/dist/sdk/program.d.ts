import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Program {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOptedInPrograms - This method gets a list of the seller programs that the seller has opted-in to.
    **/
    getOptedInPrograms(req: operations.GetOptedInProgramsRequest, config?: AxiosRequestConfig): Promise<operations.GetOptedInProgramsResponse>;
    /**
     * optInToProgram - This method opts the seller in to an eBay seller program. Refer to the Account API overview for information about available eBay seller programs. Note: It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the getOptedInPrograms call to check the status of your request after the processing period has passed.
    **/
    optInToProgram(req: operations.OptInToProgramRequest, config?: AxiosRequestConfig): Promise<operations.OptInToProgramResponse>;
    /**
     * optOutOfProgram - This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the getOptedInPrograms call.
    **/
    optOutOfProgram(req: operations.OptOutOfProgramRequest, config?: AxiosRequestConfig): Promise<operations.OptOutOfProgramResponse>;
}
