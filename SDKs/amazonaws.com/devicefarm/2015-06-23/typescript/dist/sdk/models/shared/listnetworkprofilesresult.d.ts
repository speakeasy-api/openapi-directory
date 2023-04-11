import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfile } from "./networkprofile";
/**
 * Success
 */
export declare class ListNetworkProfilesResult extends SpeakeasyBase {
    networkProfiles?: NetworkProfile[];
    nextToken?: string;
}
