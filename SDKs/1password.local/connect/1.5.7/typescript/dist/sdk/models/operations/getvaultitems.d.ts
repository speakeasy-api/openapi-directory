import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVaultItemsSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class GetVaultItemsRequest extends SpeakeasyBase {
    /**
     * Filter the Item collection based on Item name using SCIM eq filter
     */
    filter?: string;
    /**
     * The UUID of the Vault to fetch Items from
     */
    vaultUuid: string;
}
export declare class GetVaultItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    items?: shared.Item[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
