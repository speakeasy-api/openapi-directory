import { SpeakeasyBase } from "../../../internal/utils";
import { StackEvent } from "./stackevent";
/**
 * The output for a <a>DescribeStackEvents</a> action.
 */
export declare class DescribeStackEventsOutput extends SpeakeasyBase {
    nextToken?: string;
    stackEvents?: StackEvent[];
}
