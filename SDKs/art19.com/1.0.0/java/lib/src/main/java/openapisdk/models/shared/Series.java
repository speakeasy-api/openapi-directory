package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Series {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public SeriesAttributes attributes;
    public Series withAttributes(SeriesAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Series withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public SeriesRelationships relationships;
    public Series withRelationships(SeriesRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Series withType(String type) {
        this.type = type;
        return this;
    }
}