package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetDeploymentsOutput
 *  Represents the output of a <code>BatchGetDeployments</code> operation. 
**/
public class BatchGetDeploymentsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentsInfo")
    public DeploymentInfo[] deploymentsInfo;
    public BatchGetDeploymentsOutput withDeploymentsInfo(DeploymentInfo[] deploymentsInfo) {
        this.deploymentsInfo = deploymentsInfo;
        return this;
    }
}