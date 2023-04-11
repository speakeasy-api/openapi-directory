import { SpeakeasyBase } from "../../../internal/utils";
import { StackResourceDrift } from "./stackresourcedrift";
/**
 * Success
 */
export declare class DescribeStackResourceDriftsOutput extends SpeakeasyBase {
    nextToken?: string;
    stackResourceDrifts: StackResourceDrift[];
}
