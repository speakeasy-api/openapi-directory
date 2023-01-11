package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountHolderTransactionListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAccountHolderTransactionListRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostAccountHolderTransactionListSecurity security;
    public PostAccountHolderTransactionListRequest withSecurity(PostAccountHolderTransactionListSecurity security) {
        this.security = security;
        return this;
    }
}