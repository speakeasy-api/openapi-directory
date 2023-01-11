package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails
 * A dependency that is defined for container startup and shutdown.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Condition")
    public String condition;
    public AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerName")
    public String containerName;
    public AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
}