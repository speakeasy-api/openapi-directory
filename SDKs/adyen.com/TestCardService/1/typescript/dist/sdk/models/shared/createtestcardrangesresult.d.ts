import { SpeakeasyBase } from "../../../internal/utils";
import { TestCardRangeCreationResult } from "./testcardrangecreationresult";
/**
 * OK - the request has succeeded.
 */
export declare class CreateTestCardRangesResult extends SpeakeasyBase {
    /**
     * The results of the test card creation.
     */
    rangeCreationResults: TestCardRangeCreationResult[];
}
