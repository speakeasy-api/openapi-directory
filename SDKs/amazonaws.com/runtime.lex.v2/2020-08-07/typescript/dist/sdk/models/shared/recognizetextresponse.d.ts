import { SpeakeasyBase } from "../../../internal/utils";
import { Interpretation } from "./interpretation";
import { Message } from "./message";
import { RecognizedBotMember } from "./recognizedbotmember";
import { SessionState } from "./sessionstate";
/**
 * Success
 */
export declare class RecognizeTextResponse extends SpeakeasyBase {
    interpretations?: Interpretation[];
    messages?: Message[];
    recognizedBotMember?: RecognizedBotMember;
    requestAttributes?: Record<string, string>;
    sessionId?: string;
    sessionState?: SessionState;
}
