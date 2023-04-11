import { SpeakeasyBase } from "../../../internal/utils";
import { FleetAdvisorSchemaObjectResponse } from "./fleetadvisorschemaobjectresponse";
/**
 * Success
 */
export declare class DescribeFleetAdvisorSchemaObjectSummaryResponse extends SpeakeasyBase {
    fleetAdvisorSchemaObjects?: FleetAdvisorSchemaObjectResponse[];
    nextToken?: string;
}
