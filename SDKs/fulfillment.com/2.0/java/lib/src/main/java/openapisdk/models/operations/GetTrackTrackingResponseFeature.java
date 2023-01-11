package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTrackTrackingResponseFeature
 * GeoJSon Feature
 * https://tools.ietf.org/html/rfc7946#section-3.2
**/
public class GetTrackTrackingResponseFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bbox")
    public Object[] bbox;
    public GetTrackTrackingResponseFeature withBbox(Object[] bbox) {
        this.bbox = bbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("centerline")
    public openapisdk.models.shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry centerline;
    public GetTrackTrackingResponseFeature withCenterline(openapisdk.models.shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry centerline) {
        this.centerline = centerline;
        return this;
    }
    @JsonProperty("geometry")
    public GetTrackTrackingResponseFeatureGeometry geometry;
    public GetTrackTrackingResponseFeature withGeometry(GetTrackTrackingResponseFeatureGeometry geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetTrackTrackingResponseFeature withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("properties")
    public GetTrackTrackingResponseFeatureProperties properties;
    public GetTrackTrackingResponseFeature withProperties(GetTrackTrackingResponseFeatureProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetTrackTrackingResponseFeature withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public GetTrackTrackingResponseFeatureTypeEnum type;
    public GetTrackTrackingResponseFeature withType(GetTrackTrackingResponseFeatureTypeEnum type) {
        this.type = type;
        return this;
    }
}