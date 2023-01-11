package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExclusionPreview
 * Contains information about what is excluded from an assessment run given the current state of the assessment template.
**/
public class ExclusionPreview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public ExclusionPreview withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public ExclusionPreview withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("recommendation")
    public String recommendation;
    public ExclusionPreview withRecommendation(String recommendation) {
        this.recommendation = recommendation;
        return this;
    }
    @JsonProperty("scopes")
    public Scope[] scopes;
    public ExclusionPreview withScopes(Scope[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ExclusionPreview withTitle(String title) {
        this.title = title;
        return this;
    }
}