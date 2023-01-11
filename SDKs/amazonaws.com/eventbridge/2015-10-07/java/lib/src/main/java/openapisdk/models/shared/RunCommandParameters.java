package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RunCommandParameters
 * This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. 
**/
public class RunCommandParameters {
    @JsonProperty("RunCommandTargets")
    public RunCommandTarget[] runCommandTargets;
    public RunCommandParameters withRunCommandTargets(RunCommandTarget[] runCommandTargets) {
        this.runCommandTargets = runCommandTargets;
        return this;
    }
}