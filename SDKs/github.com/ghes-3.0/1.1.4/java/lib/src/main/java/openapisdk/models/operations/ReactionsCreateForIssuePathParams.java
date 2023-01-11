package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForIssuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_number")
    public Long issueNumber;
    public ReactionsCreateForIssuePathParams withIssueNumber(Long issueNumber) {
        this.issueNumber = issueNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReactionsCreateForIssuePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReactionsCreateForIssuePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}