package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Episode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public EpisodeAttributes attributes;
    public Episode withAttributes(EpisodeAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Episode withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public EpisodeRelationships relationships;
    public Episode withRelationships(EpisodeRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Episode withType(String type) {
        this.type = type;
        return this;
    }
}