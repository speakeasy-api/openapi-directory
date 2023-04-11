import { SpeakeasyBase } from "../../../internal/utils";
import { QueryDefinition } from "./querydefinition";
/**
 * Success
 */
export declare class DescribeQueryDefinitionsResponse extends SpeakeasyBase {
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
    queryDefinitions?: QueryDefinition[];
}
