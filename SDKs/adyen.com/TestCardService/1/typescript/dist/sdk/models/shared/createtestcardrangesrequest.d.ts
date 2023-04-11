import { SpeakeasyBase } from "../../../internal/utils";
import { TestCardRange } from "./testcardrange";
export declare class CreateTestCardRangesRequest extends SpeakeasyBase {
    /**
     * The code of the account, for which the test card ranges should be created.
     */
    accountCode: string;
    /**
     * The type of the account, for which the test card ranges should be created.
     *
     * @remarks
     *
     * Permitted values:
     * * Company
     * * MerchantAccount
     * > These values are case-sensitive.
     */
    accountTypeCode: string;
    /**
     * A list of test card ranges to create.
     */
    testCardRanges: TestCardRange[];
}
