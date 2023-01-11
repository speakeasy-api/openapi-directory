package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActivityType
 * Represents an activity type.
**/
public class ActivityType {
    @JsonProperty("name")
    public String name;
    public ActivityType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public ActivityType withVersion(String version) {
        this.version = version;
        return this;
    }
}