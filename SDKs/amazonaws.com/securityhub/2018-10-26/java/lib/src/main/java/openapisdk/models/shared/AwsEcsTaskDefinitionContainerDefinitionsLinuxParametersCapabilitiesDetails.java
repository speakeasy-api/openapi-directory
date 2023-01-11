package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
 * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Add")
    public String[] add;
    public AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails withAdd(String[] add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Drop")
    public String[] drop;
    public AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails withDrop(String[] drop) {
        this.drop = drop;
        return this;
    }
}