package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitGetTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public GitGetTagPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public GitGetTagPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_sha")
    public String tagSha;
    public GitGetTagPathParams withTagSha(String tagSha) {
        this.tagSha = tagSha;
        return this;
    }
}