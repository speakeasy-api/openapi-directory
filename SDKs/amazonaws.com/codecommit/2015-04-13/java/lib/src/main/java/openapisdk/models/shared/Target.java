package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Target
 * Returns information about a target for a pull request.
**/
public class Target {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationReference")
    public String destinationReference;
    public Target withDestinationReference(String destinationReference) {
        this.destinationReference = destinationReference;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public Target withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("sourceReference")
    public String sourceReference;
    public Target withSourceReference(String sourceReference) {
        this.sourceReference = sourceReference;
        return this;
    }
}