import { SpeakeasyBase } from "../../../internal/utils";
import { CalculationSummary } from "./calculationsummary";
/**
 * Success
 */
export declare class ListCalculationExecutionsResponse extends SpeakeasyBase {
    calculations?: CalculationSummary[];
    nextToken?: string;
}
