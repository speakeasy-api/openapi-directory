import { SpeakeasyBase } from "../../../internal/utils";
import { ExportFilterNameEnum } from "./exportfilternameenum";
import { ExportFilterOperatorEnum } from "./exportfilteroperatorenum";
/**
 * Filters the response form the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html">ListExports</a> operation
 */
export declare class ExportFilter extends SpeakeasyBase {
    name: ExportFilterNameEnum;
    operator: ExportFilterOperatorEnum;
    values: string[];
}
