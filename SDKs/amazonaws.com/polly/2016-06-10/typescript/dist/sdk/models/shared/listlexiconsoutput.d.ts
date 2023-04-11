import { SpeakeasyBase } from "../../../internal/utils";
import { LexiconDescription } from "./lexicondescription";
/**
 * Success
 */
export declare class ListLexiconsOutput extends SpeakeasyBase {
    lexicons?: LexiconDescription[];
    nextToken?: string;
}
