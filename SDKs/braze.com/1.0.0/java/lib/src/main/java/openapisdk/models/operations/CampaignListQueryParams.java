package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_archived")
    public String includeArchived;
    public CampaignListQueryParams withIncludeArchived(String includeArchived) {
        this.includeArchived = includeArchived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_edit.time[gt]")
    public String lastEditTimeGt;
    public CampaignListQueryParams withLastEditTimeGt(String lastEditTimeGt) {
        this.lastEditTimeGt = lastEditTimeGt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public CampaignListQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_direction")
    public String sortDirection;
    public CampaignListQueryParams withSortDirection(String sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
}