package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchByImageResourceResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_corrections")
    public AutoCorrections autoCorrections;
    public SearchByImageResourceResults withAutoCorrections(AutoCorrections autoCorrections) {
        this.autoCorrections = autoCorrections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facets")
    public SearchFacetsResponse facets;
    public SearchByImageResourceResults withFacets(SearchFacetsResponse facets) {
        this.facets = facets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_fingerprint")
    public String imageFingerprint;
    public SearchByImageResourceResults withImageFingerprint(String imageFingerprint) {
        this.imageFingerprint = imageFingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public Object images;
    public SearchByImageResourceResults withImages(Object images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related_searches")
    public RelatedSearch[] relatedSearches;
    public SearchByImageResourceResults withRelatedSearches(RelatedSearch[] relatedSearches) {
        this.relatedSearches = relatedSearches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_count")
    public Integer resultCount;
    public SearchByImageResourceResults withResultCount(Integer resultCount) {
        this.resultCount = resultCount;
        return this;
    }
}