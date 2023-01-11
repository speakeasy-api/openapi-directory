package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomDataIdentifierRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateCustomDataIdentifierRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateCustomDataIdentifierRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreWords")
    public String[] ignoreWords;
    public CreateCustomDataIdentifierRequestBody withIgnoreWords(String[] ignoreWords) {
        this.ignoreWords = ignoreWords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public CreateCustomDataIdentifierRequestBody withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumMatchDistance")
    public Long maximumMatchDistance;
    public CreateCustomDataIdentifierRequestBody withMaximumMatchDistance(Long maximumMatchDistance) {
        this.maximumMatchDistance = maximumMatchDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateCustomDataIdentifierRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public CreateCustomDataIdentifierRequestBody withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateCustomDataIdentifierRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}