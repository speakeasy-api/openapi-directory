package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails
 * A file that contain environment variables to pass to a container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails withValue(String value) {
        this.value = value;
        return this;
    }
}