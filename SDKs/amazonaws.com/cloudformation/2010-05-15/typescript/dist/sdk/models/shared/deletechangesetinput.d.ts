import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for the <a>DeleteChangeSet</a> action.
 */
export declare class DeleteChangeSetInput extends SpeakeasyBase {
    changeSetName: string;
    stackName?: string;
}
