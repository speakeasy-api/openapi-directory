import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseResponse } from "./databaseresponse";
/**
 * Success
 */
export declare class DescribeFleetAdvisorDatabasesResponse extends SpeakeasyBase {
    databases?: DatabaseResponse[];
    nextToken?: string;
}
