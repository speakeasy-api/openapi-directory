package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequest {
    @JsonProperty("Arn")
    public String arn;
    public TagResourceRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagResourceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}