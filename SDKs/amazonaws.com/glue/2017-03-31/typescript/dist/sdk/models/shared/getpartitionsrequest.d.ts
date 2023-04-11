import { SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";
export declare class GetPartitionsRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    excludeColumnSchema?: boolean;
    expression?: string;
    maxResults?: number;
    nextToken?: string;
    queryAsOfTime?: Date;
    segment?: Segment;
    tableName: string;
    transactionId?: string;
}
