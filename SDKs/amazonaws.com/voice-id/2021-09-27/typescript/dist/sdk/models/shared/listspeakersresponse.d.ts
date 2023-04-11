import { SpeakeasyBase } from "../../../internal/utils";
import { SpeakerSummary } from "./speakersummary";
/**
 * Success
 */
export declare class ListSpeakersResponse extends SpeakeasyBase {
    nextToken?: string;
    speakerSummaries?: SpeakerSummary[];
}
