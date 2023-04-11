import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedTranscript } from "./associatedtranscript";
/**
 * Success
 */
export declare class SearchAssociatedTranscriptsResponse extends SpeakeasyBase {
    associatedTranscripts?: AssociatedTranscript[];
    botId?: string;
    botRecommendationId?: string;
    botVersion?: string;
    localeId?: string;
    nextIndex?: number;
    totalResults?: number;
}
