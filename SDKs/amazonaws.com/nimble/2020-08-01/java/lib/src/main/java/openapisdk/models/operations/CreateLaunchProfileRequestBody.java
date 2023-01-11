package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLaunchProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateLaunchProfileRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("ec2SubnetIds")
    public String[] ec2SubnetIds;
    public CreateLaunchProfileRequestBody withEc2SubnetIds(String[] ec2SubnetIds) {
        this.ec2SubnetIds = ec2SubnetIds;
        return this;
    }
    @JsonProperty("launchProfileProtocolVersions")
    public String[] launchProfileProtocolVersions;
    public CreateLaunchProfileRequestBody withLaunchProfileProtocolVersions(String[] launchProfileProtocolVersions) {
        this.launchProfileProtocolVersions = launchProfileProtocolVersions;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateLaunchProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("streamConfiguration")
    public CreateLaunchProfileRequestBodyStreamConfiguration streamConfiguration;
    public CreateLaunchProfileRequestBody withStreamConfiguration(CreateLaunchProfileRequestBodyStreamConfiguration streamConfiguration) {
        this.streamConfiguration = streamConfiguration;
        return this;
    }
    @JsonProperty("studioComponentIds")
    public String[] studioComponentIds;
    public CreateLaunchProfileRequestBody withStudioComponentIds(String[] studioComponentIds) {
        this.studioComponentIds = studioComponentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateLaunchProfileRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}