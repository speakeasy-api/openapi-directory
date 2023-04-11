import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Success
 */
export declare class ListDataSourcesResponse extends SpeakeasyBase {
    dataSources?: DataSource[];
    nextToken?: string;
}
