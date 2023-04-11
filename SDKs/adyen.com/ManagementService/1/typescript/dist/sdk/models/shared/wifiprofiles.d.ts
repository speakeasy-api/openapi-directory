import { SpeakeasyBase } from "../../../internal/utils";
import { Profile } from "./profile";
import { Settings } from "./settings";
export declare class WifiProfiles extends SpeakeasyBase {
    /**
     * List of remote Wi-Fi profiles.
     */
    profiles?: Profile[];
    settings?: Settings;
}
