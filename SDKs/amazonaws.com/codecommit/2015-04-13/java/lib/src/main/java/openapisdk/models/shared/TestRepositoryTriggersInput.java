package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TestRepositoryTriggersInput
 * Represents the input of a test repository triggers operation.
**/
public class TestRepositoryTriggersInput {
    @JsonProperty("repositoryName")
    public String repositoryName;
    public TestRepositoryTriggersInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("triggers")
    public RepositoryTrigger[] triggers;
    public TestRepositoryTriggersInput withTriggers(RepositoryTrigger[] triggers) {
        this.triggers = triggers;
        return this;
    }
}