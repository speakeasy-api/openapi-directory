package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListTemplatesActionEnum action;
    public GetListTemplatesQueryParams withAction(GetListTemplatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListTemplatesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListTemplatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListTemplatesVersionEnum version;
    public GetListTemplatesQueryParams withVersion(GetListTemplatesVersionEnum version) {
        this.version = version;
        return this;
    }
}