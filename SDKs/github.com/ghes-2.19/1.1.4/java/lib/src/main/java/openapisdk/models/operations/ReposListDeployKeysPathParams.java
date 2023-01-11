package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListDeployKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposListDeployKeysPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposListDeployKeysPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}