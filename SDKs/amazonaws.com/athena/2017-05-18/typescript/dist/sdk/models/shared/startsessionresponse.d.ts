import { SpeakeasyBase } from "../../../internal/utils";
import { SessionStateEnum } from "./sessionstateenum";
/**
 * Success
 */
export declare class StartSessionResponse extends SpeakeasyBase {
    sessionId?: string;
    state?: SessionStateEnum;
}
