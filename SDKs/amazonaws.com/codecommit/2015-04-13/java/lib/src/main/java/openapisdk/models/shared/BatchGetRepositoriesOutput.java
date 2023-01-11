package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetRepositoriesOutput
 * Represents the output of a batch get repositories operation.
**/
public class BatchGetRepositoriesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositories")
    public RepositoryMetadata[] repositories;
    public BatchGetRepositoriesOutput withRepositories(RepositoryMetadata[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoriesNotFound")
    public String[] repositoriesNotFound;
    public BatchGetRepositoriesOutput withRepositoriesNotFound(String[] repositoriesNotFound) {
        this.repositoriesNotFound = repositoriesNotFound;
        return this;
    }
}