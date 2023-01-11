package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetRepositoryInput
 * Represents the input of a get repository operation.
**/
public class GetRepositoryInput {
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetRepositoryInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}