package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteRepositoryInput
 * Represents the input of a delete repository operation.
**/
public class DeleteRepositoryInput {
    @JsonProperty("repositoryName")
    public String repositoryName;
    public DeleteRepositoryInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}