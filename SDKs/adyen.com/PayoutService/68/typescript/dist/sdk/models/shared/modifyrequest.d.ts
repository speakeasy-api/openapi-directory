import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyRequest extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be required for a particular payout request.
     */
    additionalData?: Record<string, string>;
    /**
     * The merchant account identifier, with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * The PSP reference received in the `/submitThirdParty` response.
     */
    originalReference: string;
}
