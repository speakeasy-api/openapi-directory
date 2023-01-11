package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsMapCommitAuthorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=author_id")
    public Long authorId;
    public MigrationsMapCommitAuthorPathParams withAuthorId(Long authorId) {
        this.authorId = authorId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public MigrationsMapCommitAuthorPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public MigrationsMapCommitAuthorPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}