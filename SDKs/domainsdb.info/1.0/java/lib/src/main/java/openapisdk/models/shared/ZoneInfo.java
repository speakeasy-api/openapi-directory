package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZoneInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String[] description;
    public ZoneInfo withDescription(String[] description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_bundles")
    public String[] inBundles;
    public ZoneInfo withInBundles(String[] inBundles) {
        this.inBundles = inBundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includes")
    public String[] includes;
    public ZoneInfo withIncludes(String[] includes) {
        this.includes = includes;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ZoneInfo withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("zone")
    public String zone;
    public ZoneInfo withZone(String zone) {
        this.zone = zone;
        return this;
    }
}