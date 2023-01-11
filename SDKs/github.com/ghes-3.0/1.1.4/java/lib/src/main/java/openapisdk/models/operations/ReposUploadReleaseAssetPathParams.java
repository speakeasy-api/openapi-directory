package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUploadReleaseAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposUploadReleaseAssetPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=release_id")
    public Long releaseId;
    public ReposUploadReleaseAssetPathParams withReleaseId(Long releaseId) {
        this.releaseId = releaseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposUploadReleaseAssetPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}