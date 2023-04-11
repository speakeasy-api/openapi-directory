import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Provides latest dispatch information of green energy at a specific location in Germany (Herkunft/GrünstromMix). It allows to do schedule management (Fahrplanmanagement) of green energy generation facilities, demand and resilience management for grid operators. The public version (OpenAPI) is always post fact. If you are interessted in pre fact (forecast) data, you might get in contact with STROMDAO GmbH.
 *
 * @remarks
 *
 */
export declare class DispatchGreenEnergyDistributionAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Dispatch (Green Energy Distribution Schedule)
     *
     * @remarks
     * Dispatch of green energy has two aspects to consider:
     *   - Availability of gerneration facility (depends on weather and installed capacity)
     *   - Demand of energy
     * Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).
     *
     */
    gsiDispatch(req: operations.GsiDispatchRequest, config?: AxiosRequestConfig): Promise<operations.GsiDispatchResponse>;
}
