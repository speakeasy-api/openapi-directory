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
 * FargateProfile
 * An object representing an Fargate profile.
**/
public class FargateProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public FargateProfile withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public FargateProfile withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fargateProfileArn")
    public String fargateProfileArn;
    public FargateProfile withFargateProfileArn(String fargateProfileArn) {
        this.fargateProfileArn = fargateProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fargateProfileName")
    public String fargateProfileName;
    public FargateProfile withFargateProfileName(String fargateProfileName) {
        this.fargateProfileName = fargateProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podExecutionRoleArn")
    public String podExecutionRoleArn;
    public FargateProfile withPodExecutionRoleArn(String podExecutionRoleArn) {
        this.podExecutionRoleArn = podExecutionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectors")
    public FargateProfileSelector[] selectors;
    public FargateProfile withSelectors(FargateProfileSelector[] selectors) {
        this.selectors = selectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public FargateProfileStatusEnum status;
    public FargateProfile withStatus(FargateProfileStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public String[] subnets;
    public FargateProfile withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public FargateProfile withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}