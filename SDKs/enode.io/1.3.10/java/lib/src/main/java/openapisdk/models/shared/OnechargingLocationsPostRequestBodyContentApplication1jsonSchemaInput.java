package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput withName(String name) {
        this.name = name;
        return this;
    }
}