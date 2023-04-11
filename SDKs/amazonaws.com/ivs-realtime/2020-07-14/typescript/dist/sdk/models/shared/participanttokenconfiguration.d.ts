import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipantTokenCapabilityEnum } from "./participanttokencapabilityenum";
/**
 * Object specifying a participant token configuration in a stage.
 */
export declare class ParticipantTokenConfiguration extends SpeakeasyBase {
    attributes?: Record<string, string>;
    capabilities?: ParticipantTokenCapabilityEnum[];
    duration?: number;
    userId?: string;
}
