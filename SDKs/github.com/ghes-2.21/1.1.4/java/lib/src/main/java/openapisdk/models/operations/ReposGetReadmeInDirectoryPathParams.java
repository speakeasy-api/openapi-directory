package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetReadmeInDirectoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dir")
    public String dir;
    public ReposGetReadmeInDirectoryPathParams withDir(String dir) {
        this.dir = dir;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetReadmeInDirectoryPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetReadmeInDirectoryPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}