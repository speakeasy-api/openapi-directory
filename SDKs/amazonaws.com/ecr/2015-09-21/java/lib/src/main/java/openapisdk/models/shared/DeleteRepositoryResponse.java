package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRepositoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public Repository repository;
    public DeleteRepositoryResponse withRepository(Repository repository) {
        this.repository = repository;
        return this;
    }
}