import { SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { DocumentTypeListItem } from "./documenttypelistitem";
import { Entity } from "./entity";
import { ErrorsListItem } from "./errorslistitem";
/**
 * Success
 */
export declare class DetectEntitiesResponse extends SpeakeasyBase {
    blocks?: Block[];
    documentMetadata?: DocumentMetadata;
    documentType?: DocumentTypeListItem[];
    entities?: Entity[];
    errors?: ErrorsListItem[];
}
