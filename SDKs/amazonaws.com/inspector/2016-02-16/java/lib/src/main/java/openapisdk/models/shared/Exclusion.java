package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Exclusion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Exclusion withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public Exclusion withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Exclusion withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendation")
    public String recommendation;
    public Exclusion withRecommendation(String recommendation) {
        this.recommendation = recommendation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public Scope[] scopes;
    public Exclusion withScopes(Scope[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Exclusion withTitle(String title) {
        this.title = title;
        return this;
    }
}