package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDeviceDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public GetDeviceDefinitionResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationTimestamp")
    public String creationTimestamp;
    public GetDeviceDefinitionResponse withCreationTimestamp(String creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public GetDeviceDefinitionResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdatedTimestamp")
    public String lastUpdatedTimestamp;
    public GetDeviceDefinitionResponse withLastUpdatedTimestamp(String lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestVersion")
    public String latestVersion;
    public GetDeviceDefinitionResponse withLatestVersion(String latestVersion) {
        this.latestVersion = latestVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestVersionArn")
    public String latestVersionArn;
    public GetDeviceDefinitionResponse withLatestVersionArn(String latestVersionArn) {
        this.latestVersionArn = latestVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetDeviceDefinitionResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public GetDeviceDefinitionResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}