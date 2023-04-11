import { SpeakeasyBase } from "../../../internal/utils";
import { StackResourceSummary } from "./stackresourcesummary";
/**
 * The output for a <a>ListStackResources</a> action.
 */
export declare class ListStackResourcesOutput extends SpeakeasyBase {
    nextToken?: string;
    stackResourceSummaries?: StackResourceSummary[];
}
