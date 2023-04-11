import { SpeakeasyBase } from "../../../internal/utils";
import { Area } from "./area";
import { Point } from "./point";
/**
 * Properties map.
 */
export declare class BoundaryProperties extends SpeakeasyBase {
    /**
     * Area with units. Units are always "hectare".
     */
    area: Area;
    centroid: Point;
}
