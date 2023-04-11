import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
import { UnmappedAttribute } from "./unmappedattribute";
/**
 * Success
 */
export declare class DetectEntitiesV2Response extends SpeakeasyBase {
    entities: Entity[];
    modelVersion: string;
    paginationToken?: string;
    unmappedAttributes?: UnmappedAttribute[];
}
