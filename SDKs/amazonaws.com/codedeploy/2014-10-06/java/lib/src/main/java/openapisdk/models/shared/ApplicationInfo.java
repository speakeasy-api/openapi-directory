package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ApplicationInfo
 * Information about an application.
**/
public class ApplicationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationId")
    public String applicationId;
    public ApplicationInfo withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationName")
    public String applicationName;
    public ApplicationInfo withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computePlatform")
    public ComputePlatformEnum computePlatform;
    public ApplicationInfo withComputePlatform(ComputePlatformEnum computePlatform) {
        this.computePlatform = computePlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createTime")
    public OffsetDateTime createTime;
    public ApplicationInfo withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitHubAccountName")
    public String gitHubAccountName;
    public ApplicationInfo withGitHubAccountName(String gitHubAccountName) {
        this.gitHubAccountName = gitHubAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedToGitHub")
    public Boolean linkedToGitHub;
    public ApplicationInfo withLinkedToGitHub(Boolean linkedToGitHub) {
        this.linkedToGitHub = linkedToGitHub;
        return this;
    }
}