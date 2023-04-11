import { SpeakeasyBase } from "../../../internal/utils";
import { State } from "./state";
/**
 * Details the state of Amazon Inspector for each resource type Amazon Inspector scans.
 */
export declare class ResourceState extends SpeakeasyBase {
    ec2: State;
    ecr: State;
    /**
     * An object that described the state of Amazon Inspector scans for an account.
     */
    lambda?: State;
}
