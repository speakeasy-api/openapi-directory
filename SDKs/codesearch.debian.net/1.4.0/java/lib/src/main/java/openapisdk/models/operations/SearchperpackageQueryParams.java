package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchperpackageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=match_mode")
    public SearchperpackageMatchModeEnum matchMode;
    public SearchperpackageQueryParams withMatchMode(SearchperpackageMatchModeEnum matchMode) {
        this.matchMode = matchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchperpackageQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}