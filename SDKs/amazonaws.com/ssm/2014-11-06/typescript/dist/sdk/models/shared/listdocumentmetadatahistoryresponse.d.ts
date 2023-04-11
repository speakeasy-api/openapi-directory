import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadataResponseInfo } from "./documentmetadataresponseinfo";
/**
 * Success
 */
export declare class ListDocumentMetadataHistoryResponse extends SpeakeasyBase {
    author?: string;
    documentVersion?: string;
    metadata?: DocumentMetadataResponseInfo;
    name?: string;
    nextToken?: string;
}
