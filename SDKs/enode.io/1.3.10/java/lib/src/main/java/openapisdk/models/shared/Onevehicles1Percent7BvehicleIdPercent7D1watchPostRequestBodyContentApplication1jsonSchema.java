package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchemaPropertiesEnum properties;
    public Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema withProperties(Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchemaPropertiesEnum properties) {
        this.properties = properties;
        return this;
    }
}