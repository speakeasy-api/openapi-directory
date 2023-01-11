package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposDeleteReleaseAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asset_id")
    public Long assetId;
    public ReposDeleteReleaseAssetPathParams withAssetId(Long assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposDeleteReleaseAssetPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposDeleteReleaseAssetPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}