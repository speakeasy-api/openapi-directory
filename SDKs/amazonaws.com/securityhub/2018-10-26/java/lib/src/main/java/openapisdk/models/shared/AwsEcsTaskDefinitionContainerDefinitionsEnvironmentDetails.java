package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails
 * An environment variable to pass to the container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails withValue(String value) {
        this.value = value;
        return this;
    }
}