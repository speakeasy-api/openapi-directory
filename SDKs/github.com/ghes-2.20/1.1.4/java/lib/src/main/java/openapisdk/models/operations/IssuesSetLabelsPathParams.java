package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesSetLabelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_number")
    public Long issueNumber;
    public IssuesSetLabelsPathParams withIssueNumber(Long issueNumber) {
        this.issueNumber = issueNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesSetLabelsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesSetLabelsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}