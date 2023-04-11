import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ClaimBillingNotes extends SpeakeasyBase {
    appointment: number;
    createdAt?: string;
    /**
     * ID of `/users` when created the note
     */
    createdBy?: string;
    id?: number;
    text?: string;
}
