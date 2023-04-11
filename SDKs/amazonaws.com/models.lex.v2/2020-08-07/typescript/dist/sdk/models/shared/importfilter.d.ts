import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFilterNameEnum } from "./importfilternameenum";
import { ImportFilterOperatorEnum } from "./importfilteroperatorenum";
/**
 * Filters the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html">ListImports</a> operation.
 */
export declare class ImportFilter extends SpeakeasyBase {
    name: ImportFilterNameEnum;
    operator: ImportFilterOperatorEnum;
    values: string[];
}
