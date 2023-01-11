package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListForRepoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee")
    public String assignee;
    public IssuesListForRepoQueryParams withAssignee(String assignee) {
        this.assignee = assignee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creator")
    public String creator;
    public IssuesListForRepoQueryParams withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public IssuesListForRepoQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labels")
    public String labels;
    public IssuesListForRepoQueryParams withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mentioned")
    public String mentioned;
    public IssuesListForRepoQueryParams withMentioned(String mentioned) {
        this.mentioned = mentioned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=milestone")
    public String milestone;
    public IssuesListForRepoQueryParams withMilestone(String milestone) {
        this.milestone = milestone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public IssuesListForRepoQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public IssuesListForRepoQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public IssuesListForRepoQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.LabelsEnum sort;
    public IssuesListForRepoQueryParams withSort(openapisdk.models.shared.LabelsEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.RepoEnum2 state;
    public IssuesListForRepoQueryParams withState(openapisdk.models.shared.RepoEnum2 state) {
        this.state = state;
        return this;
    }
}