import { SpeakeasyBase } from "../../../internal/utils";
import { SubtitleFormatEnum } from "./subtitleformatenum";
/**
 * <p>Generate subtitles for your media file with your transcription request.</p> <p>You can choose a start index of 0 or 1, and you can specify either WebVTT or SubRip (or both) as your output format.</p> <p>Note that your subtitle files are placed in the same location as your transcription output.</p>
 */
export declare class Subtitles extends SpeakeasyBase {
    formats?: SubtitleFormatEnum[];
    outputStartIndex?: number;
}
