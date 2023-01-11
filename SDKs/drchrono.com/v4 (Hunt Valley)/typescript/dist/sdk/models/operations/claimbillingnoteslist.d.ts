import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClaimBillingNotesListQueryParams extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class ClaimBillingNotesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ClaimBillingNotesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.ClaimBillingNotes[];
    next?: string;
    previous?: string;
}
export declare class ClaimBillingNotesListRequest extends SpeakeasyBase {
    queryParams: ClaimBillingNotesListQueryParams;
    security: ClaimBillingNotesListSecurity;
}
export declare class ClaimBillingNotesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    claimBillingNotesList200ApplicationJSONObject?: ClaimBillingNotesList200ApplicationJson;
}
