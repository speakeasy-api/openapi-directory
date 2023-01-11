package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExclusiveStartStreamName")
    public String exclusiveStartStreamName;
    public ListStreamsQueryParams withExclusiveStartStreamName(String exclusiveStartStreamName) {
        this.exclusiveStartStreamName = exclusiveStartStreamName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public ListStreamsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
}