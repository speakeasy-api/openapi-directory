import { SpeakeasyBase } from "../../../internal/utils";
import { BoundaryProperties } from "./boundaryproperties";
import { Geometry } from "./geometry";
export declare enum BoundaryTypeEnum {
    Feature = "Feature"
}
/**
 * Arbitrary boundary.  GeoJSON Feature.
 */
export declare class Boundary extends SpeakeasyBase {
    /**
     * GeoJSON
     */
    geometry: Geometry;
    id: string;
    /**
     * Properties map.
     */
    properties: BoundaryProperties;
    type: BoundaryTypeEnum;
}
