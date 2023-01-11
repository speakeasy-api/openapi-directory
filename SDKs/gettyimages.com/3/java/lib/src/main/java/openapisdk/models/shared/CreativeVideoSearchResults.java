package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeVideoSearchResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_corrections")
    public AutoCorrections autoCorrections;
    public CreativeVideoSearchResults withAutoCorrections(AutoCorrections autoCorrections) {
        this.autoCorrections = autoCorrections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facets")
    public SearchFacetsResponse facets;
    public CreativeVideoSearchResults withFacets(SearchFacetsResponse facets) {
        this.facets = facets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related_searches")
    public RelatedSearch[] relatedSearches;
    public CreativeVideoSearchResults withRelatedSearches(RelatedSearch[] relatedSearches) {
        this.relatedSearches = relatedSearches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_count")
    public Integer resultCount;
    public CreativeVideoSearchResults withResultCount(Integer resultCount) {
        this.resultCount = resultCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public CreativeVideoSearchItem[] videos;
    public CreativeVideoSearchResults withVideos(CreativeVideoSearchItem[] videos) {
        this.videos = videos;
        return this;
    }
}