package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrustedAdvisorCheckDescription
 * The description and metadata for a Trusted Advisor check.
**/
public class TrustedAdvisorCheckDescription {
    @JsonProperty("category")
    public String category;
    public TrustedAdvisorCheckDescription withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public TrustedAdvisorCheckDescription withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public TrustedAdvisorCheckDescription withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("metadata")
    public String[] metadata;
    public TrustedAdvisorCheckDescription withMetadata(String[] metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TrustedAdvisorCheckDescription withName(String name) {
        this.name = name;
        return this;
    }
}