import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";
/**
 * Success
 */
export declare class ListInstanceProfilesResult extends SpeakeasyBase {
    instanceProfiles?: InstanceProfile[];
    nextToken?: string;
}
