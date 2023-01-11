package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageSearchItemSearchResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageSearchItem[] images;
    public ImageSearchItemSearchResults withImages(ImageSearchItem[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related_searches")
    public RelatedSearch[] relatedSearches;
    public ImageSearchItemSearchResults withRelatedSearches(RelatedSearch[] relatedSearches) {
        this.relatedSearches = relatedSearches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_count")
    public Integer resultCount;
    public ImageSearchItemSearchResults withResultCount(Integer resultCount) {
        this.resultCount = resultCount;
        return this;
    }
}