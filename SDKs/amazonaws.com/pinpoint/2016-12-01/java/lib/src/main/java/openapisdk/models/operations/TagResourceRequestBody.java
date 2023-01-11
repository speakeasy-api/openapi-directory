package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequestBody {
    @JsonProperty("TagsModel")
    public TagResourceRequestBodyTagsModel tagsModel;
    public TagResourceRequestBody withTagsModel(TagResourceRequestBodyTagsModel tagsModel) {
        this.tagsModel = tagsModel;
        return this;
    }
}