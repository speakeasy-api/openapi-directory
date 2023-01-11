package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeImageSearchResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_corrections")
    public AutoCorrections autoCorrections;
    public CreativeImageSearchResults withAutoCorrections(AutoCorrections autoCorrections) {
        this.autoCorrections = autoCorrections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageSearchItemCreative[] images;
    public CreativeImageSearchResults withImages(ImageSearchItemCreative[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related_searches")
    public RelatedSearch[] relatedSearches;
    public CreativeImageSearchResults withRelatedSearches(RelatedSearch[] relatedSearches) {
        this.relatedSearches = relatedSearches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_count")
    public Integer resultCount;
    public CreativeImageSearchResults withResultCount(Integer resultCount) {
        this.resultCount = resultCount;
        return this;
    }
}