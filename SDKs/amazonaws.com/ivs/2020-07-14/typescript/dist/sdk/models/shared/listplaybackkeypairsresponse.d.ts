import { SpeakeasyBase } from "../../../internal/utils";
import { PlaybackKeyPairSummary } from "./playbackkeypairsummary";
/**
 * Success
 */
export declare class ListPlaybackKeyPairsResponse extends SpeakeasyBase {
    keyPairs: PlaybackKeyPairSummary[];
    nextToken?: string;
}
