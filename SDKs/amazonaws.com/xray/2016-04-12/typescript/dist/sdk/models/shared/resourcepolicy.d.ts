import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource policy grants one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy is associated with a specific Amazon Web Services account.
 */
export declare class ResourcePolicy extends SpeakeasyBase {
    lastUpdatedTime?: Date;
    policyDocument?: string;
    policyName?: string;
    policyRevisionId?: string;
}
