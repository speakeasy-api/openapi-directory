package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsFeedCardsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_archived")
    public String includeArchived;
    public NewsFeedCardsListQueryParams withIncludeArchived(String includeArchived) {
        this.includeArchived = includeArchived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public NewsFeedCardsListQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_direction")
    public String sortDirection;
    public NewsFeedCardsListQueryParams withSortDirection(String sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
}