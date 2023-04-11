import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipantTokenCapabilityEnum } from "./participanttokencapabilityenum";
/**
 * Object specifying a participant token in a stage.
 */
export declare class ParticipantToken extends SpeakeasyBase {
    attributes?: Record<string, string>;
    capabilities?: ParticipantTokenCapabilityEnum[];
    duration?: number;
    expirationTime?: Date;
    participantId?: string;
    token?: string;
    userId?: string;
}
