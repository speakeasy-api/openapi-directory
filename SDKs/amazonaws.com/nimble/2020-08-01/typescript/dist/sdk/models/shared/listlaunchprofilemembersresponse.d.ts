import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileMembership } from "./launchprofilemembership";
/**
 * Success
 */
export declare class ListLaunchProfileMembersResponse extends SpeakeasyBase {
    members?: LaunchProfileMembership[];
    nextToken?: string;
}
