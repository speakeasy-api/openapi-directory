import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountDeleteIpBlacklistRequest extends SpeakeasyBase {
    /**
     * The id of the ip to delete
     */
    blacklistId: string;
}
export declare class AccountDeleteIpBlacklistResponse extends SpeakeasyBase {
    apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
