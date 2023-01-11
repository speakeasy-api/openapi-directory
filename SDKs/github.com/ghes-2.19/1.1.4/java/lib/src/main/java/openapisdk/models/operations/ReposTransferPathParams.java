package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposTransferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposTransferPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposTransferPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}