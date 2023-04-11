import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class DescribeFleetAdvisorDatabasesRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxRecords?: number;
    nextToken?: string;
}
