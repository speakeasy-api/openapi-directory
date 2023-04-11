import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSession } from "./streamingsession";
/**
 * Success
 */
export declare class StopStreamingSessionResponse extends SpeakeasyBase {
    /**
     * A streaming session is a virtual workstation created using a particular launch profile.
     */
    session?: StreamingSession;
}
