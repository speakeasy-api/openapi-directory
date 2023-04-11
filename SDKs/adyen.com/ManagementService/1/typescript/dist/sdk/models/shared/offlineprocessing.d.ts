import { SpeakeasyBase } from "../../../internal/utils";
import { MinorUnitsMonetaryValue } from "./minorunitsmonetaryvalue";
export declare class OfflineProcessing extends SpeakeasyBase {
    /**
     * The maximum offline transaction amount for chip cards, in the processing currency and specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).
     */
    chipFloorLimit?: number;
    /**
     * The maximum offline transaction amount for swiped cards, in the specified currency.
     */
    offlineSwipeLimits?: MinorUnitsMonetaryValue[];
}
