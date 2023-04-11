import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVaultItemByIdSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class GetVaultItemByIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the Item to fetch
     */
    itemUuid: string;
    /**
     * The UUID of the Vault to fetch Item from
     */
    vaultUuid: string;
}
export declare class GetVaultItemByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    fullItem?: shared.FullItem;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
