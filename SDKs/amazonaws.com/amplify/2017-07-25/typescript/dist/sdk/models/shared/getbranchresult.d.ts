import { SpeakeasyBase } from "../../../internal/utils";
import { Branch } from "./branch";
/**
 * Success
 */
export declare class GetBranchResult extends SpeakeasyBase {
    /**
     *  The branch for an Amplify app, which maps to a third-party repository branch.
     */
    branch: Branch;
}
