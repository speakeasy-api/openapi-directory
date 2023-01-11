package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTagsForResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListTagsForResourceResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagInfoForResource")
    public TagInfoForResource tagInfoForResource;
    public ListTagsForResourceResponse withTagInfoForResource(TagInfoForResource tagInfoForResource) {
        this.tagInfoForResource = tagInfoForResource;
        return this;
    }
}