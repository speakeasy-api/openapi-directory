import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountDeleteDomainWhitelistRequest extends SpeakeasyBase {
    /**
     * The id of the domain to delete
     */
    whitelistId: string;
}
export declare class AccountDeleteDomainWhitelistResponse extends SpeakeasyBase {
    apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
