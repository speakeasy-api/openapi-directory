package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetRepositoryTriggersInput
 * Represents the input of a get repository triggers operation.
**/
public class GetRepositoryTriggersInput {
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetRepositoryTriggersInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}