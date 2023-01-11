package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListConfigurationSetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListConfigurationSetsActionEnum action;
    public GetListConfigurationSetsQueryParams withAction(GetListConfigurationSetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListConfigurationSetsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListConfigurationSetsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListConfigurationSetsVersionEnum version;
    public GetListConfigurationSetsQueryParams withVersion(GetListConfigurationSetsVersionEnum version) {
        this.version = version;
        return this;
    }
}