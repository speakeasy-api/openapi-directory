import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateVaultItemSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class CreateVaultItemRequest extends SpeakeasyBase {
    fullItemInput?: shared.FullItemInput;
    /**
     * The UUID of the Vault to create an Item in
     */
    vaultUuid: string;
}
export declare class CreateVaultItemResponse extends SpeakeasyBase {
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
