import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnTypeEnum } from "./columntypeenum";
/**
 * A description of the column in the query results.
 */
export declare class ColumnDescription extends SpeakeasyBase {
    name?: string;
    type?: ColumnTypeEnum;
}
