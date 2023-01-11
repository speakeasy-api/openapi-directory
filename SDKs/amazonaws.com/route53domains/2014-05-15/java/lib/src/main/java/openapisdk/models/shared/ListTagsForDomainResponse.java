package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListTagsForDomainResponse
 * The ListTagsForDomain response includes the following elements.
**/
public class ListTagsForDomainResponse {
    @JsonProperty("TagList")
    public Tag[] tagList;
    public ListTagsForDomainResponse withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}