import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeSetSummaryListItem } from "./changesetsummarylistitem";
/**
 * Success
 */
export declare class ListChangeSetsResponse extends SpeakeasyBase {
    changeSetSummaryList?: ChangeSetSummaryListItem[];
    nextToken?: string;
}
