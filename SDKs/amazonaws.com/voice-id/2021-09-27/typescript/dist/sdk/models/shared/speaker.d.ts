import { SpeakeasyBase } from "../../../internal/utils";
import { SpeakerStatusEnum } from "./speakerstatusenum";
/**
 * Contains all the information about a speaker.
 */
export declare class Speaker extends SpeakeasyBase {
    createdAt?: Date;
    customerSpeakerId?: string;
    domainId?: string;
    generatedSpeakerId?: string;
    lastAccessedAt?: Date;
    status?: SpeakerStatusEnum;
    updatedAt?: Date;
}
