package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposDeleteFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposDeleteFilePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public ReposDeleteFilePathParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposDeleteFilePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}