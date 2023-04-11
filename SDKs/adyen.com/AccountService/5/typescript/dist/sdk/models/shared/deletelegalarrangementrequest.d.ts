import { SpeakeasyBase } from "../../../internal/utils";
import { LegalArrangementRequest } from "./legalarrangementrequest";
export declare class DeleteLegalArrangementRequest extends SpeakeasyBase {
    /**
     * The code of the account holder.
     */
    accountHolderCode: string;
    /**
     * List of legal arrangements.
     */
    legalArrangements: LegalArrangementRequest[];
}
