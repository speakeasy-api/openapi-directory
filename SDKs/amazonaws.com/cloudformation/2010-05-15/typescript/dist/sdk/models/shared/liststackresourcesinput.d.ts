import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for the <a>ListStackResource</a> action.
 */
export declare class ListStackResourcesInput extends SpeakeasyBase {
    nextToken?: string;
    stackName: string;
}
