package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassificationInclusion
 * Connects a Classification with a classified item like a Series, Season or Episode.
 * 
**/
public class ClassificationInclusion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public ClassificationInclusionAttributes attributes;
    public ClassificationInclusion withAttributes(ClassificationInclusionAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ClassificationInclusion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public ClassificationInclusionRelationships relationships;
    public ClassificationInclusion withRelationships(ClassificationInclusionRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ClassificationInclusion withType(String type) {
        this.type = type;
        return this;
    }
}