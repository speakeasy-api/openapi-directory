package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPrincipalsForPortfolioQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public String pageSize;
    public ListPrincipalsForPortfolioQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListPrincipalsForPortfolioQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}