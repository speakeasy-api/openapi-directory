import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTablesRequest extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    expression?: string;
    maxResults?: number;
    nextToken?: string;
    queryAsOfTime?: Date;
    transactionId?: string;
}
