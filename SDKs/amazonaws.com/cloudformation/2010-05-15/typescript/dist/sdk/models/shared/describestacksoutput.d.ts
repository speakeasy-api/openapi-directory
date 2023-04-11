import { SpeakeasyBase } from "../../../internal/utils";
import { Stack } from "./stack";
/**
 * The output for a <a>DescribeStacks</a> action.
 */
export declare class DescribeStacksOutput extends SpeakeasyBase {
    nextToken?: string;
    stacks?: Stack[];
}
