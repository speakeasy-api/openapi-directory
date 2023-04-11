import { SpeakeasyBase } from "../../../internal/utils";
import { FullDocumentEnum } from "./fulldocumentenum";
/**
 *  Specific configuration settings for a DocumentDB event source.
 */
export declare class DocumentDBEventSourceConfig extends SpeakeasyBase {
    collectionName?: string;
    databaseName?: string;
    fullDocument?: FullDocumentEnum;
}
