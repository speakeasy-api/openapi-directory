import { SpeakeasyBase } from "../../../internal/utils";
import { StackStatusEnum } from "./stackstatusenum";
/**
 * The input for <a>ListStacks</a> action.
 */
export declare class ListStacksInput extends SpeakeasyBase {
    nextToken?: string;
    stackStatusFilter?: StackStatusEnum[];
}
