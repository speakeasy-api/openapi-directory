import { SpeakeasyBase } from "../../../internal/utils";
import { HighlightTypeEnum } from "./highlighttypeenum";
/**
 * Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response.
 */
export declare class Highlight extends SpeakeasyBase {
    beginOffset: number;
    endOffset: number;
    topAnswer?: boolean;
    type?: HighlightTypeEnum;
}
