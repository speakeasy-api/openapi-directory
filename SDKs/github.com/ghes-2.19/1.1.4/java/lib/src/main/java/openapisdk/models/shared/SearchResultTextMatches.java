package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResultTextMatches {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fragment")
    public String fragment;
    public SearchResultTextMatches withFragment(String fragment) {
        this.fragment = fragment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches")
    public SearchResultTextMatchesMatches[] matches;
    public SearchResultTextMatches withMatches(SearchResultTextMatchesMatches[] matches) {
        this.matches = matches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_type")
    public String objectType;
    public SearchResultTextMatches withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_url")
    public String objectUrl;
    public SearchResultTextMatches withObjectUrl(String objectUrl) {
        this.objectUrl = objectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public String property;
    public SearchResultTextMatches withProperty(String property) {
        this.property = property;
        return this;
    }
}