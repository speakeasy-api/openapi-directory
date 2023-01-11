package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetReadmeFromAltPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dir")
    public String dir;
    public ReposGetReadmeFromAltPathPathParams withDir(String dir) {
        this.dir = dir;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetReadmeFromAltPathPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetReadmeFromAltPathPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}