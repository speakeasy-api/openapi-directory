package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamingImageRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateStreamingImageRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("ec2ImageId")
    public String ec2ImageId;
    public CreateStreamingImageRequestBody withEc2ImageId(String ec2ImageId) {
        this.ec2ImageId = ec2ImageId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateStreamingImageRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateStreamingImageRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}