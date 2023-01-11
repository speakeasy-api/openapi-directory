package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTagsRequest {
    @JsonProperty("configurationIds")
    public String[] configurationIds;
    public DeleteTagsRequest withConfigurationIds(String[] configurationIds) {
        this.configurationIds = configurationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public DeleteTagsRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}