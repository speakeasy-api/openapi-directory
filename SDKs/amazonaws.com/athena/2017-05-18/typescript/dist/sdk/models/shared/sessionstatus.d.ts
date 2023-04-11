import { SpeakeasyBase } from "../../../internal/utils";
import { SessionStateEnum } from "./sessionstateenum";
/**
 * Contains information about the status of a session.
 */
export declare class SessionStatus extends SpeakeasyBase {
    endDateTime?: Date;
    idleSinceDateTime?: Date;
    lastModifiedDateTime?: Date;
    startDateTime?: Date;
    state?: SessionStateEnum;
    stateChangeReason?: string;
}
