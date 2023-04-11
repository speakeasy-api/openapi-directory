import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaResponse } from "./schemaresponse";
/**
 * Success
 */
export declare class DescribeFleetAdvisorSchemasResponse extends SpeakeasyBase {
    fleetAdvisorSchemas?: SchemaResponse[];
    nextToken?: string;
}
