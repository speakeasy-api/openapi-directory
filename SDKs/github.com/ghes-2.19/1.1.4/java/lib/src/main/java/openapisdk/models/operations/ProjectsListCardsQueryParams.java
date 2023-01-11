package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListCardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived_state")
    public openapisdk.models.shared.ColumnIdEnum archivedState;
    public ProjectsListCardsQueryParams withArchivedState(openapisdk.models.shared.ColumnIdEnum archivedState) {
        this.archivedState = archivedState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ProjectsListCardsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ProjectsListCardsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}