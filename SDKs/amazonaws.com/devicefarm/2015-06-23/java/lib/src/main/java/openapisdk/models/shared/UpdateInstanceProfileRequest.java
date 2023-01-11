package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateInstanceProfileRequest {
    @JsonProperty("arn")
    public String arn;
    public UpdateInstanceProfileRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateInstanceProfileRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeAppPackagesFromCleanup")
    public String[] excludeAppPackagesFromCleanup;
    public UpdateInstanceProfileRequest withExcludeAppPackagesFromCleanup(String[] excludeAppPackagesFromCleanup) {
        this.excludeAppPackagesFromCleanup = excludeAppPackagesFromCleanup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateInstanceProfileRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageCleanup")
    public Boolean packageCleanup;
    public UpdateInstanceProfileRequest withPackageCleanup(Boolean packageCleanup) {
        this.packageCleanup = packageCleanup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rebootAfterUse")
    public Boolean rebootAfterUse;
    public UpdateInstanceProfileRequest withRebootAfterUse(Boolean rebootAfterUse) {
        this.rebootAfterUse = rebootAfterUse;
        return this;
    }
}