import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Games {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * all games (example parameters)
     *
     * @remarks
     * all games (example parameters)
     */
    allGamesExampleParameters(req: operations.AllGamesExampleParametersRequest, config?: AxiosRequestConfig): Promise<operations.AllGamesExampleParametersResponse>;
    /**
     * specific game
     *
     * @remarks
     * specific game
     */
    specificGame(config?: AxiosRequestConfig): Promise<operations.SpecificGameResponse>;
}
