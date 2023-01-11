package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RepositoryNameIdPair
 * Information about a repository name and ID.
**/
public class RepositoryNameIdPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryId")
    public String repositoryId;
    public RepositoryNameIdPair withRepositoryId(String repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public RepositoryNameIdPair withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}