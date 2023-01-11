package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListReceiptRuleSetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListReceiptRuleSetsActionEnum action;
    public PostListReceiptRuleSetsQueryParams withAction(PostListReceiptRuleSetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListReceiptRuleSetsVersionEnum version;
    public PostListReceiptRuleSetsQueryParams withVersion(PostListReceiptRuleSetsVersionEnum version) {
        this.version = version;
        return this;
    }
}