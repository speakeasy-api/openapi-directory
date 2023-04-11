import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Green Power Index (GrünstromIndex), an AI based service to forecast energy sources in the grid (regionale Stromherkunft).
 *
 * @remarks
 * Further Details and sample implementation is available at [gruenstromindex.de](https://www.gruenstromindex.de/).
 *
 */
export declare class GreenPowerIndexGrunstromIndex {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get best hour (with most regional green energy) in a given timeframe.
     *
     * @remarks
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).
     *
     */
    gsiBesthour(req: operations.GsiBesthourRequest, config?: AxiosRequestConfig): Promise<operations.GsiBesthourResponse>;
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
    /**
     * Marketdata
     *
     * @remarks
     * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.
     *
     */
    gsiMarketdata(req: operations.GsiMarketdataRequest, config?: AxiosRequestConfig): Promise<operations.GsiMarketdataResponse>;
    /**
     * Prediction
     *
     * @remarks
     * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.
     *
     */
    gsiPrediction(req: operations.GsiPredictionRequest, config?: AxiosRequestConfig): Promise<operations.GsiPredictionResponse>;
}
