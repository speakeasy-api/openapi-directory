import { SpeakeasyBase } from "../../../internal/utils";
import { Highlight } from "./highlight";
/**
 * Provides text and information about where to highlight the text.
 */
export declare class TextWithHighlights extends SpeakeasyBase {
    highlights?: Highlight[];
    text?: string;
}
