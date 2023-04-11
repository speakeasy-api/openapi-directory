import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClaimBillingNotesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClaimBillingNotesReadRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
}
export declare class ClaimBillingNotesReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    claimBillingNotes?: shared.ClaimBillingNotes;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
