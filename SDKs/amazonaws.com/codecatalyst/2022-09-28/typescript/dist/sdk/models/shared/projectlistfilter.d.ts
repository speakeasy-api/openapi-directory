import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { FilterKeyEnum } from "./filterkeyenum";
/**
 * nformation about the filter used to narrow the results returned in a list of projects.
 */
export declare class ProjectListFilter extends SpeakeasyBase {
    comparisonOperator?: ComparisonOperatorEnum;
    key: FilterKeyEnum;
    values: string[];
}
