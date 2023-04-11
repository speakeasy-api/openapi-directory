import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaFacet } from "./schemafacet";
/**
 * Success
 */
export declare class GetObjectInformationResponse extends SpeakeasyBase {
    objectIdentifier?: string;
    schemaFacets?: SchemaFacet[];
}
