package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRepositoryOutput
 * Represents the output of a get repository operation.
**/
public class GetRepositoryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryMetadata")
    public RepositoryMetadata repositoryMetadata;
    public GetRepositoryOutput withRepositoryMetadata(RepositoryMetadata repositoryMetadata) {
        this.repositoryMetadata = repositoryMetadata;
        return this;
    }
}