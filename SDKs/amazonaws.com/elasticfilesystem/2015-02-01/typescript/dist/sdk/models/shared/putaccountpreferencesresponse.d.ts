import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdPreference } from "./resourceidpreference";
/**
 * Success
 */
export declare class PutAccountPreferencesResponse extends SpeakeasyBase {
    /**
     * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
     */
    resourceIdPreference?: ResourceIdPreference;
}
