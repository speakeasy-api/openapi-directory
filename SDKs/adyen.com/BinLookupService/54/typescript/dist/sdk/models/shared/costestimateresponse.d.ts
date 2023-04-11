import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { CardBin } from "./cardbin";
/**
 * OK - the request has succeeded.
 */
export declare class CostEstimateResponse extends SpeakeasyBase {
    cardBin?: CardBin;
    costEstimateAmount?: Amount;
    /**
     * Adyen's 16-character reference associated with the request.
     */
    costEstimateReference?: string;
    /**
     * The result of the cost estimation.
     */
    resultCode?: string;
    /**
     * Indicates the way the charges can be passed on to the cardholder. The following values are possible:
     *
     * @remarks
     * * `ZERO` - the charges are not allowed to pass on
     * * `PASSTHROUGH` - the charges can be passed on
     * * `UNLIMITED` - there is no limit on how much surcharge is passed on
     */
    surchargeType?: string;
}
