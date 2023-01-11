package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRiddleSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetRiddleSearchQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetRiddleSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}