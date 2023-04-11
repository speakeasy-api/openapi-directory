import { SpeakeasyBase } from "../../../internal/utils";
import { AllowListSummary } from "./allowlistsummary";
/**
 * Success
 */
export declare class ListAllowListsResponse extends SpeakeasyBase {
    allowLists?: AllowListSummary[];
    nextToken?: string;
}
