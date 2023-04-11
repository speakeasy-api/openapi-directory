import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountPostGuestFormRequest extends SpeakeasyBase {
    /**
     * Guest object with field updated
     */
    apiCoreDtoAccountingGuest: shared.ApiCoreDtoAccountingGuest;
    /**
     * Id of the guest
     */
    guestId: number;
}
export declare class AccountPostGuestFormResponse extends SpeakeasyBase {
    apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
