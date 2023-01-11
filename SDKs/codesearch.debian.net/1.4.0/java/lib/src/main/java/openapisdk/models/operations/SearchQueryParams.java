package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=match_mode")
    public SearchMatchModeEnum matchMode;
    public SearchQueryParams withMatchMode(SearchMatchModeEnum matchMode) {
        this.matchMode = matchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}