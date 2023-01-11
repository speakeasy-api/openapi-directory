package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PublicUserPlan {
    @JsonProperty("collaborators")
    public Long collaborators;
    public PublicUserPlan withCollaborators(Long collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PublicUserPlan withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("private_repos")
    public Long privateRepos;
    public PublicUserPlan withPrivateRepos(Long privateRepos) {
        this.privateRepos = privateRepos;
        return this;
    }
    @JsonProperty("space")
    public Long space;
    public PublicUserPlan withSpace(Long space) {
        this.space = space;
        return this;
    }
}