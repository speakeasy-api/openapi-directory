import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountPostGuestRawRequest extends SpeakeasyBase {
    /**
     * Guest object with field updated
     */
    requestBody: Uint8Array;
    /**
     * Id of the guest
     */
    guestId: number;
}
export declare class AccountPostGuestRawResponse extends SpeakeasyBase {
    apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
