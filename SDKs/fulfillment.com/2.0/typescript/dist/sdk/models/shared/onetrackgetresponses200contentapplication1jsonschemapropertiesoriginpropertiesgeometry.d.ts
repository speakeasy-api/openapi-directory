import { SpeakeasyBase } from "../../../internal/utils";
/**
 * the geometry type
 */
export declare enum OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon",
    MultiPoint = "MultiPoint",
    MultiLineString = "MultiLineString",
    MultiPolygon = "MultiPolygon"
}
/**
 * GeoJSon geometry
 *
 * @see {@link http://geojson.org/geojson-spec.html#geometry-objects}
 */
export declare class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry extends SpeakeasyBase {
    coordinates: any;
    /**
     * the geometry type
     */
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum;
}
