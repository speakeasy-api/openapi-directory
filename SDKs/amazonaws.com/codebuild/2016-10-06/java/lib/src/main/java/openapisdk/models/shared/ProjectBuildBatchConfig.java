package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectBuildBatchConfig
 * Contains configuration information about a batch build project.
**/
public class ProjectBuildBatchConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combineArtifacts")
    public Boolean combineArtifacts;
    public ProjectBuildBatchConfig withCombineArtifacts(Boolean combineArtifacts) {
        this.combineArtifacts = combineArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public BatchRestrictions restrictions;
    public ProjectBuildBatchConfig withRestrictions(BatchRestrictions restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRole")
    public String serviceRole;
    public ProjectBuildBatchConfig withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutInMins")
    public Long timeoutInMins;
    public ProjectBuildBatchConfig withTimeoutInMins(Long timeoutInMins) {
        this.timeoutInMins = timeoutInMins;
        return this;
    }
}