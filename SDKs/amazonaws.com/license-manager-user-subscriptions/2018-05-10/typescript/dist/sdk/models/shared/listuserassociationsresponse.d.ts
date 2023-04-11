import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceUserSummary } from "./instanceusersummary";
/**
 * Success
 */
export declare class ListUserAssociationsResponse extends SpeakeasyBase {
    instanceUserSummaries?: InstanceUserSummary[];
    nextToken?: string;
}
