package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitUpdateRefPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public GitUpdateRefPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ref")
    public String ref;
    public GitUpdateRefPathParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public GitUpdateRefPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}