import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolsListDataSummary } from "./protocolslistdatasummary";
/**
 * Success
 */
export declare class ListProtocolsListsResponse extends SpeakeasyBase {
    nextToken?: string;
    protocolsLists?: ProtocolsListDataSummary[];
}
