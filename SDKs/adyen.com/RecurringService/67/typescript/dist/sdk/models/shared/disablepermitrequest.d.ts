import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisablePermitRequest extends SpeakeasyBase {
    /**
     * The merchant account identifier, with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * The permit token to disable.
     */
    token: string;
}
