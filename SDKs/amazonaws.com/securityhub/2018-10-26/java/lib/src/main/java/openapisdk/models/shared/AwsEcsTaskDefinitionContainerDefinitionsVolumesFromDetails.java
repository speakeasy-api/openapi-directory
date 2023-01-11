package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails
 * A data volume to mount from another container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadOnly")
    public Boolean readOnly;
    public AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceContainer")
    public String sourceContainer;
    public AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails withSourceContainer(String sourceContainer) {
        this.sourceContainer = sourceContainer;
        return this;
    }
}