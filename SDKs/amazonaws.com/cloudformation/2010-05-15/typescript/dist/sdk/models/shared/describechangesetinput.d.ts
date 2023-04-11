import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for the <a>DescribeChangeSet</a> action.
 */
export declare class DescribeChangeSetInput extends SpeakeasyBase {
    changeSetName: string;
    nextToken?: string;
    stackName?: string;
}
