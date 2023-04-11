import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnMetadata } from "./columnmetadata";
/**
 * Success
 */
export declare class DescribeTableResponse extends SpeakeasyBase {
    columnList?: ColumnMetadata[];
    nextToken?: string;
    tableName?: string;
}
