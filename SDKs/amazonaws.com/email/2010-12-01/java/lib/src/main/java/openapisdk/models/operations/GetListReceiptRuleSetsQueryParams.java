package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListReceiptRuleSetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListReceiptRuleSetsActionEnum action;
    public GetListReceiptRuleSetsQueryParams withAction(GetListReceiptRuleSetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListReceiptRuleSetsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListReceiptRuleSetsVersionEnum version;
    public GetListReceiptRuleSetsQueryParams withVersion(GetListReceiptRuleSetsVersionEnum version) {
        this.version = version;
        return this;
    }
}