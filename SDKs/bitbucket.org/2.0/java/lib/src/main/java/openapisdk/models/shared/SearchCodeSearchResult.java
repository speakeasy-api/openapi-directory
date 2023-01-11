package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchCodeSearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_match_count")
    public Long contentMatchCount;
    public SearchCodeSearchResult withContentMatchCount(Long contentMatchCount) {
        this.contentMatchCount = contentMatchCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_matches")
    public SearchContentMatch[] contentMatches;
    public SearchCodeSearchResult withContentMatches(SearchContentMatch[] contentMatches) {
        this.contentMatches = contentMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public java.util.Map<String, Object> file;
    public SearchCodeSearchResult withFile(java.util.Map<String, Object> file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path_matches")
    public SearchSegment[] pathMatches;
    public SearchCodeSearchResult withPathMatches(SearchSegment[] pathMatches) {
        this.pathMatches = pathMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SearchCodeSearchResult withType(String type) {
        this.type = type;
        return this;
    }
}