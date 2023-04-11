import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchVaultItemSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class PatchVaultItemRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The UUID of the Item to update
     */
    itemUuid: string;
    /**
     * The UUID of the Vault the item is in
     */
    vaultUuid: string;
}
export declare class PatchVaultItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK - Item updated. If no Patch operations were provided, Item is unmodified.
     */
    fullItem?: shared.FullItem;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
