package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DriveGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DriveGroupInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public DriveGroupInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DriveGroupInput withName(String name) {
        this.name = name;
        return this;
    }
}