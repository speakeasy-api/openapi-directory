import { SpeakeasyBase } from "../../../internal/utils";
import { ExtractedCharactersListItem } from "./extractedcharacterslistitem";
/**
 * Information about the document, discovered during text extraction.
 */
export declare class DocumentMetadata extends SpeakeasyBase {
    extractedCharacters?: ExtractedCharactersListItem[];
    pages?: number;
}
