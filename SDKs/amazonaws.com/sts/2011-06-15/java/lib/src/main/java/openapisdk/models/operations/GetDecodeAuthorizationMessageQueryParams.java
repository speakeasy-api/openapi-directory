package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDecodeAuthorizationMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDecodeAuthorizationMessageActionEnum action;
    public GetDecodeAuthorizationMessageQueryParams withAction(GetDecodeAuthorizationMessageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EncodedMessage")
    public String encodedMessage;
    public GetDecodeAuthorizationMessageQueryParams withEncodedMessage(String encodedMessage) {
        this.encodedMessage = encodedMessage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDecodeAuthorizationMessageVersionEnum version;
    public GetDecodeAuthorizationMessageQueryParams withVersion(GetDecodeAuthorizationMessageVersionEnum version) {
        this.version = version;
        return this;
    }
}