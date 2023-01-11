package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListLabelsForMilestonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=milestone_number")
    public Long milestoneNumber;
    public IssuesListLabelsForMilestonePathParams withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesListLabelsForMilestonePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesListLabelsForMilestonePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}