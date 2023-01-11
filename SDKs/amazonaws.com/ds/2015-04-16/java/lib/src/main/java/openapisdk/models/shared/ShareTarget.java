package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ShareTarget
 * Identifier that contains details about the directory consumer account.
**/
public class ShareTarget {
    @JsonProperty("Id")
    public String id;
    public ShareTarget withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Type")
    public TargetTypeEnum type;
    public ShareTarget withType(TargetTypeEnum type) {
        this.type = type;
        return this;
    }
}