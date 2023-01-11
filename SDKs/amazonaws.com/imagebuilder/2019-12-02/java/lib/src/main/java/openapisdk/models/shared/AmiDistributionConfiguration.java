package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmiDistributionConfiguration
 *  Define and configure the output AMIs of the pipeline.
**/
public class AmiDistributionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amiTags")
    public java.util.Map<String, String> amiTags;
    public AmiDistributionConfiguration withAmiTags(java.util.Map<String, String> amiTags) {
        this.amiTags = amiTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AmiDistributionConfiguration withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public AmiDistributionConfiguration withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchPermission")
    public LaunchPermissionConfiguration launchPermission;
    public AmiDistributionConfiguration withLaunchPermission(LaunchPermissionConfiguration launchPermission) {
        this.launchPermission = launchPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AmiDistributionConfiguration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetAccountIds")
    public String[] targetAccountIds;
    public AmiDistributionConfiguration withTargetAccountIds(String[] targetAccountIds) {
        this.targetAccountIds = targetAccountIds;
        return this;
    }
}