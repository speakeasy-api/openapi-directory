package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDomainSuggestionsRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public GetDomainSuggestionsRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("OnlyAvailable")
    public Boolean onlyAvailable;
    public GetDomainSuggestionsRequest withOnlyAvailable(Boolean onlyAvailable) {
        this.onlyAvailable = onlyAvailable;
        return this;
    }
    @JsonProperty("SuggestionCount")
    public Long suggestionCount;
    public GetDomainSuggestionsRequest withSuggestionCount(Long suggestionCount) {
        this.suggestionCount = suggestionCount;
        return this;
    }
}