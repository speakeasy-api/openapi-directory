package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateCommitStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposCreateCommitStatusPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposCreateCommitStatusPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sha")
    public String sha;
    public ReposCreateCommitStatusPathParams withSha(String sha) {
        this.sha = sha;
        return this;
    }
}