import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the session.
 */
export declare class SessionData extends SpeakeasyBase {
    description?: string;
    name: string;
    sessionArn: string;
    sessionId: string;
    tags?: Record<string, string>;
}
