import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnDescription } from "./columndescription";
import { Row } from "./row";
/**
 * Success
 */
export declare class ExecuteQueryResponse extends SpeakeasyBase {
    columnDescriptions?: ColumnDescription[];
    nextToken?: string;
    rows?: Row[];
}
