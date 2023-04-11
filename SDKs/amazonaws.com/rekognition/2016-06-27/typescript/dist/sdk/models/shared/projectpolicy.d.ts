import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes a project policy in the response from <a>ListProjectPolicies</a>. </p> <p> </p>
 */
export declare class ProjectPolicy extends SpeakeasyBase {
    creationTimestamp?: Date;
    lastUpdatedTimestamp?: Date;
    policyDocument?: string;
    policyName?: string;
    policyRevisionId?: string;
    projectArn?: string;
}
