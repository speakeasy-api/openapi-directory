import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TransferInstruments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a transfer instrument
     *
     * @remarks
     * Deletes a transfer instrument.
     */
    deleteTransferInstrumentsId(req: operations.DeleteTransferInstrumentsIdRequest, security: operations.DeleteTransferInstrumentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTransferInstrumentsIdResponse>;
    /**
     * Get a transfer instrument
     *
     * @remarks
     * Returns the details of a transfer instrument.
     */
    getTransferInstrumentsId(req: operations.GetTransferInstrumentsIdRequest, security: operations.GetTransferInstrumentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetTransferInstrumentsIdResponse>;
    /**
     * Update a transfer instrument
     *
     * @remarks
     * Updates a transfer instrument.
     */
    patchTransferInstrumentsId(req: operations.PatchTransferInstrumentsIdRequest, security: operations.PatchTransferInstrumentsIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchTransferInstrumentsIdResponse>;
    /**
     * Create a transfer instrument
     *
     * @remarks
     * Creates a transfer instrument.
     *
     * A transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses.
     *
     * When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).
     */
    postTransferInstruments(req: shared.TransferInstrumentInfo, security: operations.PostTransferInstrumentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostTransferInstrumentsResponse>;
}
