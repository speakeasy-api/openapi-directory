package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksListSuitesForRefPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ChecksListSuitesForRefPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ref")
    public String ref;
    public ChecksListSuitesForRefPathParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ChecksListSuitesForRefPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}