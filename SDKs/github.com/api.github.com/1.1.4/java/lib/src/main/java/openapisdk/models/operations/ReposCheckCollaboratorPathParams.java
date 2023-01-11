package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCheckCollaboratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposCheckCollaboratorPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposCheckCollaboratorPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ReposCheckCollaboratorPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}