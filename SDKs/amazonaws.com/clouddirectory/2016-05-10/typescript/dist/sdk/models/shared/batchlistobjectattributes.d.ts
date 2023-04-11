import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";
/**
 * Represents the output of a <a>ListObjectAttributes</a> operation.
 */
export declare class BatchListObjectAttributes extends SpeakeasyBase {
    facetFilter?: SchemaFacet;
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}
