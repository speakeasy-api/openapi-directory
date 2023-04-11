import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetupBeneficiaryRequest extends SpeakeasyBase {
    /**
     * The destination account code.
     */
    destinationAccountCode: string;
    /**
     * A value that can be supplied at the discretion of the executing user.
     */
    merchantReference?: string;
    /**
     * The benefactor account.
     */
    sourceAccountCode: string;
}
