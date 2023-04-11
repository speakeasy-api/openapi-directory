import { SpeakeasyBase } from "../../../internal/utils";
export declare class LegalArrangementRequest extends SpeakeasyBase {
    /**
     * The code of the legal arrangement to be deleted. If you also send `legalArrangementEntityCodes`, only the entities listed will be deleted.
     */
    legalArrangementCode: string;
    /**
     * List of legal arrangement entities to be deleted.
     */
    legalArrangementEntityCodes?: string[];
}
