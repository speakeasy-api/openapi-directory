package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceResponse {
    @JsonProperty("TagsModel")
    public TagsModel tagsModel;
    public ListTagsForResourceResponse withTagsModel(TagsModel tagsModel) {
        this.tagsModel = tagsModel;
        return this;
    }
}