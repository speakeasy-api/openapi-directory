import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { SessionStatus } from "./sessionstatus";
/**
 * Contains summary information about a session.
 */
export declare class SessionSummary extends SpeakeasyBase {
    description?: string;
    engineVersion?: EngineVersion;
    notebookVersion?: string;
    sessionId?: string;
    status?: SessionStatus;
}
