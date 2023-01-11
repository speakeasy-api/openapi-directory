package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContainersGroupsNameOrIdMaproutePostInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ContainersGroupsNameOrIdMaproutePostInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warnings")
    public String[] warnings;
    public ContainersGroupsNameOrIdMaproutePostInfo withWarnings(String[] warnings) {
        this.warnings = warnings;
        return this;
    }
}