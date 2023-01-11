package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UnshareTarget
 * Identifier that contains details about the directory consumer account with whom the directory is being unshared.
**/
public class UnshareTarget {
    @JsonProperty("Id")
    public String id;
    public UnshareTarget withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Type")
    public TargetTypeEnum type;
    public UnshareTarget withType(TargetTypeEnum type) {
        this.type = type;
        return this;
    }
}