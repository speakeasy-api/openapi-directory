package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInstanceProfileRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateInstanceProfileRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeAppPackagesFromCleanup")
    public String[] excludeAppPackagesFromCleanup;
    public CreateInstanceProfileRequest withExcludeAppPackagesFromCleanup(String[] excludeAppPackagesFromCleanup) {
        this.excludeAppPackagesFromCleanup = excludeAppPackagesFromCleanup;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateInstanceProfileRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageCleanup")
    public Boolean packageCleanup;
    public CreateInstanceProfileRequest withPackageCleanup(Boolean packageCleanup) {
        this.packageCleanup = packageCleanup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rebootAfterUse")
    public Boolean rebootAfterUse;
    public CreateInstanceProfileRequest withRebootAfterUse(Boolean rebootAfterUse) {
        this.rebootAfterUse = rebootAfterUse;
        return this;
    }
}