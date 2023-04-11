import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU).
 */
export declare class AutoDeployment extends SpeakeasyBase {
    enabled?: boolean;
    retainStacksOnAccountRemoval?: boolean;
}
