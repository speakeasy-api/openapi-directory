package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetContentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public ReposGetContentPathParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetContentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}