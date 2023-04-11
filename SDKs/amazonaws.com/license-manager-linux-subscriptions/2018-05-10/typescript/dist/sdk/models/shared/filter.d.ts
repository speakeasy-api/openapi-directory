import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorEnum } from "./operatorenum";
/**
 * A filter object that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria.
 */
export declare class Filter extends SpeakeasyBase {
    name?: string;
    operator?: OperatorEnum;
    values?: string[];
}
