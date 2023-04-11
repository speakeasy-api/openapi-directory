import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Technische Sicherheitseinrichtung - use in context of strom-quittungen to get digitaly signed receipts.
 */
export declare class Tse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
