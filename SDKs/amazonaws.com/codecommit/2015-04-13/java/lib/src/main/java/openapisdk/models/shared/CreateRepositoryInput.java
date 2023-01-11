package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRepositoryInput
 * Represents the input of a create repository operation.
**/
public class CreateRepositoryInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryDescription")
    public String repositoryDescription;
    public CreateRepositoryInput withRepositoryDescription(String repositoryDescription) {
        this.repositoryDescription = repositoryDescription;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public CreateRepositoryInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateRepositoryInput withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}