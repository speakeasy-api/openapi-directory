import { SpeakeasyBase } from "../../../internal/utils";
import { ContentReference } from "./contentreference";
import { DocumentText } from "./documenttext";
/**
 * The document.
 */
export declare class Document extends SpeakeasyBase {
    contentReference: ContentReference;
    excerpt?: DocumentText;
    title?: DocumentText;
}
