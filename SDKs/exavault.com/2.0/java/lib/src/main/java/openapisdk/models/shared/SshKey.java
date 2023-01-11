package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SshKey
 * Object representing an SSH Key associated with a user.
**/
public class SshKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public SshKeyAttributes attributes;
    public SshKey withAttributes(SshKeyAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SshKey withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public SshKeyRelationships relationships;
    public SshKey withRelationships(SshKeyRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SshKeyTypeEnum type;
    public SshKey withType(SshKeyTypeEnum type) {
        this.type = type;
        return this;
    }
}