import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GeometryTypeEnum {
    Point = "Point",
    Polygon = "Polygon",
    MultiPolygon = "MultiPolygon"
}
/**
 * GeoJSON
 */
export declare class Geometry extends SpeakeasyBase {
    coordinates: string[];
    type: GeometryTypeEnum;
}
