import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeSetSummary } from "./changesetsummary";
/**
 * The output for the <a>ListChangeSets</a> action.
 */
export declare class ListChangeSetsOutput extends SpeakeasyBase {
    nextToken?: string;
    summaries?: ChangeSetSummary[];
}
