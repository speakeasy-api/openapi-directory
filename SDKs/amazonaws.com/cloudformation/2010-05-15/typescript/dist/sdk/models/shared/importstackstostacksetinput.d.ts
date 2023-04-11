import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
import { StackSetOperationPreferences } from "./stacksetoperationpreferences";
export declare class ImportStacksToStackSetInput extends SpeakeasyBase {
    callAs?: CallAsEnum;
    operationId?: string;
    /**
     * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
     */
    operationPreferences?: StackSetOperationPreferences;
    organizationalUnitIds?: string[];
    stackIds?: string[];
    stackIdsUrl?: string;
    stackSetName: string;
}
