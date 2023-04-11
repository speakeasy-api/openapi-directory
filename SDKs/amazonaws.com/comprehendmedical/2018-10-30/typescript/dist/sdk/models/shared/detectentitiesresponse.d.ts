import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
import { UnmappedAttribute } from "./unmappedattribute";
/**
 * Success
 */
export declare class DetectEntitiesResponse extends SpeakeasyBase {
    entities: Entity[];
    modelVersion: string;
    paginationToken?: string;
    unmappedAttributes?: UnmappedAttribute[];
}
