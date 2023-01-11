package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourcesForTagOptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public ListResourcesForTagOptionInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ListResourcesForTagOptionInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public String resourceType;
    public ListResourcesForTagOptionInput withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("TagOptionId")
    public String tagOptionId;
    public ListResourcesForTagOptionInput withTagOptionId(String tagOptionId) {
        this.tagOptionId = tagOptionId;
        return this;
    }
}