package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveTagsRequest
 * Specifies the tags to remove from a trail.
**/
public class RemoveTagsRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public RemoveTagsRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagsList")
    public Tag[] tagsList;
    public RemoveTagsRequest withTagsList(Tag[] tagsList) {
        this.tagsList = tagsList;
        return this;
    }
}