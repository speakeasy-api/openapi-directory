package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryDbQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public QueryDbQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}