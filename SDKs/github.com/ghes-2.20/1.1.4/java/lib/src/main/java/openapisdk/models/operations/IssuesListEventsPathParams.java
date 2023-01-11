package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_number")
    public Long issueNumber;
    public IssuesListEventsPathParams withIssueNumber(Long issueNumber) {
        this.issueNumber = issueNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesListEventsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesListEventsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}