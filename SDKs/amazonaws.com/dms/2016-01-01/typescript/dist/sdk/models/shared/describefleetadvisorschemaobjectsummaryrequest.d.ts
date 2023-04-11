import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class DescribeFleetAdvisorSchemaObjectSummaryRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxRecords?: number;
    nextToken?: string;
}
