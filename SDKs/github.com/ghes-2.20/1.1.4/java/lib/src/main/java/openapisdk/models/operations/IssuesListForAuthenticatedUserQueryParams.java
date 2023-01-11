package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListForAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public IssuesListForAuthenticatedUserQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public IssuesListForAuthenticatedUserFilterEnum filter;
    public IssuesListForAuthenticatedUserQueryParams withFilter(IssuesListForAuthenticatedUserFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labels")
    public String labels;
    public IssuesListForAuthenticatedUserQueryParams withLabels(String labels) {
        this.labels = labels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public IssuesListForAuthenticatedUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public IssuesListForAuthenticatedUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public OffsetDateTime since;
    public IssuesListForAuthenticatedUserQueryParams withSince(OffsetDateTime since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.LabelsEnum sort;
    public IssuesListForAuthenticatedUserQueryParams withSort(openapisdk.models.shared.LabelsEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public IssuesListForAuthenticatedUserStateEnum state;
    public IssuesListForAuthenticatedUserQueryParams withState(IssuesListForAuthenticatedUserStateEnum state) {
        this.state = state;
        return this;
    }
}