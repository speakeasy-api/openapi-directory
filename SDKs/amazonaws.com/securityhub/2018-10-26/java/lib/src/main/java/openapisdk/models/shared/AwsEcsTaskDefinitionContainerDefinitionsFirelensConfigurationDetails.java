package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
 * The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public java.util.Map<String, String> options;
    public AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails withOptions(java.util.Map<String, String> options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails withType(String type) {
        this.type = type;
        return this;
    }
}