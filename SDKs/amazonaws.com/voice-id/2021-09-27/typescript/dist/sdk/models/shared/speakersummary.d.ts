import { SpeakeasyBase } from "../../../internal/utils";
import { SpeakerStatusEnum } from "./speakerstatusenum";
/**
 * Contains a summary of information about a speaker.
 */
export declare class SpeakerSummary extends SpeakeasyBase {
    createdAt?: Date;
    customerSpeakerId?: string;
    domainId?: string;
    generatedSpeakerId?: string;
    lastAccessedAt?: Date;
    status?: SpeakerStatusEnum;
    updatedAt?: Date;
}
