import { SpeakeasyBase } from "../../../internal/utils";
import { Profile } from "./profile";
/**
 * Success
 */
export declare class SearchProfilesResponse extends SpeakeasyBase {
    items?: Profile[];
    nextToken?: string;
}
