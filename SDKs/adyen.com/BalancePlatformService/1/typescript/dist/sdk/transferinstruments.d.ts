import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TransferInstruments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTransferInstrumentsId - Delete a transfer instrument
     *
     * Deletes a transfer instrument.
    **/
    deleteTransferInstrumentsId(req: operations.DeleteTransferInstrumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransferInstrumentsIdResponse>;
    /**
     * getTransferInstrumentsId - Retrieve a transfer instrument.
     *
     * Returns a specific transfer instrument.
    **/
    getTransferInstrumentsId(req: operations.GetTransferInstrumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransferInstrumentsIdResponse>;
    /**
     * patchTransferInstrumentsId - Update a transfer instrument.
     *
     * Updates a transfer instrument.
    **/
    patchTransferInstrumentsId(req: operations.PatchTransferInstrumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTransferInstrumentsIdResponse>;
    /**
     * postTransferInstruments - Create a transfer instrument.
     *
     * Creates a transfer instrument. A transfer instrument is a bank account or other payment details that a legal entity owns. Adyen performs Know Your Customer (KYC) checks on the transfer instrument as required by payment industry regulations. Your Adyen contact will inform you of the status and results of the KYC checks.
     *
     * When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).
    **/
    postTransferInstruments(req: operations.PostTransferInstrumentsRequest, config?: AxiosRequestConfig): Promise<operations.PostTransferInstrumentsResponse>;
}
