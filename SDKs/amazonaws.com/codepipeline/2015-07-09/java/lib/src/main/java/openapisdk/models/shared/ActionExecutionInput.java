package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionExecutionInput
 * Input information used for an action execution.
**/
public class ActionExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionTypeId")
    public ActionTypeId actionTypeId;
    public ActionExecutionInput withActionTypeId(ActionTypeId actionTypeId) {
        this.actionTypeId = actionTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public java.util.Map<String, String> configuration;
    public ActionExecutionInput withConfiguration(java.util.Map<String, String> configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputArtifacts")
    public ArtifactDetail[] inputArtifacts;
    public ActionExecutionInput withInputArtifacts(ArtifactDetail[] inputArtifacts) {
        this.inputArtifacts = inputArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public String namespace;
    public ActionExecutionInput withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ActionExecutionInput withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedConfiguration")
    public java.util.Map<String, String> resolvedConfiguration;
    public ActionExecutionInput withResolvedConfiguration(java.util.Map<String, String> resolvedConfiguration) {
        this.resolvedConfiguration = resolvedConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public ActionExecutionInput withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}