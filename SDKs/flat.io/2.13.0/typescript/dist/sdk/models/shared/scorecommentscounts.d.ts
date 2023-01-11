import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A computed version of the total, unique, weekly and monthly number of
 * comments added on the documents (this doesn't include inline comments).
 *
**/
export declare class ScoreCommentsCounts extends SpeakeasyBase {
    monthly?: number;
    total?: number;
    unique?: number;
    weekly?: number;
}
