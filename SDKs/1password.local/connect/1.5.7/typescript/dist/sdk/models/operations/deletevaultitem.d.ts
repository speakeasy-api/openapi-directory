import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVaultItemSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class DeleteVaultItemRequest extends SpeakeasyBase {
    /**
     * The UUID of the Item to update
     */
    itemUuid: string;
    /**
     * The UUID of the Vault the item is in
     */
    vaultUuid: string;
}
export declare class DeleteVaultItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
