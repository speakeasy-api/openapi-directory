package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListForOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public IssuesListForOrgQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public openapisdk.models.shared.OrgEnum filter;
    public IssuesListForOrgQueryParams withFilter(openapisdk.models.shared.OrgEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labels")
    public String labels;
    public IssuesListForOrgQueryParams withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public IssuesListForOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public IssuesListForOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public IssuesListForOrgQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.LabelsEnum sort;
    public IssuesListForOrgQueryParams withSort(openapisdk.models.shared.LabelsEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.OrgEnum1 state;
    public IssuesListForOrgQueryParams withState(openapisdk.models.shared.OrgEnum1 state) {
        this.state = state;
        return this;
    }
}