package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerDatasetAction
 * Information required to run the <code>containerAction</code> to produce dataset contents.
**/
public class ContainerDatasetAction {
    @JsonProperty("executionRoleArn")
    public String executionRoleArn;
    public ContainerDatasetAction withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonProperty("image")
    public String image;
    public ContainerDatasetAction withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonProperty("resourceConfiguration")
    public ResourceConfiguration resourceConfiguration;
    public ContainerDatasetAction withResourceConfiguration(ResourceConfiguration resourceConfiguration) {
        this.resourceConfiguration = resourceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variables")
    public Variable[] variables;
    public ContainerDatasetAction withVariables(Variable[] variables) {
        this.variables = variables;
        return this;
    }
}