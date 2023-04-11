import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for the <a>ExecuteChangeSet</a> action.
 */
export declare class ExecuteChangeSetInput extends SpeakeasyBase {
    changeSetName: string;
    clientRequestToken?: string;
    disableRollback?: boolean;
    stackName?: string;
}
