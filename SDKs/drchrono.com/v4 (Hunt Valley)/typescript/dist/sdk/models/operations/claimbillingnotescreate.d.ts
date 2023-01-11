import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClaimBillingNotesCreateQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
}
export declare class ClaimBillingNotesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClaimBillingNotesCreateRequest extends SpeakeasyBase {
    queryParams: ClaimBillingNotesCreateQueryParams;
    security: ClaimBillingNotesCreateSecurity;
}
export declare class ClaimBillingNotesCreateResponse extends SpeakeasyBase {
    claimBillingNotes?: shared.ClaimBillingNotes;
    contentType: string;
    statusCode: number;
}
