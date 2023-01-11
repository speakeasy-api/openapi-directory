package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequestBody {
    @JsonProperty("Arn")
    public String arn;
    public TagResourceRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public TagResourceRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}