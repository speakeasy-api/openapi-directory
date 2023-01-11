package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitDeleteRefPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public GitDeleteRefPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ref")
    public String ref;
    public GitDeleteRefPathParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public GitDeleteRefPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}