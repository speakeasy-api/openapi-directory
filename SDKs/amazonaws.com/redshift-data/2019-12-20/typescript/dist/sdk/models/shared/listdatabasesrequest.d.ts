import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDatabasesRequest extends SpeakeasyBase {
    clusterIdentifier?: string;
    database: string;
    dbUser?: string;
    maxResults?: number;
    nextToken?: string;
    secretArn?: string;
    workgroupName?: string;
}
