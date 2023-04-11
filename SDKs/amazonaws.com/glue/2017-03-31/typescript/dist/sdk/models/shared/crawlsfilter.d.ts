import { SpeakeasyBase } from "../../../internal/utils";
import { FieldNameEnum } from "./fieldnameenum";
import { FilterOperatorEnum } from "./filteroperatorenum";
/**
 * A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler.
 */
export declare class CrawlsFilter extends SpeakeasyBase {
    fieldName?: FieldNameEnum;
    fieldValue?: string;
    filterOperator?: FilterOperatorEnum;
}
