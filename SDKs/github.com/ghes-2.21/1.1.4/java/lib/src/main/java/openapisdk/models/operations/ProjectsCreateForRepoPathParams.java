package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsCreateForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ProjectsCreateForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ProjectsCreateForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}