package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetRepositoriesInput
 * Represents the input of a batch get repositories operation.
**/
public class BatchGetRepositoriesInput {
    @JsonProperty("repositoryNames")
    public String[] repositoryNames;
    public BatchGetRepositoriesInput withRepositoryNames(String[] repositoryNames) {
        this.repositoryNames = repositoryNames;
        return this;
    }
}