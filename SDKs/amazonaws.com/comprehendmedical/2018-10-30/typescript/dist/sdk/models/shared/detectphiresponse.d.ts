import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * Success
 */
export declare class DetectPHIResponse extends SpeakeasyBase {
    entities: Entity[];
    modelVersion: string;
    paginationToken?: string;
}
