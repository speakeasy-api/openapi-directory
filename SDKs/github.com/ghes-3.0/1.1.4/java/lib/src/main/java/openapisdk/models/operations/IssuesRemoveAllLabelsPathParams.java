package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesRemoveAllLabelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_number")
    public Long issueNumber;
    public IssuesRemoveAllLabelsPathParams withIssueNumber(Long issueNumber) {
        this.issueNumber = issueNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesRemoveAllLabelsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesRemoveAllLabelsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}