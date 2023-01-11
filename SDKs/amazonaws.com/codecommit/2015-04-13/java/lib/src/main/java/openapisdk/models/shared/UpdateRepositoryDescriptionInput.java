package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRepositoryDescriptionInput
 * Represents the input of an update repository description operation.
**/
public class UpdateRepositoryDescriptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryDescription")
    public String repositoryDescription;
    public UpdateRepositoryDescriptionInput withRepositoryDescription(String repositoryDescription) {
        this.repositoryDescription = repositoryDescription;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public UpdateRepositoryDescriptionInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}