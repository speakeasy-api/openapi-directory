package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeploymentInstancesOutput
 * Represents the output of a <code>ListDeploymentInstances</code> operation.
**/
public class ListDeploymentInstancesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instancesList")
    public String[] instancesList;
    public ListDeploymentInstancesOutput withInstancesList(String[] instancesList) {
        this.instancesList = instancesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeploymentInstancesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}