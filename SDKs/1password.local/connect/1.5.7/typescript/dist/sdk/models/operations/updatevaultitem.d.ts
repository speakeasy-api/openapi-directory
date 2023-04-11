import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVaultItemSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class UpdateVaultItemRequest extends SpeakeasyBase {
    fullItemInput?: shared.FullItemInput;
    /**
     * The UUID of the Item to update
     */
    itemUuid: string;
    /**
     * The UUID of the Item's Vault
     */
    vaultUuid: string;
}
export declare class UpdateVaultItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unable to create item due to invalid input
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    fullItem?: shared.FullItem;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
