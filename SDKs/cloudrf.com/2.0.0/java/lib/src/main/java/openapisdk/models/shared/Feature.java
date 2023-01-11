package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Feature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geometry")
    public String geometry;
    public Feature withGeometry(String geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public String properties;
    public Feature withProperties(String properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Feature withType(String type) {
        this.type = type;
        return this;
    }
}