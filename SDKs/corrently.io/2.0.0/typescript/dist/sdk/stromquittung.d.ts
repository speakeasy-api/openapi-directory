import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Self-Service to create a full receipt (Quittung) for energy delivery in case of submetering. Please refer to [Strom-Quittung](http://strom-quittung.de) for a sample usage.
 *
 * @remarks
 *
 */
export declare class StromQuittung {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
     *
     * @remarks
     * Uses collected fields or provided fields to create a final receipt (Strom-Quittung).
     *
     */
    quittungComit(req: operations.QuittungComitRequestBody, config?: AxiosRequestConfig): Promise<operations.QuittungComitResponse>;
    /**
     * Create a receipt for an energy delivery (only valid in Germany).
     *
     * @remarks
     * Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.
     *
     */
    quittungCreate(req: operations.QuittungCreateRequestBody, config?: AxiosRequestConfig): Promise<operations.QuittungCreateResponse>;
    /**
     * Allows to collect data with several requests (or a single) for a receipt.
     *
     * @remarks
     * During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.
     *
     */
    quittungPrepare(req: operations.QuittungPrepareRequestBody, config?: AxiosRequestConfig): Promise<operations.QuittungPrepareResponse>;
    /**
     * Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
     *
     * @remarks
     * Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.
     *
     */
    quittungTSE(req: operations.QuittungTSERequest, config?: AxiosRequestConfig): Promise<operations.QuittungTSEResponse>;
    /**
     * Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
     *
     * @remarks
     * Allows to retrieve input string for a signing process.
     *
     */
    quittungTSEData(req: operations.QuittungTSEDataRequest, config?: AxiosRequestConfig): Promise<operations.QuittungTSEDataResponse>;
    /**
     * Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
     *
     * @remarks
     * Allows to retrieve digital signature for a given receipt.
     *
     */
    quittungTSEsignature(req: operations.QuittungTSEsignatureRequest, config?: AxiosRequestConfig): Promise<operations.QuittungTSEsignatureResponse>;
    /**
     * Retrieve Zugferd XML for a given receipt (Strom-Quittung).
     *
     * @remarks
     * Allows to retrieve XML of the zugferd invoice.
     *
     */
    quittungZugferd(req: operations.QuittungZugferdRequest, config?: AxiosRequestConfig): Promise<operations.QuittungZugferdResponse>;
}
