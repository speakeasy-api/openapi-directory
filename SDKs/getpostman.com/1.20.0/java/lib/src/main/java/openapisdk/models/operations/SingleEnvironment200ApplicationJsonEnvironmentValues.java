package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleEnvironment200ApplicationJsonEnvironmentValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public SingleEnvironment200ApplicationJsonEnvironmentValues withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hovered")
    public Boolean hovered;
    public SingleEnvironment200ApplicationJsonEnvironmentValues withHovered(Boolean hovered) {
        this.hovered = hovered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SingleEnvironment200ApplicationJsonEnvironmentValues withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SingleEnvironment200ApplicationJsonEnvironmentValues withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SingleEnvironment200ApplicationJsonEnvironmentValues withValue(String value) {
        this.value = value;
        return this;
    }
}