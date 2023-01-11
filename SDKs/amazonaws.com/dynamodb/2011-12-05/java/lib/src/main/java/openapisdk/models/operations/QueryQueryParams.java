package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExclusiveStartKey")
    public String exclusiveStartKey;
    public QueryQueryParams withExclusiveStartKey(String exclusiveStartKey) {
        this.exclusiveStartKey = exclusiveStartKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public QueryQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
}