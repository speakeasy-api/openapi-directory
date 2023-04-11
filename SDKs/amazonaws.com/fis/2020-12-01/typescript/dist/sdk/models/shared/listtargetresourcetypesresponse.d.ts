import { SpeakeasyBase } from "../../../internal/utils";
import { TargetResourceTypeSummary } from "./targetresourcetypesummary";
/**
 * Success
 */
export declare class ListTargetResourceTypesResponse extends SpeakeasyBase {
    nextToken?: string;
    targetResourceTypes?: TargetResourceTypeSummary[];
}
