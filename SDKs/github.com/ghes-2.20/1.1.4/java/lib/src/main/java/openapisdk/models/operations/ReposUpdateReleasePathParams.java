package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateReleasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposUpdateReleasePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=release_id")
    public Long releaseId;
    public ReposUpdateReleasePathParams withReleaseId(Long releaseId) {
        this.releaseId = releaseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposUpdateReleasePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}