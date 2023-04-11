import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Games Admin Restv 2 Controller
 */
export declare class GamesAdmin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGamesEndpoints
     */
    getGamesEndpointsUsingGET(req: operations.GETGamesEndpointsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGamesEndpointsUsingGETResponse>;
    /**
     * listDeleted
     */
    listDeletedUsingGET(config?: AxiosRequestConfig): Promise<operations.ListDeletedUsingGETResponse>;
    /**
     * list
     */
    listUsingGET(config?: AxiosRequestConfig): Promise<operations.ListUsingGETResponse>;
    /**
     * restoreDeletedGame
     */
    restoreDeletedGameUsingPOST(req: operations.RestoreDeletedGameUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.RestoreDeletedGameUsingPOSTResponse>;
}
