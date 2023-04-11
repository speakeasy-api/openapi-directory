import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Block a card
     *
     * @remarks
     * Updates status of an existing card to block which prevents any transactions being carried out with that card.
     */
    blockCard(req: operations.BlockCardRequest, config?: AxiosRequestConfig): Promise<operations.BlockCardResponse>;
    /**
     * Create a new debit card.
     *
     * @remarks
     * You can create multiple debit cards which can be linked to your fire.com accounts.
     */
    createNewCard(req: operations.CreateNewCardNewCard, config?: AxiosRequestConfig): Promise<operations.CreateNewCardResponse>;
    /**
     * List Card Transactions.
     *
     * @remarks
     * Returns a list of cards transactions related to your fire.com card.
     */
    getListofCardTransactions(req: operations.GetListofCardTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetListofCardTransactionsResponse>;
    /**
     * View List of Cards.
     *
     * @remarks
     * Returns a list of cards related to your fire.com account.
     */
    getListofCards(config?: AxiosRequestConfig): Promise<operations.GetListofCardsResponse>;
    /**
     * Unblock a card
     *
     * @remarks
     * Updates status of an existing card to unblock which means that transactions can be carried out with that card.
     */
    unblockCard(req: operations.UnblockCardRequest, config?: AxiosRequestConfig): Promise<operations.UnblockCardResponse>;
}
