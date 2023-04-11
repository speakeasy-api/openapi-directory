import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVaultsSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class GetVaultsRequest extends SpeakeasyBase {
    /**
     * Filter the Vault collection based on Vault name using SCIM eq filter
     */
    filter?: string;
}
export declare class GetVaultsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    vaults?: shared.Vault[];
}
