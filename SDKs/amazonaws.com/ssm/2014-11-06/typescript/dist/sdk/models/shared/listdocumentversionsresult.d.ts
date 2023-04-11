import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentVersionInfo } from "./documentversioninfo";
/**
 * Success
 */
export declare class ListDocumentVersionsResult extends SpeakeasyBase {
    documentVersions?: DocumentVersionInfo[];
    nextToken?: string;
}
