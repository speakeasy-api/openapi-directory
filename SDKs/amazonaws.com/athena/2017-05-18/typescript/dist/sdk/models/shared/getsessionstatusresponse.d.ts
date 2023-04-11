import { SpeakeasyBase } from "../../../internal/utils";
import { SessionStatus } from "./sessionstatus";
/**
 * Success
 */
export declare class GetSessionStatusResponse extends SpeakeasyBase {
    sessionId?: string;
    status?: SessionStatus;
}
