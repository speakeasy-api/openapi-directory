package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceTag
 * A resource tag.
**/
public class ResourceTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public ResourceTag withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagsList")
    public Tag[] tagsList;
    public ResourceTag withTagsList(Tag[] tagsList) {
        this.tagsList = tagsList;
        return this;
    }
}