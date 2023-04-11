import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfile } from "./launchprofile";
/**
 * Success
 */
export declare class ListLaunchProfilesResponse extends SpeakeasyBase {
    launchProfiles?: LaunchProfile[];
    nextToken?: string;
}
