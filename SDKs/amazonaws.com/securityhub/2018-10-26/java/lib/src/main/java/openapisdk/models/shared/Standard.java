package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Standard
 * Provides information about a specific standard.
**/
public class Standard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Standard withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnabledByDefault")
    public Boolean enabledByDefault;
    public Standard withEnabledByDefault(Boolean enabledByDefault) {
        this.enabledByDefault = enabledByDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Standard withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StandardsArn")
    public String standardsArn;
    public Standard withStandardsArn(String standardsArn) {
        this.standardsArn = standardsArn;
        return this;
    }
}