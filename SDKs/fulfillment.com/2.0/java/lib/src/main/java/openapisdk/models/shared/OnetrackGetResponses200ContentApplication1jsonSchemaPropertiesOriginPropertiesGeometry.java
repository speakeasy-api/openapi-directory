package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry
 * GeoJSon geometry
 * http://geojson.org/geojson-spec.html#geometry-objects
**/
public class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry {
    @JsonProperty("coordinates")
    public Object coordinates;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry withCoordinates(Object coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonProperty("type")
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum type;
    public OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry withType(OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum type) {
        this.type = type;
        return this;
    }
}