package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=collab")
    public Boolean collab;
    public IssuesListQueryParams withCollab(Boolean collab) {
        this.collab = collab;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public IssuesListQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public IssuesListFilterEnum filter;
    public IssuesListQueryParams withFilter(IssuesListFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labels")
    public String labels;
    public IssuesListQueryParams withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orgs")
    public Boolean orgs;
    public IssuesListQueryParams withOrgs(Boolean orgs) {
        this.orgs = orgs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=owned")
    public Boolean owned;
    public IssuesListQueryParams withOwned(Boolean owned) {
        this.owned = owned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public IssuesListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public IssuesListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pulls")
    public Boolean pulls;
    public IssuesListQueryParams withPulls(Boolean pulls) {
        this.pulls = pulls;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public IssuesListQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.LabelsEnum sort;
    public IssuesListQueryParams withSort(openapisdk.models.shared.LabelsEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public IssuesListStateEnum state;
    public IssuesListQueryParams withState(IssuesListStateEnum state) {
        this.state = state;
        return this;
    }
}