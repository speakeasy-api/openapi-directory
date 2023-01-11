package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRepositoryOutput
 * Represents the output of a create repository operation.
**/
public class CreateRepositoryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryMetadata")
    public RepositoryMetadata repositoryMetadata;
    public CreateRepositoryOutput withRepositoryMetadata(RepositoryMetadata repositoryMetadata) {
        this.repositoryMetadata = repositoryMetadata;
        return this;
    }
}