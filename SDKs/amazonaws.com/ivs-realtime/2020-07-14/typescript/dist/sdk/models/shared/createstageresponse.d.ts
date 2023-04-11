import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipantToken } from "./participanttoken";
import { Stage } from "./stage";
/**
 * Success
 */
export declare class CreateStageResponse extends SpeakeasyBase {
    participantTokens?: ParticipantToken[];
    stage?: Stage;
}
