package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamingSessionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceType")
    public CreateStreamingSessionRequestBodyEc2InstanceTypeEnum ec2InstanceType;
    public CreateStreamingSessionRequestBody withEc2InstanceType(CreateStreamingSessionRequestBodyEc2InstanceTypeEnum ec2InstanceType) {
        this.ec2InstanceType = ec2InstanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchProfileId")
    public String launchProfileId;
    public CreateStreamingSessionRequestBody withLaunchProfileId(String launchProfileId) {
        this.launchProfileId = launchProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownedBy")
    public String ownedBy;
    public CreateStreamingSessionRequestBody withOwnedBy(String ownedBy) {
        this.ownedBy = ownedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImageId")
    public String streamingImageId;
    public CreateStreamingSessionRequestBody withStreamingImageId(String streamingImageId) {
        this.streamingImageId = streamingImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateStreamingSessionRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}