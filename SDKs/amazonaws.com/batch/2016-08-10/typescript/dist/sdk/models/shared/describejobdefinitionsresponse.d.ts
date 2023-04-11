import { SpeakeasyBase } from "../../../internal/utils";
import { JobDefinition } from "./jobdefinition";
/**
 * Success
 */
export declare class DescribeJobDefinitionsResponse extends SpeakeasyBase {
    jobDefinitions?: JobDefinition[];
    nextToken?: string;
}
