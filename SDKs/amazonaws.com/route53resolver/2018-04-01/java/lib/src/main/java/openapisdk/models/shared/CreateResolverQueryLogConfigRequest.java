package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateResolverQueryLogConfigRequest {
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public CreateResolverQueryLogConfigRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonProperty("DestinationArn")
    public String destinationArn;
    public CreateResolverQueryLogConfigRequest withDestinationArn(String destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateResolverQueryLogConfigRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateResolverQueryLogConfigRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}