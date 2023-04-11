import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClaimBillingNotesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClaimBillingNotesCreateRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
}
export declare class ClaimBillingNotesCreateResponse extends SpeakeasyBase {
    /**
     * Created
     */
    claimBillingNotes?: shared.ClaimBillingNotes;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
