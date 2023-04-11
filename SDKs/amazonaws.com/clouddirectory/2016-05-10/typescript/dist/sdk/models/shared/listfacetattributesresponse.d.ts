import { SpeakeasyBase } from "../../../internal/utils";
import { FacetAttribute } from "./facetattribute";
/**
 * Success
 */
export declare class ListFacetAttributesResponse extends SpeakeasyBase {
    attributes?: FacetAttribute[];
    nextToken?: string;
}
