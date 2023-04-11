import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Allows to virtualy act as an Meter Point Operator by decorating meter readings with GreenPowerIndex (GrünstromIndex) handles. In principal this service decorates meter [OBIS Code](https://de.wikipedia.org/wiki/OBIS-Kennzahlen) 1.8.0 values to 1.8.1 and 1.8.2 according to the local and actual GSI value. A signature gets applied to the reading and all three OBIS values get hashed into the Energychain for consensus (e.q. creating balancing groups). CO2 footprint of a meter gets provided (as of first reading pushed).This works in conjunction with German Smart Meter Gateways (as of March 2020).
 *
 * @remarks
 *
 */
export declare class MeteringDecorator {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Meter Reading
     *
     * @remarks
     * Retrieves a metered reading using account (Stromkonto).
     *
     */
    meteringGet(req: operations.MeteringGetRequest, config?: AxiosRequestConfig): Promise<operations.MeteringGetResponse>;
    /**
     * Meter Reading
     *
     * @remarks
     * Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).
     *
     */
    meteringPost(req: operations.MeteringPostRequestBody, config?: AxiosRequestConfig): Promise<operations.MeteringPostResponse>;
}
