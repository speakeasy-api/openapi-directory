import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for the <a>ContinueUpdateRollback</a> action.
 */
export declare class ContinueUpdateRollbackInput extends SpeakeasyBase {
    clientRequestToken?: string;
    resourcesToSkip?: string[];
    roleARN?: string;
    stackName: string;
}
