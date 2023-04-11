import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectPolicy } from "./projectpolicy";
/**
 * Success
 */
export declare class ListProjectPoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    projectPolicies?: ProjectPolicy[];
}
