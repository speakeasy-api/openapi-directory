import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for the <a>ListChangeSets</a> action.
 */
export declare class ListChangeSetsInput extends SpeakeasyBase {
    nextToken?: string;
    stackName: string;
}
