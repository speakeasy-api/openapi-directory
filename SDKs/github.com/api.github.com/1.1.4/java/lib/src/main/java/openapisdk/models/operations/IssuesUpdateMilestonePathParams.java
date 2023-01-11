package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesUpdateMilestonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=milestone_number")
    public Long milestoneNumber;
    public IssuesUpdateMilestonePathParams withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesUpdateMilestonePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesUpdateMilestonePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}