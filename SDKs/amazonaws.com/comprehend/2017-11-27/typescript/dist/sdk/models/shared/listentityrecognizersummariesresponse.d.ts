import { SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerSummary } from "./entityrecognizersummary";
/**
 * Success
 */
export declare class ListEntityRecognizerSummariesResponse extends SpeakeasyBase {
    entityRecognizerSummariesList?: EntityRecognizerSummary[];
    nextToken?: string;
}
