import { SpeakeasyBase } from "../../../internal/utils";
import { SessionManagerOutputUrl } from "./sessionmanageroutputurl";
import { SessionStatusEnum } from "./sessionstatusenum";
/**
 * Information about a Session Manager connection to a managed node.
 */
export declare class Session extends SpeakeasyBase {
    details?: string;
    documentName?: string;
    endDate?: Date;
    maxSessionDuration?: string;
    outputUrl?: SessionManagerOutputUrl;
    owner?: string;
    reason?: string;
    sessionId?: string;
    startDate?: Date;
    status?: SessionStatusEnum;
    target?: string;
}
