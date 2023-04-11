import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileDetail } from "./profiledetail";
/**
 * Success
 */
export declare class ListProfilesResponse extends SpeakeasyBase {
    nextToken?: string;
    profiles?: ProfileDetail[];
}
