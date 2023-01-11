package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHttpNamespaceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public CreateHttpNamespaceRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateHttpNamespaceRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateHttpNamespaceRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateHttpNamespaceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}