import { SpeakeasyBase } from "../../../internal/utils";
import { SubtitleFormatEnum } from "./subtitleformatenum";
/**
 * Provides information about your subtitle file, including format, start index, and Amazon S3 location.
 */
export declare class SubtitlesOutput extends SpeakeasyBase {
    formats?: SubtitleFormatEnum[];
    outputStartIndex?: number;
    subtitleFileUris?: string[];
}
