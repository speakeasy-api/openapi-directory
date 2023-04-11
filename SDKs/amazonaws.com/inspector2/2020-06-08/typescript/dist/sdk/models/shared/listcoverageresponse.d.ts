import { SpeakeasyBase } from "../../../internal/utils";
import { CoveredResource } from "./coveredresource";
/**
 * Success
 */
export declare class ListCoverageResponse extends SpeakeasyBase {
    coveredResources?: CoveredResource[];
    nextToken?: string;
}
