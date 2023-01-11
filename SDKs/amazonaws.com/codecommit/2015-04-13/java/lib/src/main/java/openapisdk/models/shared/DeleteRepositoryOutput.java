package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteRepositoryOutput
 * Represents the output of a delete repository operation.
**/
public class DeleteRepositoryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryId")
    public String repositoryId;
    public DeleteRepositoryOutput withRepositoryId(String repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
}