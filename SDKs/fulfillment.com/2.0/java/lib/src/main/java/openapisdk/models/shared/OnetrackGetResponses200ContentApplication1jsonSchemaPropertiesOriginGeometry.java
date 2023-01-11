package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
public class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry {
    @JsonProperty("coordinates")
    public Object coordinates;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry withCoordinates(Object coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonProperty("type")
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum type;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry withType(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum type) {
        this.type = type;
        return this;
    }
}