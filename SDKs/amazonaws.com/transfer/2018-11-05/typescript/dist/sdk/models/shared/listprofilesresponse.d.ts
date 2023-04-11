import { SpeakeasyBase } from "../../../internal/utils";
import { ListedProfile } from "./listedprofile";
/**
 * Success
 */
export declare class ListProfilesResponse extends SpeakeasyBase {
    nextToken?: string;
    profiles: ListedProfile[];
}
