package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackTrackingResponseFeatureGeometry
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
public class GetTrackTrackingResponseFeatureGeometry {
    @JsonProperty("coordinates")
    public Object coordinates;
    public GetTrackTrackingResponseFeatureGeometry withCoordinates(Object coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonProperty("type")
    public GetTrackTrackingResponseFeatureGeometryTypeEnum type;
    public GetTrackTrackingResponseFeatureGeometry withType(GetTrackTrackingResponseFeatureGeometryTypeEnum type) {
        this.type = type;
        return this;
    }
}