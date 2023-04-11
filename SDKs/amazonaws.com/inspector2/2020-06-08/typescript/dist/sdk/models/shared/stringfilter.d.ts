import { SpeakeasyBase } from "../../../internal/utils";
import { StringComparisonEnum } from "./stringcomparisonenum";
/**
 * An object that describes the details of a string filter.
 */
export declare class StringFilter extends SpeakeasyBase {
    comparison: StringComparisonEnum;
    value: string;
}
