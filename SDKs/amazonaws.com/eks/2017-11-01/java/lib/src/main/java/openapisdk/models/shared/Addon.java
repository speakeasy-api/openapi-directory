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
 * Addon
 * An Amazon EKS add-on.
**/
public class Addon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addonArn")
    public String addonArn;
    public Addon withAddonArn(String addonArn) {
        this.addonArn = addonArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addonName")
    public String addonName;
    public Addon withAddonName(String addonName) {
        this.addonName = addonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addonVersion")
    public String addonVersion;
    public Addon withAddonVersion(String addonVersion) {
        this.addonVersion = addonVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public Addon withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Addon withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public AddonHealth health;
    public Addon withHealth(AddonHealth health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedAt")
    public OffsetDateTime modifiedAt;
    public Addon withModifiedAt(OffsetDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountRoleArn")
    public String serviceAccountRoleArn;
    public Addon withServiceAccountRoleArn(String serviceAccountRoleArn) {
        this.serviceAccountRoleArn = serviceAccountRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AddonStatusEnum status;
    public Addon withStatus(AddonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public Addon withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}