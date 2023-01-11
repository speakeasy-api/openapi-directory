import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNewCard - Create a new debit card.
     *
     * You can create multiple debit cards which can be linked to your fire.com accounts.
    **/
    createNewCard(req: operations.CreateNewCardRequest, config?: AxiosRequestConfig): Promise<operations.CreateNewCardResponse>;
    /**
     * getListofCards - View List of Cards.
     *
     * Returns a list of cards related to your fire.com account.
    **/
    getListofCards(config?: AxiosRequestConfig): Promise<operations.GetListofCardsResponse>;
}
