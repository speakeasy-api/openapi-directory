import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClaimBillingNotesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClaimBillingNotesReadQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
}
export declare class ClaimBillingNotesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClaimBillingNotesReadRequest extends SpeakeasyBase {
    pathParams: ClaimBillingNotesReadPathParams;
    queryParams: ClaimBillingNotesReadQueryParams;
    security: ClaimBillingNotesReadSecurity;
}
export declare class ClaimBillingNotesReadResponse extends SpeakeasyBase {
    claimBillingNotes?: shared.ClaimBillingNotes;
    contentType: string;
    statusCode: number;
}
