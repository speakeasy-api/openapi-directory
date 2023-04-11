import { SpeakeasyBase } from "../../../internal/utils";
import { StreamSummary } from "./streamsummary";
/**
 * Represents the output for <code>ListStreams</code>.
 */
export declare class ListStreamsOutput extends SpeakeasyBase {
    hasMoreStreams: boolean;
    nextToken?: string;
    streamNames: string[];
    streamSummaries?: StreamSummary[];
}
