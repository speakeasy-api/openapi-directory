import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LegalEntities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLegalEntitiesId - Retrieve a legal entity.
     *
     * Returns a specific legal entity.
    **/
    getLegalEntitiesId(req: operations.GetLegalEntitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLegalEntitiesIdResponse>;
    /**
     * patchLegalEntitiesId - Update a legal entity.
     *
     * Updates a legal entity. When updating a legal entity resource, note that:
     *
     *  * To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.
    **/
    patchLegalEntitiesId(req: operations.PatchLegalEntitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchLegalEntitiesIdResponse>;
    /**
     * postLegalEntities - Create a legal entity.
     *
     * Creates a legal entity. This resource contains information about an individual or organization that will be onboarded on your balance platform. Adyen uses this information to perform Know Your Customer (KYC) checks as required by payment industry regulations. Your Adyen contact will inform you of the status and results of the KYC checks.
     *
     * When the legal entity passes the verification checks, you can issue a card to them. For more information, refer to [Onboard and verify account holders](https://docs.adyen.com/issuing/kyc-verification).
    **/
    postLegalEntities(req: operations.PostLegalEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostLegalEntitiesResponse>;
}
