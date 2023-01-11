package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Share
 * Object contains share properties.
**/
public class Share {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public ShareAttributes attributes;
    public Share withAttributes(ShareAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public Share withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public ShareShareRelationships relationships;
    public Share withRelationships(ShareShareRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ShareTypeEnum type;
    public Share withType(ShareTypeEnum type) {
        this.type = type;
        return this;
    }
}