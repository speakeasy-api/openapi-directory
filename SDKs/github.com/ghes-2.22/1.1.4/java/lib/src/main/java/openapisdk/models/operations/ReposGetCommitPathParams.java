package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetCommitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetCommitPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ref")
    public String ref;
    public ReposGetCommitPathParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetCommitPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}