import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVaultByIdSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class GetVaultByIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the Vault to fetch Items from
     */
    vaultUuid: string;
}
export declare class GetVaultByIdResponse extends SpeakeasyBase {
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
    vault?: shared.Vault;
}
