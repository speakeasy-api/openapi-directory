import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { UsageTypeEnum } from "./usagetypeenum";
/**
 * Contains usage information about the cost of Amazon Inspector operation.
 */
export declare class Usage extends SpeakeasyBase {
    currency?: CurrencyEnum;
    estimatedMonthlyCost?: number;
    total?: number;
    type?: UsageTypeEnum;
}
