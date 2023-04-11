import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrackRequest extends SpeakeasyBase {
    trackingNumber?: string;
}
/**
 * the geometry type
 */
export declare enum GetTrackTrackingResponseFeatureGeometryTypeEnum {
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
export declare class GetTrackTrackingResponseFeatureGeometry extends SpeakeasyBase {
    coordinates: any;
    /**
     * the geometry type
     */
    type: GetTrackTrackingResponseFeatureGeometryTypeEnum;
}
export declare class GetTrackTrackingResponseFeatureProperties extends SpeakeasyBase {
    name?: string;
}
export declare enum GetTrackTrackingResponseFeatureTypeEnum {
    Feature = "Feature"
}
/**
 * GeoJSon Feature
 *
 * @see {@link https://tools.ietf.org/html/rfc7946#section-3.2}
 */
export declare class GetTrackTrackingResponseFeature extends SpeakeasyBase {
    bbox?: any[];
    /**
     * GeoJSon geometry
     */
    centerline?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry;
    /**
     * GeoJSon geometry
     */
    geometry: GetTrackTrackingResponseFeatureGeometry;
    id?: number;
    properties: GetTrackTrackingResponseFeatureProperties;
    title?: string;
    type: GetTrackTrackingResponseFeatureTypeEnum;
}
export declare enum GetTrackTrackingResponseTrackingEventV2EventSourceEnum {
    Carrier = "carrier",
    Internal = "internal"
}
export declare class GetTrackTrackingResponseTrackingEventV2 extends SpeakeasyBase {
    eventCategory?: string;
    eventCategoryCode?: number;
    eventDateTime?: Date;
    /**
     * GeoJSon Feature
     */
    eventLocation?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;
    eventSource?: GetTrackTrackingResponseTrackingEventV2EventSourceEnum;
    eventStatus?: string;
}
export declare class GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 extends SpeakeasyBase {
    id: number;
}
export declare class GetTrackTrackingResponseTrackingNumberV2 extends SpeakeasyBase {
    /**
     * The computer readable alternative to the human readable
     */
    barcodeScanValue?: string;
    carrier?: GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2;
    /**
     * The human readable tracking number recipients (consignee) expect
     */
    value?: string;
}
/**
 * OK
 */
export declare class GetTrackTrackingResponse extends SpeakeasyBase {
    /**
     * GeoJSon Feature
     */
    destination?: shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin;
    fdcOrderId?: number;
    firstCheckedDateTime?: Date;
    firstTransitEvent?: Date;
    lastCheckedDateTime?: Date;
    lastUpdatedDateTime?: Date;
    /**
     * GeoJSon Feature
     */
    origin?: GetTrackTrackingResponseFeature;
    status?: string;
    statusCategoryCode?: number;
    statusDateTime?: Date;
    statusMessage?: string;
    trackedEvents?: GetTrackTrackingResponseTrackingEventV2[];
    trackingNumber?: GetTrackTrackingResponseTrackingNumberV2;
}
export declare class GetTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trackingResponse?: GetTrackTrackingResponse;
}
