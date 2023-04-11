import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LegalEntities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a legal entity
     *
     * @remarks
     * Returns a legal entity.
     */
    getLegalEntitiesId(req: operations.GetLegalEntitiesIdRequest, security: operations.GetLegalEntitiesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetLegalEntitiesIdResponse>;
    /**
     * Get all business lines under a legal entity
     *
     * @remarks
     * Returns the business lines owned by a legal entity.
     */
    getLegalEntitiesIdBusinessLines(req: operations.GetLegalEntitiesIdBusinessLinesRequest, security: operations.GetLegalEntitiesIdBusinessLinesSecurity, config?: AxiosRequestConfig): Promise<operations.GetLegalEntitiesIdBusinessLinesResponse>;
    /**
     * Update a legal entity
     *
     * @remarks
     * Updates a legal entity.
     *
     *  >To change the legal entity type, include only the new `type` in your request. To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.
     */
    patchLegalEntitiesId(req: operations.PatchLegalEntitiesIdRequest, security: operations.PatchLegalEntitiesIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchLegalEntitiesIdResponse>;
    /**
     * Create a legal entity
     *
     * @remarks
     * Creates a legal entity.
     *
     * This resource contains information about the user that will be onboarded in your platform. Adyen uses this information to perform verification checks as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses.
     *
     *
     */
    postLegalEntities(req: shared.LegalEntityInfoRequiredTypeInput, security: operations.PostLegalEntitiesSecurity, config?: AxiosRequestConfig): Promise<operations.PostLegalEntitiesResponse>;
    /**
     * Check a legal entity's verification errors
     *
     * @remarks
     * Returns the verification errors for a legal entity and its supporting entities.
     */
    postLegalEntitiesIdCheckVerificationErrors(req: operations.PostLegalEntitiesIdCheckVerificationErrorsRequest, security: operations.PostLegalEntitiesIdCheckVerificationErrorsSecurity, config?: AxiosRequestConfig): Promise<operations.PostLegalEntitiesIdCheckVerificationErrorsResponse>;
}
