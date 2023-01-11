package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Classification
 * A classification, in general, is something that can describe other resources, such as countries, genres or
 * languages. How they're described (included or excluded, and whether they're the primary classification
 * of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
 * and could have an effect only on directory information, or may have an effect on ad decisioning.
 * 
**/
public class Classification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public ClassificationAttributes attributes;
    public Classification withAttributes(ClassificationAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Classification withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Classification withType(String type) {
        this.type = type;
        return this;
    }
}