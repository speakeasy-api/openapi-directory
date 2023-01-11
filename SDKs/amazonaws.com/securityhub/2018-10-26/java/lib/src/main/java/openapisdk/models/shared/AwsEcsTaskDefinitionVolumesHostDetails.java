package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionVolumesHostDetails
 * Information about a bind mount host volume.
**/
public class AwsEcsTaskDefinitionVolumesHostDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourcePath")
    public String sourcePath;
    public AwsEcsTaskDefinitionVolumesHostDetails withSourcePath(String sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    }
}