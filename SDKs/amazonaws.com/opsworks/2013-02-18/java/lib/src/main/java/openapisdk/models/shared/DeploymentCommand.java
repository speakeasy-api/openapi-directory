package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentCommand
 * Used to specify a stack or deployment command.
**/
public class DeploymentCommand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Args")
    public java.util.Map<String, String[]> args;
    public DeploymentCommand withArgs(java.util.Map<String, String[]> args) {
        this.args = args;
        return this;
    }
    @JsonProperty("Name")
    public DeploymentCommandNameEnum name;
    public DeploymentCommand withName(DeploymentCommandNameEnum name) {
        this.name = name;
        return this;
    }
}