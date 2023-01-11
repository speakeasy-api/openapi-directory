package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin
 * GeoJSon Feature
 * https://tools.ietf.org/html/rfc7946#section-3.2
**/
public class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bbox")
    public Object[] bbox;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin withBbox(Object[] bbox) {
        this.bbox = bbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("centerline")
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry centerline;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin withCenterline(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry centerline) {
        this.centerline = centerline;
        return this;
    }
    @JsonProperty("geometry")
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry geometry;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin withGeometry(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("properties")
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties properties;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin withProperties(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum type;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin withType(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum type) {
        this.type = type;
        return this;
    }
}