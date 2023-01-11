package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddTagsRequest
 * Specifies the tags to add to a trail.
**/
public class AddTagsRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public AddTagsRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagsList")
    public Tag[] tagsList;
    public AddTagsRequest withTagsList(Tag[] tagsList) {
        this.tagsList = tagsList;
        return this;
    }
}