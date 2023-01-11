package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePublicDnsNamespaceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public CreatePublicDnsNamespaceRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreatePublicDnsNamespaceRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreatePublicDnsNamespaceRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Properties")
    public PublicDnsNamespaceProperties properties;
    public CreatePublicDnsNamespaceRequest withProperties(PublicDnsNamespaceProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreatePublicDnsNamespaceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}