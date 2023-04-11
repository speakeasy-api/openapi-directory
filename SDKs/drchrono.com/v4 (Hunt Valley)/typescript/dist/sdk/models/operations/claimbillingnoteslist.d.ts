import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClaimBillingNotesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClaimBillingNotesListRequest extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class ClaimBillingNotesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.ClaimBillingNotes[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ClaimBillingNotesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    claimBillingNotesList200ApplicationJSONObject?: ClaimBillingNotesList200ApplicationJSON;
}
